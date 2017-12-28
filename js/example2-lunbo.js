      window.onload =function(){onload1();onload2()}
      var onload1=function() {
      	var container = document.getElementById('main_top');
      	var list = document.getElementById('list');
      	var buttons = document.getElementById('buttons').getElementsByTagName('span');
      	var prev = document.getElementById('prev');
      	var next = document.getElementById('next');
      	var index = 1;
      	var len = 5;
      	var animated = false;
      	var interval = 4000;
      	var timer;
       //console.log(screen.width);屏幕宽1920px
      	function animate(offset) {
      		if(offset == 0) {
      			return;
      		}
      		animated = true;
      		var time = 1000;
      		var inteval = 10;
      		var speed = offset / (time / inteval);
      		var left = parseInt(list.style.left) + offset;

      		var go = function() {
      			if((speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
      				list.style.left = parseInt(list.style.left) + speed + 'px';
      				setTimeout(go, inteval);
      			} else {
      				list.style.left = left + 'px';
      				if(left > -200) {
      					list.style.left = -6650 + 'px';
      				}
      				if(left < (-1380 * len)) {
      					list.style.left = '-1120px';
      				}
      				animated = false;
      			}
      		}
      		go();
      	}

      	function showButton() {
      		for(var i = 0; i < buttons.length; i++) {
      			if(buttons[i].className == 'on') {
      				buttons[i].className = '';
      				break;
      			}
      		}
      		buttons[index - 1].className = 'on';
      	}

      	function play() {
      		stop();
      		timer = setTimeout(function() {
      			next.onclick();
      			play();
      		}, interval);
      	}

      	function stop() {
      		clearTimeout(timer);
      	}

      	next.onclick = function() {
      		if(animated) {
      			return;
      		}
      		if(index == 5) {
      			index = 1;
      		} else {
      			index += 1;
      		}
      		animate(-1380);
      		showButton();
      	}
      	
      	prev.onclick = function() {
      		if(animated) {
      			return;
      		}
      		if(index == 1) {
      			index = 5;
      		} else {
      			index -= 1;
      		}
      		animate(1380);
      		showButton();
      	}

      	for(var i = 0; i < buttons.length; i++) {
      		buttons[i].onclick = function() {
      			if(animated) {
      				return;
      			}
      			if(this.className == 'on') {
      				return;
      			}
      			var myIndex = parseInt(this.getAttribute('index'));
      			var offset = -1380 * (myIndex - index);

      			animate(offset);
      			index = myIndex;
      			showButton();
      		}
      	}

      	container.onmouseover = stop;
      	container.onmouseout = play;

      	play();

      }
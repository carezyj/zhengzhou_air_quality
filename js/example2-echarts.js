		//页面加载完毕后加载js
		var onload2=function(){
			//图一
			var myChart=echarts.init(document.getElementById('container1'));
   //myChart.showLoading({text:'正在努力的读取数据中...'});
   var arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],
       arr7=[],arr8=[],arr9=[],arr10=[],arr11=[],arr12=[];
   function arrtest(){
   	$.ajax({
   		type:"post",
   		url:"http://127.0.0.1/demo/PHP/lvsezhengzhou.php",
   		async:false,
   		data:{},
   		dataType:"json",
   		success:function(arr){
/*   			//四年数据，数据截取方法获取数组
   			var newary_14=arr.slice(0,6);
   			var newary_15=arr.slice(6,12);  			
     	var newary_16=arr.slice(12,18);	
     	var newary_17=arr.slice(arr.length-10,arr.length-4);*/
     	//四年数据，对象名称获取数组
     	var newary_14=[],newary_15=[],newary_16=[],newary_17=[];
     	for(var i =0; i <arr.length; i++){
						if(arr[i].quality_14){
						newary_14.push(arr[i]);
						}else if(arr[i].quality_15){
						newary_15.push(arr[i]);
						}else if(arr[i].quality_16){
						newary_16.push(arr[i]);
						}else if(arr[i].quality_17){
							newary_17.push(arr[i]);
						}
						}
      console.log(newary_14);
  			if(newary_17){
   				for(var i=0;i<newary_17.length;i++){
   				arr1.push(newary_17[i].quality_17);
   				arr2.push(newary_17[i].aqi_days_17);
   				}
   				arr3.push(newary_17[0].year_17);
   		}
     if(newary_14){
   				for(var i=0;i<newary_14.length;i++){
   				arr4.push(newary_14[i].quality_14);
   				arr5.push(newary_14[i].aqi_days_14);
   				}
   				arr6.push(newary_14[0].year_14);
   		}
     if(newary_15){
   				for(var i=0;i<newary_15.length;i++){
   				arr7.push(newary_15[i].quality_15);
   				arr8.push(newary_15[i].aqi_days_15);
   				}
   				arr9.push(newary_15[0].year_15);
   		}
     if(newary_16){
   				for(var i=0;i<newary_16.length;i++){
   				arr10.push(newary_16[i].quality_16);
   				arr11.push(newary_16[i].aqi_days_16);
   				}	
   				arr12.push(newary_16[0].year_16);
   		}
   		}
   	})
   	return arr1,arr2,arr3,arr4,arr5,arr6,
   	       arr7,arr8,arr9,arr10,arr11,arr12;
   }
   arrtest();
   function pic(a,b,c){
   var option = {
				title:{
				 text:c+'年郑州AQI柱状图',
				//subtext:'http://www.pm2.5.in',//副标签
					//sublink:'http://www.pm2.5.in',//副标题链接
					//left:'center',
					textStyle:{
						color:'rgba(0,0,0,0.8)',
						fontSize:16,
						lineHeight:16
					},
					subtextStyle:{
						padding:0,//标题内边距
						//itemGap:100,//主副标题之间的距离
						fontSize:15,
						borderColor:'red'
					}
					},
					
					tooltip:{
					trigger:'axis'//坐标轴触发提示项
				},	
				//图例组件
				//工具栏
					toolbox:{
					show:true,
					feature:{
						mark:{show:true},
						dataView:{show:true,readyOnly:false},//展现当前图表所用数据
						magicType:{show:true,type:['bar','line']},//动态类型切换
						restore:{show:true},//配置项还原
						saveAsImage:{show:true}					
					}
					},
					//直角坐标系在grid中的x轴
				xAxis:[{
					//data:["优","良","轻度污染","中度污染","重度污染","严重污染"]

             type: 'category',
             	data: a
       }
       ],
				//直角坐标系在grid中的y轴
				yAxis:{
					name:'AQI天数（天）'
				},
				//系列列表
				series:[{
					name:'AQI天数',
					type:'bar',
					data:b,
					barMaxWidth :'30%',
					itemStyle:{
							normal:{
								color:function(params){
									var colorList=['#00E400','#FFFF00','#FF7E00','#FF0000',
								'#99004C','#4C0026']
									return colorList[params.dataIndex]
								}
								//color:'#c04346',//柱条颜色
								//shadowBlur:200,//图形阴影模糊大小
								//shadowOffsetX:0,//阴影水平方向上的偏移距离
							//	shadowOffsetY:0,
								//shadowColor:'rgba(0,0,0,0.5)'//阴影颜色
							},
							emphasis:{
								shadowBlur:200,
								shadowColor:'rgba(237,248,233,0.8)'
							}
						}
				}],
				//全局文本设置
				textStyle:{
					color:'rgba(0,0,0,0.6)'
				},
				//设置标签的视觉引导线颜色
			 labelLine:{
			 	normal:{
			 		lineStyle:{
			 			color:'rgba(255,255,255,0.3)'
			 		}
			 	}
			 }
		};			 
		 myChart.setOption(option);}
   pic(arr1,arr2,arr3);
   //pic(arr4,arr5,arr6);
  $("#sel_aqi_days").change(function(){
		var item=$("#sel_aqi_days").val();
  if(item=="2014"){
	  pic(arr4,arr5,arr6);
  }else if(item=="2015"){
	 pic(arr7,arr8,arr9);
  }else if(item=="2016"){
	 pic(arr10,arr11,arr12);
  }else{
	 pic(arr1,arr2,arr3);;
  }
	 });
	/*	 //图二
		 var myChart=echarts.init(document.getElementById('container2'));
			var option = {
				title:{
					text:'PM2.5折线图'
				},
				tooltip:{
					trigger:'axis'//坐标轴触发提示项
				},
				legend:{
					data:['PM2.5']//图例名称
				},
				toolbox:{
					show:true,
					feature:{
						mark:{show:true},
						dataView:{show:true,readyOnly:false},//展现当前图表所用数据
						magicType:{show:true,type:['line','bar']},//动态类型切换
						restore:{show:true},//配置项还原
						saveAsImage:{show:true}					
					}
				},
				calculable:true,//是否显示拖拽用的手柄
				xAxis:{
					type:'category',//离散型数据
     //boundaryGap:false,
					data:["冬","春","夏","秋","冬","春","夏","秋","冬","春","夏","秋","冬","春","夏"]
				},
				yAxis:{},
				series:[{
					name:'PM2.5',
					type:'line',//折线图
					data:[184,153,123,155,212,175,128,143,209,171,82,125,201,150,96],
					itemStyle:{
						normal:{
							shadowBlur:200,
							shadowOffsetX:0,
							shadowOffsetY:0,
							shadowColor:'rgba(0,0,0,0.5)'
						},
							emphasis:{
							shadowBlur:200,
							shadowColor:'rgba(237,248,233,0.8)'
						}
					}
				}],
				//全局文本设置
	    textStyle:{
					color:'rgba(0,0,0,0.6)'
				},
				//设置标签的视觉引导线颜色
			 labelLine:{
			 	normal:{
			 		lineStyle:{
			 			color:'rgba(255,255,255,0.3)'
			 		}
			 	}
			 }
			};
			myChart.setOption(option);
			//图三
					 var myChart=echarts.init(document.getElementById('container3'));
			var option = {
				title:{
					text:'饼图',
					textStyle:{
						color:'rgba(0,0,0,0.8)',
						fontSize:16,
						lineHeight:16
					}
				},
//				tooltip:{
//					trigger:'axis'//坐标轴触发提示项
//				},
				legend:{
					orient:'vertical',//图例列表的布局朝向
					left:'left',
					data:['良','轻度污染','中度污染','重度污染','严重污染','优'],//图例名称
					padding:[30,0,0,20],
					textStyle:{
						color:'rgba(0,0,0,0.6)',
						fontSize:10
					}
				},
				toolbox:{
					show:true,
					feature:{
						mark:{show:true},
						dataView:{show:true,readyOnly:false},//展现当前图表所用数据
						magicType:{show:true,type:['pie','bar']},//动态类型切换
						restore:{show:true},//配置项还原
						saveAsImage:{show:true}					
					}
				},
				calculable:true,//是否显示拖拽用的手柄
				series:[{
					name:'AQI',
					type:'pie',//折线图
					clockwise:false,//逆时针旋转
					data:[
						{value:69,name:'良'},				
						{value:84,name:'轻度污染'},
						{value:28,name:'中度污染'},
						{value:23,name:'重度污染'},
						{value:6,name:'严重污染'},
						{value:2,name:'优'},						
					],
					color:['#FFFF00','#FF7E00','#FF0000',
								'#99004C','#4C0026','#00E400'],
					itemStyle:{
						normal:{
							//shadowBlur:200,
							//shadowOffsetX:0,
							//shadowOffsetY:0,
							//shadowColor:'rgba(0,0,0,0.5)'
						},
							emphasis:{
							shadowBlur:200,
							shadowColor:'rgba(237,248,233,0.8)'
						}
					}
				}],
	    textStyle:{
					color:'rgba(0,0,0,0.6)'
				},
				//设置标签的视觉引导线颜色
			 labelLine:{
			 	normal:{
			 		lineStyle:{
			 			color:'rgba(255,255,255,0.3)'
			 		}
			 	}
			 }
			};
			myChart.setOption(option);*/
		}

		
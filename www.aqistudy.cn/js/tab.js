
data = [{"text":"实时监控","url":"html/city_realtime.html?v=1.9","iconCls":"icon-eye"},{"text":"监测曲线","url":"html/city_detail.html?v=1.8","iconCls":"icon-chart2"},{"text":"全国分布","url":"html/city_map.html?v=1.3","iconCls":"icon-map4"},{"text":"全国预报","url":"html/china_forecast.html?v=1.1","iconCls":"icon-forecast"},{"text":"省份分布","url":"html/province_map.html?v=1.4","iconCls":"icon-map3"},{"text":"区域分布","url":"html/heat_map2.html?v=1.1","iconCls":"icon-map5"},{"text":"全球分布","url":"html/city_worldmap.html?v=1.1","iconCls":"icon-worldmap"},{"text":"城市比较","url":"html/city_compare.html?v=1.8","iconCls":"icon-compare"},{"text":"时段统计","url":"html/city_time.html?v=1.1","iconCls":"icon-time"},{"text":"统计排名","url":"html/city_statistics.html?v=1.3","iconCls":"icon-rank"},{"text":"历年分析","url":"html/city_history.html","iconCls":"icon-chart3"},{"text":"天气关联","url":"html/city_weather_compare.html?v=1.2","iconCls":"icon-weather"},{"text":"经济关联","url":"html/city_gdp_compare.html?v=1.3","iconCls":"icon-dollar"},{"text":"相关知识","url":"html/knowledge.html","iconCls":"icon-log"},{"text":"关于系统","url":"html/about.html?v=2.2","iconCls":"icon-info"}];
data = [{"text":"实时监控","url":"html/city_realtime.html?v=2.3","iconCls":"icon-eye"},
{"text":"监测曲线","url":"html/city_detail.html?v=1.10","iconCls":"icon-chart2"},
{"text":"全国分布","url":"html/city_map.html?v=1.6","iconCls":"icon-map4"},
{"text":"全国预报","url":"html/china_forecast.html?v=1.3","iconCls":"icon-forecast"},
{"text":"省份分布","url":"html/province_map.html?v=1.6","iconCls":"icon-map3"},
{"text":"区域分布","url":"html/heat_map.php?v=1.3","iconCls":"icon-map5"},
{"text":"全球分布","url":"https://airvisual.com/earth","iconCls":"icon-worldmap"},
{"text":"城市比较","url":"html/city_compare.html?v=1.10","iconCls":"icon-compare"},
{"text":"时段统计","url":"html/city_time.html?v=1.3","iconCls":"icon-time"},
{"text":"统计排名","url":"html/city_statistics.html?v=1.6","iconCls":"icon-rank"},
{"text":"天气关联","url":"html/city_weather_compare.html?v=1.6","iconCls":"icon-weather"},
{"text":"经济关联","url":"html/city_gdp_compare.html?v=1.6","iconCls":"icon-dollar"},
{"text":"相关知识","url":"html/knowledge.html","iconCls":"icon-log"},
{"text":"关于系统","url":"html/about.html?v=2.3","iconCls":"icon-info"}];

/*load tab*/
function loadTab()
{
	var title;
	var icon;
	var url;
	for (j = 0; j < data.length; j++) {
		title = data[j].text;
		url = data[j].url;
		icon = data[j].iconCls;
		OpenTab(title, url, icon, false);
	}
	$("#maintabs").tabs('select', 0);
}

/* tab init*/
function tabinit(url)
{
	$.ajax({
		type : "post",
		url : url,
		dataType : "json",
		success : function(data) {
			var title;
			var icon;
			var url;
			for (j = 0; j < data.length; j++) {
				title = data[j].text;
				url = data[j].url;
				icon = data[j].iconCls;
				OpenTab(title, url, icon, false);
			}
			$("#maintabs").tabs('select', 0);
		}
	});
}


/* open tab */
function OpenTab(title, url, icon, closable)
{

	if (url == null)
		return;
	if ($("#maintabs").tabs('exists', title)) {
		$("#maintabs").tabs('select', title);
	} else {
		$("#maintabs").tabs('add', {
			title : title,
			content : createTabContent(url),
			closable : closable,
			selected: false,
			icon : icon
		});
	}
}

/* create tab content */
function createTabContent(url)
{
	return '<iframe style="width:99.5%;height:99.1%;overflow: hidden;margin:2px 2px 0px 2px" frameborder="0" src="'
			+ url + '"></iframe>';
}

/*close tabs*/
function closeTabs()
{
	var tab = $('#maintabs').tabs('getSelected');
	while (tab != null) {
		var index = $('#maintabs').tabs('getTabIndex', tab);
		$('#maintabs').tabs('close', index);
		tab = $('#maintabs').tabs('getSelected');
	}
}


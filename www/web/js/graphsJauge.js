	
var graphsJauge = (function() {
	
var jaugeChartDefault = {
		chart: {
			type: 'gauge',
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: 0,
			plotShadow: false,
			margin:[25,0,0,0]
		},
        credits: {
         enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
         text: 'Température'
        },
       pane: {
           startAngle: -150,
           endAngle: 150,
           background: [{
            backgroundColor: {
             linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
             stops: [
             [0, '#FFF'],
             [1, '#333']
             ]
         },
         borderWidth: 0,
         outerRadius: '109%'
     }, {
        backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
         [0, '#333'],
         [1, '#FFF']
         ]
     },
     borderWidth: 1,
     outerRadius: '107%'
 }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: 
	{
        min: 5,
        max: 35,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 50,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: '°C'
        }
	}
};

function generateJaugeTemperature(data) {
			var chartOption = commonCharts.clone(jaugeChartDefault);

			chartOption.title.text = 'Température';
			chartOption.yAxis.min = 5;
			chartOption.yAxis.max = 35;
			chartOption.yAxis.title.text= '°C';
			chartOption.chart.renderTo = 'jaugeTemperature';
			chartOption.yAxis.plotBands = [
			{
				from: 5,
				to: 11,
				color: '#DF5353' // red
			}, 	{
				from: 11,
				to: 17,
				color: '#DDDF0D' // yellow
			}, {
				from: 17,
				to: 23,
				color: '#55BF3B' // green
			}, {
				from: 23,
				to: 29,
				color: '#DDDF0D' // yellow
			}, {
				from: 29,
				to: 35,
				color: '#DF5353' // red
			}];
			
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
				name: 'Temperature',
				data: data.temperature,
				tooltip: {
					valueSuffix: ' °C'
				}
			};
   
			chart.addSeries(serie);
};


function generateJaugeSon(data) {
			var chartOption = commonCharts.clone(jaugeChartDefault);

			chartOption.title.text = 'Son';
			chartOption.yAxis.min = 0;
			chartOption.yAxis.max = 80;
			chartOption.yAxis.title.text= 'Db';
			chartOption.chart.renderTo = 'jaugeSon';
			
			chartOption.yAxis.plotBands = [
            {
                from: 0,
                to: 45,
                color: '#55BF3B' // green
            }, {
                from: 45,
                to: 55,
                color: '#DDDF0D' // yellow
            }, {
                from: 55,
                to: 80,
                color: '#DF5353' // red
            }];
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
				name: 'Son',
				data: data.moyenneSon,
				tooltip: {
					valueSuffix: ' Db'
				}
			};
   
			chart.addSeries(serie);
};

function generateJaugeHumidite(data) {
			var chartOption = commonCharts.clone(jaugeChartDefault);

			chartOption.title.text = 'Humidité';
			chartOption.yAxis.min = 10;
			chartOption.yAxis.max = 90;
			chartOption.yAxis.title.text= '%';
			chartOption.chart.renderTo = 'jaugeHumidite';
			
			chartOption.yAxis.plotBands = [
            {
                from: 10,
                to: 30,
                color: '#DF5353' // red
            },  {
                from: 30,
                to: 40,
                color: '#DDDF0D' // yellow
            }, {
                from: 40,
                to: 60,
                color: '#55BF3B' // green
            }, {
                from: 60,
                to: 70,
                color: '#DDDF0D' // yellow
            }, {
                from: 70,
                to: 90,
                color: '#DF5353' // red
            }];
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
					name: 'Humidité',
					data: data.humidity,
					tooltip: {
						valueSuffix: ' %'
					}
			};
   
			chart.addSeries(serie);
};

function generateJaugeLumiere(data) {
			var chartOption = commonCharts.clone(jaugeChartDefault);

			chartOption.title.text = 'Lumière';
			chartOption.yAxis.min = 0;
			chartOption.yAxis.max = 200;
			chartOption.yAxis.title.text= 'Lux';
			chartOption.chart.renderTo = 'jaugeLumiere';
			
			chartOption.yAxis.plotBands = [
            {
                from: 120,
                to: 200,
                color: '#55BF3B' // green
            }, {
                from: 60,
                to: 120,
                color: '#DDDF0D' // yellow
            }, {
                from: 0,
                to: 60,
                color: '#DF5353' // red
            }];
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
					name: 'Lumiere',
					data: data.lumiere,
					tooltip: {
						valueSuffix: ' Lux'
					}
			};
   
			chart.addSeries(serie);
};


  //Publics members
  return {
	  	"generateGraph" :function generateGraph(majJauge) {
			generateJaugeSon(majJauge);
			generateJaugeTemperature(majJauge);
			generateJaugeHumidite(majJauge);
			generateJaugeLumiere(majJauge);
		},
		"update" : 	function updateJauges (temperature,humidite,lumiere,son) {
			if($('#jaugeTemperature').highcharts() !== undefined)
			{
			var point = $('#jaugeTemperature').highcharts().series[0].points[0];
			point.update(temperature,true,true);
			}
			if($('#jaugeHumidite').highcharts() !== undefined)
			{
				var point = $('#jaugeHumidite').highcharts().series[0].points[0];
				point.update(humidite,true,true);
			}
			if($('#jaugeLumiere').highcharts() !== undefined)
			{
				var point = $('#jaugeLumiere').highcharts().series[0].points[0];
				point.update(lumiere,true,true);	
			}
			if($('#jaugeSon').highcharts() !== undefined)
			{
				var point = $('#jaugeSon').highcharts().series[0].points[0];
				point.update(son,true,true);
			}
		}
	}
})();


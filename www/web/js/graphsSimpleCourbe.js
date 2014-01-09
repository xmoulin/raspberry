/**
 * Commons functions to construct a chart.
 */
var graphs = (function() {

var chartCourbeDefault = {
		chart: {
			type: 'arearange',
			zoomType: 'x'
            //zoomType: 'xy'
        },
        credits: {
           enabled: false
       },
       title: {
		text : 'Titre par defaut',
    },
    xAxis: {
        type: 'datetime',
        labels: {
            rotation: -45,
            align: 'right',
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
  tooltip: {
    crosshairs: true,
    shared: true
},
legend: {
   enabled: false
}
};

function generateGraphHumidite(data) {
			var chartOption = commonCharts.clone(chartCourbeDefault);

			chartOption.title.text = 'Humidité';
			chartOption.chart.renderTo = 'graphHumidite';
			chartOption.tooltip.valueSuffix='%';
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
				name: 'Humidite',
				type: 'spline',
				color: '#4572A7',
				data: data.humidity,
				marker: {
					enabled: false
				},
				tooltip: {
					valueSuffix: '%'
				}
			}
   
			chart.addSeries(serie);
};

function generateGraphSon(data) {
			var chartOption = commonCharts.clone(chartCourbeDefault);

			chartOption.title.text = 'Son';
			chartOption.chart.renderTo = 'graphSon';
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
				name: 'Son',
				data: data.tupleSon,
				color: '#FF99FF',
				tooltip: {
					valueSuffix: 'Db'
				}
			}
   
			chart.addSeries(serie);
		};
		
function generateGraphLumiere(data) {
			var chartOption = commonCharts.clone(chartCourbeDefault);

			chartOption.title.text = 'Lumiere';
			chartOption.chart.renderTo = 'graphLumiere';
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
					name: 'Lumiere',
					type: 'spline',
					acolor: '#4572A7',
					data: data.humidity,
					marker: {
					enabled: false
					},
					tooltip: {
						valueSuffix: 'lux'
					}
			}
   
			chart.addSeries(serie);
		};

  //Publics members
  return {
	  	"generateGraphBouchon" :function generateGraphBouchon(data) {
			generateGraphHumidite(data);
			generateGraphSon(data);
			generateGraphLumiere(data);
		}
}})();

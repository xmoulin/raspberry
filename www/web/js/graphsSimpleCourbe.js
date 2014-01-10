/**
 * Commons functions to construct a chart.
 */
var graphs = (function() {

//variable qui empeche la boucle infini lors du zoom simutltané
verrouZoom = true;
inverseZoom = false;
		
var chartCourbeDefault = {
		chart: {
			type: 'arearange',
			zoomType: 'x',
			resetZoomButton: {
                position: {
                    // align: 'right', // by default
                    // verticalAlign: 'top', // by default
                    x: 0,
                    y: -30
                }
            }
            //zoomType: 'xy'
        },
        credits: {
           enabled: false
       },
	   legend: {
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
    yAxis: [{ // Primary yAxis
            title: {
                 enabled: false
            }
        }],
  tooltip: {
    crosshairs: true,
    shared: true
},
legend: {
   enabled: false
}
};


function generateGraphTemperature(data)
{
			var chartOption = commonCharts.clone(chartCourbeDefault);

			chartOption.title.text = 'Température';
			chartOption.chart.renderTo = 'graphTemperature';
			chartOption.tooltip.valueSuffix='°C';
			chartOption.xAxis.events ={
			//Cet evenement nous indique lorsqu'il y a eu un zoom
			afterSetExtremes: function(event) {
				if(verrouZoom)
				{	
					verrouZoom = false;
					zoomEvent($('#graphTemperature'), $('#graphSon'));
					zoomEvent($('#graphTemperature'), $('#graphHumidite'));
					zoomEvent($('#graphTemperature'), $('#graphLumiere'));
					verrouZoom = true;
				}
			} 
			}
			chartOption.yAxis[0].labels ={
					format: '{value} °C',
					style: {
						color: '#AA4643'
					}
				};
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
				name: 'Température',
				type: 'spline',
				color: '#AA4643',
				data: data.temperature,
				marker: {
					enabled: false
				},
				tooltip: {
					valueSuffix: '°C'
				}
			}
   
			chart.addSeries(serie);
}

function generateGraphHumidite(data) {
			var chartOption = commonCharts.clone(chartCourbeDefault);

			chartOption.title.text = 'Humidité';
			chartOption.chart.renderTo = 'graphHumidite';
			chartOption.tooltip.valueSuffix='%';
			chartOption.xAxis.events ={
			//Cet evenement nous indique lorsqu'il y a eu un zoom
			afterSetExtremes: function(event) {
				if(verrouZoom)
				{
					verrouZoom = false;
					zoomEvent($('#graphHumidite'), $('#graphSon'));
					zoomEvent($('#graphHumidite'), $('#graphTemperature'));
					zoomEvent($('#graphHumidite'), $('#graphLumiere'));
					verrouZoom = true;
				}
			}
			};
			
			chartOption.yAxis[0].labels ={
					format: '{value} %',
					style: {
						color: '#4572A7'
					}
				};
			
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
			chartOption.xAxis.events ={
			//Cet evenement nous indique lorsqu'il y a eu un zoom
			afterSetExtremes: function(event) {
				if(verrouZoom)
				{
					verrouZoom = false;
					zoomEvent($('#graphSon'), $('#graphHumidite'));
					zoomEvent($('#graphSon'), $('#graphLumiere'));
					zoomEvent($('#graphSon'), $('#graphTemperature'));
							verrouZoom = true;
					}
				}
			};
			
			chartOption.yAxis[0].labels =
			{
					format: '{value} Db',
					style: {
						color: '#FF99FF'
					}
			};			
			
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
			chartOption.xAxis.events ={
			//Cet evenement nous indique lorsqu'il y a eu un zoom
			afterSetExtremes: function(event) {
				if(verrouZoom)
				{
					verrouZoom = false;
					zoomEvent($('#graphLumiere'), $('#graphSon'));
					zoomEvent($('#graphLumiere'), $('#graphHumidite'));
					zoomEvent($('#graphLumiere'), $('#graphTemperature'));
							verrouZoom = true;
				}
			}
			};
			chartOption.yAxis[0].labels = 
			{
					format: '{value} lux',
					style: {
						color: '#8bbc21'
					}
			};
			
			
			chart = new Highcharts.Chart(chartOption);
			
			serie = {
					name: 'Lumiere',
					type: 'spline',
					color: '#8bbc21',
					data: data.lumiere,
					marker: {
						enabled: false
					},
					tooltip: {
						valueSuffix: 'lux'
					}
			};
   
			chart.addSeries(serie);
		};

	//Methode qui met a jour le deuxieme graphique
	function zoomEvent(chart1, chart2) {

		Xextremes1 = chart1.highcharts().xAxis[0].getExtremes();
		Xextremes2 = chart2.highcharts().xAxis[0].getExtremes();

        chart2.highcharts().xAxis[0].setExtremes(Xextremes1.min,Xextremes1.max);

	};		
		
		
  //Publics members
  return {
	  	"generateGraphBouchon" :function generateGraphBouchon(data) {
			generateGraphTemperature(data)
			generateGraphHumidite(data);
			generateGraphSon(data);
			generateGraphLumiere(data);
		}
}})();

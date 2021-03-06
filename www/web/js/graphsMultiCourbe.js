
var graphsMultiCourbe = (function() {

  //Publics members
  return {
		"update" : function generateGraphBouchon(data) {
			var series = $('#main-graph').highcharts().series[0];
			series.addPoint([data.date,data.sonMin,data.sonMax], true, true);
 		
			var series = $('#main-graph').highcharts().series[1];
			series.addPoint([data.date, data.sonMoy], true, true);
	
			var series = $('#main-graph').highcharts().series[2];
			series.addPoint([data.date, data.humidity], true, true);
		
			var series = $('#main-graph').highcharts().series[3];
			series.addPoint([data.date, data.lumiere], true, true);
	
			var series = $('#main-graph').highcharts().series[4];
			series.addPoint([data.date, data.temperature], true, true);
		},
		"generateGraph" : function generateGraph(data){
	$('#main-graph').highcharts({
		chart: {
			type: 'arearange',
			zoomType: 'x'
            //zoomType: 'xy'
        },
        credits: {
           enabled: false
       },
       title: {
        text: 'Sonde de l\'open space'
    },
    subtitle: {
        text: 'Température / Humidité / Lumière / Son - Zoomable'
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
            labels: {
                format: '{value}°C',
                style: {
                    color: '#AA4643'
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: '#AA4643'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Humidité',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} %',
                style: {
                 color: '#4572A7'
             }
         }
        }, { // Third yAxis
            title: {
             text: 'Son',
             style: {
              color: '#660033'
          }
      },
      labels: {
         format: '{value} Db',
         style: {
          color: '#660033'
      }
  },
  opposite: true
        }, { // Fourth yAxis
            title: {
               text: 'Lumiere',
               style: {
                  color: '#8bbc21'
              }
          },
          labels: {
           format: '{value} Lux',
           style: {
              color: '#8bbc21'
          }
      },
      opposite: true
  }],
  tooltip: {
    crosshairs: true,
    shared: true,
    valueSuffix: '°C'
},
legend: {
   enabled: true
},
series: [{
    name: 'Son',
    data: data.tupleSon,
    yAxis: 2,
    color: '#FF99FF',
    tooltip: {
       valueSuffix: 'Db'
   }
}, {
    name: 'MoyenneSon',
    type: 'spline',
    data: data.moyenneSon,
    yAxis: 2,
    color: '#DDAADD',
    marker: {
        enabled: false
    },
    tooltip: {
        valueSuffix: 'Db'
    }
}, {
    name: 'Humidite',
    type: 'spline',
    yAxis: 1,
    color: '#4572A7',
    data: data.humidity,
    marker: {
        enabled: false
     },
    tooltip: {
       valueSuffix: '%'
   }
}, {
    name: 'Lumiere',
    type: 'spline',
    yAxis: 3,
    color: '#8bbc21',
    data: data.lumiere,
    marker: {
        enabled: false
    },
    tooltip: {
       valueSuffix: 'Lux'
   }
}, {
 name: 'Temperature',
 type: 'spline',
 color: '#AA4643',
 data: data.temperature,
 marker: {
    enabled: false
 },
 tooltip: {
    valueSuffix: '°C'
}
}]
});
}
}})();
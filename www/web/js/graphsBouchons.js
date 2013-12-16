function generateGraphBouchon(data){
	$('#bouchon').highcharts({
		chart: {
			type: 'arearange',
			zoomType: 'x'
            //zoomType: 'xy'
        },
        credits: {
           enabled: false
       },
       title: {
        text: 'Humidité'
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
    shared: true,
    valueSuffix: '°C'
},
legend: {
   enabled: false
},
series: [{
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
}]
});



    $('#bouchon2').highcharts({
        chart: {
            type: 'arearange',
            zoomType: 'x'
            //zoomType: 'xy'
        },
        credits: {
           enabled: false
       },
       title: {
        text: 'Son'
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
    shared: true,
    valueSuffix: '°C'
},
legend: {
   enabled: false
},
series: [{
    name: 'Son',
    data: data.tupleSon,
    color: '#FF99FF',
    tooltip: {
       valueSuffix: 'Db'
   }
}]
});

    $('#bouchon3').highcharts({
        chart: {
            type: 'arearange',
            zoomType: 'x'
            //zoomType: 'xy'
        },
        credits: {
           enabled: false
       },
       title: {
        text: 'Lumiere'
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
    shared: true,
    valueSuffix: '°C'
},
legend: {
   enabled: false
},
series: [{
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
}]
});

}
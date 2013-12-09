function generateGraph(data){
	$('#main-graph').highcharts({
		chart: {
			type: 'arearange',
			zoomType: 'x'
            //zoomType: 'xy'
        },
        title: {
        	text: 'Sonde de l\'open space'
        },
        subtitle: {
        	text: 'Temperature / Humidité / Lumiere / Son - Zoomable'
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
        	enabled: false
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
        	tooltip: {
        		valueSuffix: 'Db'
        	}       
        }, {
        	name: 'Humidite',
        	type: 'spline',
        	yAxis: 1,
        	color: '#4572A7',
        	data: data.humidity,
        	tooltip: {
        		valueSuffix: '%'
        	}
        }, {
        	name: 'Lumiere',
        	type: 'spline',
        	yAxis: 3,
        	color: '#8bbc21',
        	data: data.lumiere,
        	tooltip: {
        		valueSuffix: 'Lux'
        	}     
        }, {
        	name: 'Temperature',
        	type: 'spline',
        	color: '#AA4643',
        	data: data.temperature,       
        	tooltip: {
        		valueSuffix: '°C'
        	}
        }]
    });            
}

function majJauge(data){

	$('#jaugeTemperature').highcharts({

		chart: {
			type: 'gauge',
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: 0,
			plotShadow: false
		},

		title: {
			text: 'Thermométre'
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
	    yAxis: {
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
	    		text: 'km/h'
	    	},
	    	plotBands: [
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
	        }]        
	    },

	    series: [{
	    	name: 'Temperature',
	    	data: data.temperature,
	    	tooltip: {
	    		valueSuffix: ' °C'
	    	}
	    }]

	});
}
var serieDefault = [{
				name: 'Past PTF T° (°C)',
				marker: {
					enabled: false
				},
				data: [29.9, 71.5, 106.4, 129.2, null, null, null, null, null, null, null, null]
            }, {	
				name: 'Forecast not modifiable',
				dashStyle: 'Dash',
				marker: {
					enabled: false
				},
                data: [null, null, null, 129.2, 144.0, 176.0, 135.6, 148.5, null, null, null, null],
				// showInLegend: false
            }, {
                name: 'Modifiable forecast',
				dashStyle: 'Dash',
				marker: {
					enabled: false
				},
				data: [null, null, null, null, null, null, null, 148.5, 216.4, 194.1, 95.6, 54.4],
				// showInLegend: false
             }, {
                name: 'Hot metal representative T° (°C)',
				lineWidth: 3,
				data: [{y: 155,marker: {enabled: false}}, {y: 155,marker: {enabled: false}}, null, {y: 110,marker: {symbol: 'triangle'}}, {y: 110,marker: {symbol: 'circle'}}],
				// showInLegend: false
            }]         
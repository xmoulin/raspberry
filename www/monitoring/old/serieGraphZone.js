var serieGraphZone = [{
				type: 'area',
				name: 'Courbe Zone 1',
				fillOpacity: '0.3',
				color: '#8bbc21',
				data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
				
			}, {
				type: 'arearange',
                name: 'Courbe Zonne 2',
				color: '#2f7ed8',
                data: [[50, 60], [60, 70],[70, 80],[80, 90],[90, 100],[100, 110],[110, 120],[120, 130],[130, 140],[140, 150],[150, 160],[160, 170]]
            }, {
                name: 'Courbe Simple',
				color:  '#910000',
                data: [105, 110, 115, 120, 130, 160, 200, 230, 180, 140, 140, 135]
			}, {
                name: 'Courbe inverted',
				inverted: true,
				color:  '#910000',
                data: [105, 110, 115, 120, 130, 160, 200, 230, 180, 140, 140, 135]
			}, {
                name: 'Courbe Dash',
				dashStyle: 'Dash',
				color: '#492970', 
                data: [110, 115, 120, 130, 160, 200, 230, 180, 140, 140, 135, 130]
            }]
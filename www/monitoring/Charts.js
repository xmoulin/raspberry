/*
 * Fichier qui contient tout les patrons des graphiques demandés
 * @author pDevittori
 */

var chartDefault = {

			chart: {
				renderTo: 'Graph',
			},
			
			title: {
                text: 'Titre par defaut',
            },
			
			plotOptions: {
				series: {
					
				}
			},
			yAxis: {
			}
}

var briqueDefault = {

			chart: {
				renderTo: 'Graph',
				width: 700,
				height: 700,
				plotBackgroundColor: '#000033',
				backgroundColor: '#B8B8B8'
			},
			
			legend: {
				enabled: false
			},
			
			title: {
				text: 'Graphique Brique'
			},
			xAxis: {
				min: -50,
				max: 50,
				tickInterval: 10,
				gridLineColor: '#808080',
				gridLineWidth: 1,
				title: {
                    text: null
                }
			},
			
			yAxis: {
				min: -50,
				max: 50,
				tickInterval: 10,
				gridLineColor: '#808080',
				gridLineWidth: 1,
				title: {
                    text: null
                }
			},
			series: [{
                data: [[-50, null, null]]
            }]
}

var poc1Default = {
			chart: {
				renderTo: 'Grap',
				height: 700,
				zoomType: 'xy',
				plotBackgroundColor: '#00003E',
				backgroundColor: '#B8B8B8'
			},
			
			credits: {
				enabled: false
			},
			
			title: {
				text: 'Graphique Poc 1'
			},
			
			xAxis: {
				categories: ['25/08 18:00', '25/08 21:00', '26/08 00:00', '26/08 03:00', '26/08 09:00', '26/08 12:00', '26/08 15:00', '26/08 18:00', '26/08 21:00', '27/08 00:00', '27/08 03:00', '27/08 09:00'],
				gridLineColor: '#808080',
				gridLineWidth: 1,
                title: {
                    text: null
                },
				
				labels: {
					// rotation: 60
					align: 'right'
				},
				
				
			},
			
			yAxis: [{
				title: {
                    text: null
                },
				plotLines: [{
					color: '#DAA520',
					width: 2,
					value: 190
				}, {
					color: '#DAA520',
					width: 2,
					value: 215
				}]
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                linkedTo: 0,
				title: {
                    text: null
                }
            }],
			
			plotOptions: {
				series: {
					marker: {
						// enabled: false
					}
				}
			}
}

var polarDefault = {
			chart: {
				renderTo: 'Graph',
				polar: true
			},
			
			title: {
				text: 'Graphique polaire'
			},
			
			pane: {
				startAngle: 0,
				endAngle: 360
			},
		
			xAxis: {
				tickInterval: 45,
				min: 0,
				max: 360,
				labels: {
					formatter: function () {
						return this.value + '°';
					}
				}
			},
				
			yAxis: {
				min: 0
			},
			
			plotOptions: {
				series: {
					pointStart: 0,
					pointInterval: 45
				},
				column: {
					pointPadding: 0,
					groupPadding: 0
				}
			}
}

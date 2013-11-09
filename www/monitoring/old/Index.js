$(document).ready(function() {

  $.displayGraph();

});


$.displayGraph = function() {
	
	createPoc1();
			
}

function createPoc1()
{
	var chartOption = clone(poc1Default);

	chartOption.title.text = 'Graphique Maison';
	chartOption.chart.renderTo = 'Graph';
	
	chart = new Highcharts.Chart(chartOption);
	
	chart.addSeries(seriePoc1[0]);
	chart.addSeries(seriePoc1[1]);
	chart.addSeries(seriePoc1[2]);
}

function createBrique()
{
	var chartOption = clone(briqueDefault);

	chartOption.title.text = 'Graphique Brique';
	chartOption.chart.renderTo = 'Graph';
	
	chart = new Highcharts.Chart(chartOption);
		
	//Carré 1
	addRect(0, 6, chart, 'white', 10); 
	addRect(0, 7, chart, 'white', 10); 
	addRect(0, 8, chart, 'white', 10); 
	addRect(1, 6, chart, 'white', 10); 
	addRect(1, 7, chart, 'blue', 10); 
	addRect(1, 8, chart, 'red', 10); 
	addRect(2, 6, chart, 'white', 10); 
	addRect(2, 7, chart, 'white', 10); 
	addRect(2, 8, chart, 'white', 10); 

	addBorderRect(0, 6, 3, chart, 10); 
	
	//Carré 2
	addRect(6, 2, chart, 'white', 10); 
	addRect(6, 3, chart, 'yellow', 10); 
	addRect(6, 4, chart, 'white', 10); 
	addRect(7, 2, chart, 'white', 10); 
	addRect(7, 3, chart, 'yellow', 10); 
	addRect(7, 4, chart, 'white', 10); 
	addRect(8, 2, chart, 'white', 10); 
	addRect(8, 3, chart, 'white', 10); 
	addRect(8, 4, chart, 'white', 10); 

	addBorderRect(6, 2, 3, chart, 10); 
}

function createPolar()
{
	var chartOption = clone(polarDefault);

	chartOption.title.text = 'Graphique Polaire';
	chartOption.chart.renderTo = 'Graph';
	
	chart = new Highcharts.Chart(chartOption);
	
	chart.addSeries(seriePolar[0]);
	chart.addSeries(seriePolar[1]);

}

function createGraphZone()
{
	var chartOption = clone(chartDefault);

	chartOption.title.text = 'Graphique Avec zones hachurées';
	chartOption.chart.renderTo = 'Graph';
	
	var plotBands = [{
					from: 0,
					to: 100,
					color: {
						pattern: 'http://highcharts.com/demo/gfx/pattern3.png',
						width: 10,
						height: 10
						}
					},{
					from: 100,
					to: 200,
					color: {
						pattern: 'http://highcharts.com/demo/gfx/pattern1.png',
						width: 10,
						height: 10
						}
					},{
					from: 200,
					to: 300,
					color: {
						pattern: 'http://highcharts.com/demo/gfx/pattern3.png',
						width: 10,
						height: 10
						}
					}];
							
	chart = new Highcharts.Chart(chartOption);
	
	chart.yAxis[0].addPlotBand(plotBands[0]);
	chart.yAxis[0].addPlotBand(plotBands[1]);
	chart.yAxis[0].addPlotBand(plotBands[2]);
	
	chart.addSeries(serieGraphZone[0]);
	chart.addSeries(serieGraphZone[1]);
	chart.addSeries(serieGraphZone[2]);
	chart.addSeries(serieGraphZone[3]);
	chart.addSeries(serieGraphZone[4]);

}

function createGraphEvenement()
{
	var chartOption = clone(chartDefault);
	
	var exporting = {
				buttons: {
					button1: {
						symbol: 'diamond',
						verticalAlign: 'top',
						y: 135,
						x: 0,
						symbolFill: '#B5C9DF',
						hoverSymbolFill: '#779ABF',
						_titleKey: 'printButtonTitle',
		
					},
					button2: {
						symbol: 'diamond',
						verticalAlign: 'top',
						y: 135,
						x: -30,
						symbolFill: '#B5C9DF',
						hoverSymbolFill: '#779ABF',
						_titleKey: 'printButtonTitle',
		
					},
					button3: {
						symbol: 'diamond',
						verticalAlign: 'top',
						y: 200,
						x: 0,
						symbolFill: '#B5C9DF',
						hoverSymbolFill: '#779ABF',
						_titleKey: 'printButtonTitle',
		
					},
					button4: {
						symbol: 'diamond',
						verticalAlign: 'top',
						y: 200,
						x: -30,
						symbolFill: '#B5C9DF',
						hoverSymbolFill: '#779ABF',
						_titleKey: 'printButtonTitle',
		
					}
				}
			}
	
	chartOption.title.text = 'Graphique Evenement';
	chartOption.chart.renderTo = 'Graph';
	chartOption.chart.type ='bar';
	chartOption.plotOptions.series.stacking =  'percent';
	chartOption.exporting = exporting;
	chartOption.yAxis = {labels: {enabled: false}, max: 105, title: { enabled: false }};
	chartOption.xAxis = {categories: ['Product', 'Dimension', 'Analyse chimique', 'Revetement', 'Divers']};
	chartOption.legend = {enabled: false};
		
	chart = new Highcharts.Chart(chartOption);
	
	chart.addAxis({ // Secondary yAxis
			min: 0,
			max: 850,
            lineWidth: 1,
            opposite: true,
			title: { enabled: false }
			});
		
	chart.addSeries(serieGraphEvenement[0]);
	chart.addSeries(serieGraphEvenement[1]);
	chart.addSeries(serieGraphEvenement[2]);
	chart.addSeries(serieGraphEvenement[3]);
	chart.addSeries(serieGraphEvenement[4]);
	chart.addSeries(serieGraphEvenement[5]);
	
	


}
function createTraitVertical()
{
	var chartOption = clone(chartDefault);
	
	chartOption.yAxis = {min: 0, max: 10};
	chartOption.xAxis = {min: 5, max: 15};
	
	chart = new Highcharts.Chart(chartOption);
	
	serie = {data: [[5, 3], [8, 3], [8, 6], [9, 6], [9, 3], [15, 3]]}
	chart.addSeries(serie);
	
}	

function afficheExport()
{
	var chartOption = clone(chartDefault);
	
	chartOption.chart.renderTo = 'GraphExport';
	chartOption.yAxis = {min: 0, max: 10};
	chartOption.xAxis = {min: 5, max: 15};
	
	chart = new Highcharts.Chart(chartOption);
	
	serie = {data: [[5, 3], [8, 3], [8, 6], [9, 6], [9, 3], [15, 3]]}
	
	chart.addSeries(serie);
	
	console.log('hello');
	
	chart.exportChart({filename: 'graph'});
}
	
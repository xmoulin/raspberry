
/*
 * Fonction de clonage
 * @author Keith Devens
 * @see http://keithdevens.com/weblog/archive/2007/Jun/07/javascript.clone
 */
function clone(srcInstance)
{
	/*Si l'instance source n'est pas un objet ou qu'elle ne vaut rien c'est une feuille donc on la retourne*/
	if(typeof(srcInstance) != 'object' || srcInstance == null)
	{
		return srcInstance;
	}
	/*On appel le constructeur de l'instance source pour crée une nouvelle instance de la même classe*/
	var newInstance = srcInstance.constructor();
	/*On parcourt les propriétés de l'objet et on les recopies dans la nouvelle instance*/
	for(var i in srcInstance)
	{
		newInstance[i] = clone(srcInstance[i]);
	}
	/*On retourne la nouvelle instance*/
	return newInstance;
}

/*
 * Fonction qui ajoute un rectangle dans le carré voulu (origine: en haut à gauche)
 * @author pDevittori
 */
function addRect(x , y, chart, color, tickInterval) {
	
	var extremesX = chart.xAxis[0].getExtremes();
	var extremesY = chart.yAxis[0].getExtremes();
		
	var uniteX = chart.xAxis[0].toPixels(extremesX.min + tickInterval, true);
	var uniteY = chart.yAxis[0].toPixels(extremesY.max - tickInterval, true);
   
	var origineY = chart.yAxis[0].toPixels(extremesY.max);
	var origineX = chart.xAxis[0].toPixels(extremesX.min);
		
	x = origineX + uniteX* x;
	y = origineY + uniteY* y;
		
	chart.renderer.rect(x, y , uniteX, uniteY, 0)
        .attr({
            'stroke-width': 2,
            stroke: 'black',
            fill: color,
            zIndex: 3
        })
        .add();

};

/*
 * Fonction qui ajoute une bordure à un rectangle 
 * @author pDevittori
 */
function addBorderRect(x , y, cote, chart, tickInterval) {
	
	var extremesX = chart.xAxis[0].getExtremes();
	var extremesY = chart.yAxis[0].getExtremes();
		
	var uniteX = chart.xAxis[0].toPixels(extremesX.min + tickInterval, true);
	var uniteY = chart.yAxis[0].toPixels(extremesY.max - tickInterval, true);
   
	var origineY = chart.yAxis[0].toPixels(extremesY.max);
	var origineX = chart.xAxis[0].toPixels(extremesX.min);
		
	coteX = cote * uniteX;
	coteY = cote * uniteY;
		
	x = origineX + uniteX * x;
	y = origineY + uniteY * y;
		
		
	chart.renderer.rect(x, y , coteX, coteY, 0)
        .attr({
            'stroke-width': 3,
            stroke: 'red',
            zIndex: 4
        })
        .add();

};

	
	
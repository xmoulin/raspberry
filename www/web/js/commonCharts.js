	/**
	 * Commons functions to construct a chart.
	 */
	var commonCharts = (function() {
	  //Publics members
	  return {
		  "clone" :
			  function clone(srcInstance)
			  {
				/*Si l'instance source n'est pas un objet ou qu'elle ne vaut rien c'est une feuille donc on la retourne*/
				if(typeof(srcInstance) != 'object' || srcInstance == null)
				{
					return srcInstance;
				}
				/*On appel le constructeur de l'instance source pour créer une nouvelle instance de la même classe*/
				var newInstance = srcInstance.constructor();
				/*On parcourt les propriétés de l'objet et on les recopies dans la nouvelle instance*/
				for(var i in srcInstance)
				{
					newInstance[i] = clone(srcInstance[i]);
				}
				/*On retourne la nouvelle instance*/
				return newInstance;
			  }
	  };
	})();

	
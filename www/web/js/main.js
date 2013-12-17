//Gestion du toggle entre courbe principale et petites courbes
//TODO: BUG: si on clique 2 fois sur le meme icone ça toggle qd meme.
//D'où le code en commentaire pour verifier si la visibilité du graph n'ets pas deja visible avant le toggle.
//La fonction toggle prend d'ailleur en paramétre un flag true/false pour ne pas faire le toggle si condition vraie (ou fausse, a verifier)
$('#typeAffichageCourbe label').click(function (e) {
    
    //var idAAfficher = this.id.split('-')[0];
    //console.log(idAAfficher);
    //console.log($("#NGraph").style);
    //$("#unSeulGraph").toggle();
    //$("#NGraph").toggle();
    $("#unSeulGraph").toggle("Drop", null, 500);
    $("#NGraph").toggle("Drop", null, 500);
    
    //alert(idAAfficher);
    //e.preventDefault()
    //$(idAAfficher).toggleDisplay('show')
  });

//Si changement de periode
$('#periode label').click(function (e) {
    //Recuperation de l'id de la balise input sous la balise label (pas optimum mais bon, pas reussi à faire mieux)
    var selection = this.firstChild.nextSibling.id;
    switch (selection) {
      case "Heure":
        console.log("aa");
        $.get('../data-monitoring2.php?limit=50', function( data ) {
            initGraph(data,true);}
          );
        break;
      case "Journee":
        $.get('../data-monitoring2.php?limit=150', function( data ) {
            initGraph(data, true);}
          );
        break;
      case "Semaine":
        $.get('../data-monitoring2.php?limit=350', function( data ) {
            initGraph(data,true);}
          );
        break;
      default:
        $.get('../data-monitoring2.php?limit=1000', function( data ) {
            initGraph(data, true);}
          );
        break;
     }
  });

//A partir des Data en parametre, on initialise tous les graphs
//En parametre:
//- le flux JSON de Data
//- un boolean si true, on ne modifie pas les valeurs des jauges
function initGraph(data, skipJauge){
  console.log(skipJauge);
  data = JSON.parse(data);
  var values = {
    tupleSon: [],
    humidity: [],
    lumiere: [],
    temperature: [],
    moyenneSon: []
  };
  var lastValues = {
    tupleSon: [],
    humidity: [],
    lumiere: [],
    temperature: [],
    moyenneSon: []
  };

  var datalength = data.length;
  //On trie a l'envers car highchart fait une erreur si on ajoute pas les points dans un ordre ascendant
  //La requete SQL elle est desc pour avoir toujours les points
  for(var i = datalength-1 ; i > 0; i--){
    values.tupleSon.push([Date.parse(data[i].date), parseFloat(data[i].sonMin), parseFloat(data[i].sonMax)]);
    values.moyenneSon.push([Date.parse(data[i].date), parseFloat(data[i].sonMoy)]);
    values.humidity.push([Date.parse(data[i].date), parseFloat(data[i].humidity)]);
    values.lumiere.push([Date.parse(data[i].date), parseFloat(data[i].lumiere)]);
    values.temperature.push([Date.parse(data[i].date), parseFloat(data[i].temperature)]);
  }

  //Voir Main.js
  generateGraph(values);

  //Sur la selection d'un periode, on n'a pas besoin de mettre à jour la jauge.
  //Elle doit se mettre à jour par ailleurs par push de valeurs dans highCharts
  if (!skipJauge) {
    lastValues.moyenneSon.push(values.moyenneSon[values.moyenneSon.length -1][1]);
    lastValues.humidity.push(values.humidity[values.humidity.length -1][1]);
    lastValues.lumiere.push(values.lumiere[values.lumiere.length -1][1]);
    lastValues.temperature.push(values.temperature[values.temperature.length -1][1]);
    //Voir Main.js  
    majJauge(lastValues);
  }
  generateGraphBouchon(values);
}

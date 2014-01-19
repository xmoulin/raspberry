Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

//Utile pour debugger en attendant l'activation websocket
$('#bt-loadDataBouton').click(function (e) {
  nextPeriode();
});
$('#bt-adminBouton').click(function (e) {
  previousPeriode();
});
$('#bt-toggleBouton').click(function (e) {
  toggleGraph();
});
$('#bt-NFC-Xavier').click(function (e) {
  activeNFCXavier();
});
$('#bt-NFC-Jean-Marie').click(function (e) {
  activeNFCJeanMarie();
});
$('#bt-NFC-Remi').click(function (e) {
  activeNFCRemi();
});

//Gestion du toggle entre courbe principale et petites courbes
$('#unSeulGraph-Radio').click(function (e) {
  toggleGraphById($("#unSeulGraph"), $("#NGraph"),$("#map-pane"));
});
$('#NGraph-Radio').click(function (e) {
  toggleGraphById($("#NGraph"), $("#unSeulGraph"),$("#map-pane"));
});
$('#Map-Radio').click(function (e) {
  toggleGraphById($("#map-pane"), $("#unSeulGraph"),$("#NGraph"));
  initialize();
});

//On affiche JMP
//On passe ne mode 4 graphes
//On affiche les données de la journée (2eme label en utilisation l'index des labels depuis la balise periode)
function activeNFCJeanMarie(){
  showFixeDiv("Jean-Marie");
  $('#periode label:eq(1)').click();
  $('#NGraph-Radio').click();
  //on compense les choses faites avec le user Remi
  $("#panelHistorique").show();
  $('#imageRemi').removeClass("remi");
}

function activeNFCRemi(){
  showFixeDiv("Rémi");
  $("#panelHistorique").hide();
  $('#imageRemi').addClass("remi"); 
}

function activeNFCXavier(){
  showFixeDiv("Xavier");
  $('#periode label:eq(0)').click();
  $('#unSeulGraph-Radio').click();
  //on compense les choses faites avec le user Remi
  $("#panelHistorique").show();
  $('#imageRemi').removeClass("remi");
}

function showFixeDiv(name){
  var chaineTexte = "<div id=\"NFC\" class=\"alert alert-danger alert-dismissable \"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>Bonjour "+name+"!</div>"; 
  $("#fixe").html(chaineTexte).hide();
  //Pour avoir l effet apparition
  $("#fixe").show("Drop");
}

function nextPeriode(){
  periode = (getPeriode() + 1);
  if (periode == 4) { periode = 0;}
  clickPeriodeBouton(periode);
}

function previousPeriode(){
  periode = (getPeriode() - 1);
  if (periode == -1) { periode = 3;}
  clickPeriodeBouton(periode);
}

//Retourne la periode selectionne
function getPeriode(){
  //On ne peut pas faire simplement un toogle sinon on perd l'etat du click sur le bouton de menu
  //On fait donc des click
  if ($("#periode label:eq(0)").is('.active')) {
    return 0;
  } else if  ($("#periode label:eq(1)").is('.active')) {
    return 1;
  } else if ($("#periode label:eq(2)").is('.active')) {
    return 2;
  } else {
    return 3;
  }
}

//Click sur le bouton 0, 1, 2, 3 -> Heure, journee, semaine, mois
function clickPeriodeBouton(i){
  if (i == 0) $('#periode label:eq(0)').click();
  else if (i == 1) $('#periode label:eq(1)').click();
  else if (i == 2) $('#periode label:eq(2)').click();
  else $('#periode label:eq(3)').click();
}

function toggleGraph(){
  //On ne peut pas faire simplement un toogle sinon on perd l'etat du click sur le bouton de menu
  //On fait donc des click
  if ($("#unSeulGraph").is(':visible')) {
		$('#NGraph-Radio').click();	
  } 
  else if ($("#NGraph").is(':visible'))
  {
      $('#Map-Radio').click();
  }
  else {
    $('#unSeulGraph-Radio').click();
  }
}

$('#unSeulGraph-Radio').click(function(e) {
		$("#NGraph").removeClass("active").hide("slow");	
		$("#unSeulGraph").addClass("active").show("slow",
				function() {
					$('#main-graph').highcharts().reflow();
				});
});

$('#NGraph-Radio').click(function(e) {	
		$("#unSeulGraph").removeClass("active").hide("slow");
		$("#NGraph").addClass("active").show("slow",  
				function() {
					$('#graphTemperature').highcharts().reflow();
					$('#graphHumidite').highcharts().reflow();
					$('#graphSon').highcharts().reflow();
					$('#graphLumiere').highcharts().reflow();
		
				});
});

//idAAfficher est un element du DOM en l'occurence un objet label
//Idem pour idAMasquer
function toggleGraphById(idAAfficher, idAMasquer,idAMasquer2){
    idAMasquer.hide();
	idAMasquer2.hide();
    idAAfficher.show("Drop");
}
 
//Si changement de periode
$('#periode label').click(function (e) {
    //Recuperation de l'id de la balise input sous la balise label (pas optimum mais bon, pas reussi à faire mieux)
    var selection = this.firstChild.nextSibling.id;
    switchPeriode(selection);
});

//Fonction permettant de changer de période
//selection peut prendre les valeurs:
//- Heure
//- Journee
//- Semaine
//- Mois
function switchPeriode(selection) {
    switch (selection) {
      case "Heure":
        $.get('../data-monitoring2.php?periode=Heure', function( data ) {
            initGraph(data,true);}
          );
        break;
      case "Journee":
        $.get('../data-monitoring2.php?periode=Journee', function( data ) {
            initGraph(data, true);}
          );
        break;
      case "Semaine":
          $.get('../data-monitoring2.php?periode=Semaine', function( data ) {
            initGraph(data,true);}
          );
        break;
      default:		
        $.get('../data-monitoring2.php?periode=Mois', function( data ) {
            initGraph(data, true);}
          );
        break;
     }
} 


//A partir des Data en parametre, on initialise tous les graphs
//En parametre:
//- le flux JSON de Data
//- un boolean si true, on ne modifie pas les valeurs des jauges
function initGraph(data, skipJauge){
  //console.log(skipJauge);
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
  graphsMultiCourbe.generateGraph(values);

  //Sur la selection d'un periode, on n'a pas besoin de mettre à jour la jauge.
  //Elle doit se mettre à jour par ailleurs par push de valeurs dans highCharts
  if (!skipJauge) {
    lastValues.moyenneSon.push(values.moyenneSon[values.moyenneSon.length -1][1]);
    lastValues.humidity.push(values.humidity[values.humidity.length -1][1]);
    lastValues.lumiere.push(values.lumiere[values.lumiere.length -1][1]);
    lastValues.temperature.push(values.temperature[values.temperature.length -1][1]);
    //Voir Main.js
     graphsJauge.generateGraph(lastValues);
  }
  graphs.generateGraphBouchon(values);

}

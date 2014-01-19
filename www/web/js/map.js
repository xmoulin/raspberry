	
function initialize() {

	var previousPopupOpened = null;
	var mapOptions = {
		zoom: 5,
		center: new google.maps.LatLng(43.610769, 3.876)
	};
	
	var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
	
	
	function getInfo (ville,temperature,son,humidite,lumiere)
	{
      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+ville+'</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Temperature : </b>'+temperature+'°C</p>'+
	  '<p><b>Son : </b>'+son+'Db</p>'+
	  '<p><b>Humidite : </b>'+humidite+'%</p>'+
	  '<p><b>Lumiere : </b>'+lumiere+'Lux</p>'+
      '</div>'+
      '</div>';
	
	  var infowindow = new google.maps.InfoWindow({
      content: contentString
	 });
	 
	 return infowindow;
	}
	
	function openInfo (marker,ville,temperature,son,humidite,lumiere)
	{
		if (previousPopupOpened) {
			previousPopupOpened.close();
		}
		previousPopupOpened = getInfo (ville,temperature,son,humidite,lumiere);
		previousPopupOpened.open(map,marker);
	}





  var montpellier = new google.maps.Marker({
      position: new google.maps.LatLng(43.610769, 3.876),
      map: map,	
	  icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      title: 'Montpellier'
  });
  
  google.maps.event.addListener(montpellier, 'click', function() {
		openInfo (montpellier,'Montpellier','25','50','30','100');
  });
  
   var aix = new google.maps.Marker({
      position: new google.maps.LatLng(43.5079666, 5.4261566),
	  icon : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      map: map,
      title: 'Aix en Provence'
  });
  
    google.maps.event.addListener(aix, 'click', function() {
		openInfo (aix,'Aix en Provence','20','40','50','110');
	});
  
   var bordeaux = new google.maps.Marker({
      position: new google.maps.LatLng(44.837789, -0.5791799999999512),
	  icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      map: map,
      title: 'Bordeaux'
  });
  
      google.maps.event.addListener(bordeaux, 'click', function() {
		openInfo (bordeaux,'Bordeaux','23','45','69','60');
	});
	
	
  var toulouse = new google.maps.Marker({
      position: new google.maps.LatLng(43.604652, 1.4442090000000007),
	  icon : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map,
      title: 'Toulouse'
  });
  
      google.maps.event.addListener(toulouse, 'click', function() {
		openInfo (toulouse,'Toulouse','30','60','80','50').open(map);
	});
	
  var annecy = new google.maps.Marker({
      position: new google.maps.LatLng(45.9192139, 6.141949899999986),
	  icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      map: map,
      title: 'Annecy'
  });
  
      google.maps.event.addListener(annecy, 'click', function() {
		openInfo (annecy,'Annecy','30','60','80','50')
	});	

	  var leMans = new google.maps.Marker({
      position: new google.maps.LatLng(48.00611000000001, 0.1995560000000296),
	  icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      map: map,
      title: 'Le Mans'
  });
  
      google.maps.event.addListener(leMans, 'click', function() {
		openInfo (leMans,'Le Mans','30','60','80','50');
	});	

	var lille = new google.maps.Marker({
      position: new google.maps.LatLng(50.62925, 3.057256000000052),
	  icon : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      map: map,
      title: 'Lille'
  });
  
      google.maps.event.addListener(lille, 'click', function() {
		openInfo (lille,'Lille','17','30','60','125');
	});	

	var presbourg = new google.maps.Marker({
      position: new google.maps.LatLng(48.872722, 2.293371699999966),
	  icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      map: map,
      title: 'Paris'
  });
  
      google.maps.event.addListener(presbourg, 'click', function() {
		openInfo (presbourg,'Paris','30','60','80','50');
	});	
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCJbm2WbAw3Wx72yJVEjGMPTgeuKBPmP2k&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
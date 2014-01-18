
var socket = new WebSocket("ws://"+window.location.hostname+":9000"); 

function onWSOpen(evt)
{
	console.log("WebSocket ouvert");
	if (socket.readyState == socket.OPEN)
	{
		console.log("Websocket prêt");
	}
}

function onWSClose(evt)
{
	console.log("Websocket fermé");
}

function onWSMessage(evt)
{
	console.log(evt.data);
	var data = jQuery.parseJSON(evt.data);
	
	if (data.iteration)
	{
		graphsMultiCourbe.update(data);
		graphs.update(data)
		graphsJauge.update(data.temperature,data.humidity,data.lumiere,data.sonMoy);
	}
	else if (data.action =='NFC')
	{
	 if(data.id ==' D5 28 FE B0')
	 {
		activeNFCXavier();
	 }
	 else if(data.id ==' 04 C4 5D 82 BA 29 80')
	 {
		activeNFCJeanMarie();
	 }
	 else if(data.id ==' 44 94 72 1A')
	 {
		activeNFCRemi();
	 }
	}
	else if(data.action=='loadDataBouton')
	{
		nextPeriode();
	}
	else if(data.action=='toggleBouton')
	{
		toggleGraph();
	}
	else if(data.action=='adminBouton')
	{
		previousPeriode();
	}
}

function onWSError(evt)
{
	console.log("Une erreur s'est produite dans le WebSocket:"+evt.data);
}

socket.onopen = function(evt){onWSOpen(evt)};
socket.onclose = function(evt){onWSClose(evt)};
socket.onmessage = function(evt){onWSMessage(evt)};
socket.onerror = function(evt){onWSError(evt)};


$(window).on("beforeunload",function() {
  console.log("Close socket.");
  socket.close();
});

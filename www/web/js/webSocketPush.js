
var socket = new WebSocket("ws://localhost:9000"); 

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
	console.log(websocket.readyState);
}

function onWSMessage(evt)
{
	console.log(evt.data);
	var data = jQuery.parseJSON(evt.data);
	
	graphsJauge.update(data.temperature,data.humidity,data.lumiere,data.sonMoy);
	var series = $('#main-graph').highcharts().series[1];
    series.addPoint([data.date, data.sonMoy], true, true);
	
	var series = $('#main-graph').highcharts().series[2];
    series.addPoint([data.date, data.humidity], true, true);
	
	var series = $('#main-graph').highcharts().series[3];
    series.addPoint([data.date, data.lumiere], true, true);
	
	var series = $('#main-graph').highcharts().series[4];
    series.addPoint([data.date, data.temperature], true, true);
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

function changeState(pin,elem){
	var newState = ($(elem).hasClass('on')?0:1);
	$.ajax({
			type: "POST",
			 url: "./action.php?action=changeState",
			 data:{pin:pin,state:newState},
			success: function(r){
				var result = eval(r);
				if(result.state == 1){
					$(elem).removeClass('on');
					$(elem).removeClass('off');
					$(elem).addClass((newState==1?'on':'off'));
				}else{
					alert('Erreur : '+result.error);
				}
		 }});
}

function demo(){

	$.ajax({
			type: "POST",
			 url: "./action.php?action=demo",
			success: function(r){
		
			
		 }});
}


function arduinoCall(pin,elem){
	$.ajax({
			type: "POST",
			 url: "./action.php?action=arduinoCall",
			 data:{pin:pin},
			success: function(r){
				var result = eval(r);
				if(result.state == 1){
					alert('Commande emise sur pin '+pin);
				}else{
					alert('Erreur : '+result.error);
				}
		 }});
}
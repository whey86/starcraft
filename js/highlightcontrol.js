var highlighting = {

	alwaysOn : true,
	setTerritoriumColor : function(id,color){
		var data = $(id).data('maphilight')  || {};
		data.fillColor = color;
		data.alwaysOn = highlighting.alwaysOn;
		data.stroke = false;
		data.fillOpacity  = 0.35;
		$(id).data('maphilight', data);
		$('#playboard').maphilight();
	},
	markAsSelected : function(id){
		var data = $(id).data('maphilight')  || {};
		data.fillColor = "FFFFFF";
		data.alwaysOn = true;
		data.stroke = true
		data.strokeColor= 'ff0000';
		data.strokeOpacity= 1;
		data.strokeWidth= 1;
		data.fillOpacity  = 0.7;
		$(id).data('maphilight', data);
		$('#playboard').maphilight();
	}


}
/*var getTerrColor= function(id){

	var pos = $(id).attr('title');
	var pos2 = pos.split(" ");
	return maps[gameData.playerSize-3].area[parseInt(pos2[0])].territories[parseInt(pos2[1])].color;
}*/
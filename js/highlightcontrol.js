var highlighting = {

	alwaysOn : true,
	setTerritoriumColor : function(id,color){
		var data = $(id).data('maphilight')  || {};
		data.fillColor = color;
		data.alwaysOn = highlighting.alwaysOn;
		data.stroke = false;
		data.fillOpacity  = 0.35;
		$(id).data('maphilight', data);
	},


}
var getTerrColor= function(id){

	var pos = $(id).attr('title');
	var pos2 = pos.split(" ");
	return maps[gameData.playerSize-3].area[parseInt(pos2[0])].territories[parseInt(pos2[1])].color;
}
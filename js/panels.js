var paneldata ={
	numberOfPlayers : {
		title : "Choose number of players",
	}
};

var panel = {

	startpanel : function(){
		console.log("startpanel");

		$("body").append("<div class='panel' id='players'></div>");
		$("#players").append("<h1></<h1>").append(paneldata.numberOfPlayers.title);;

	},


}
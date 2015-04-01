var paneldata ={
	numberOfPlayers : {
		title : "Choose number of players",
	}
};

var panel = {

	startpanel : function(){
		console.log("startpanel");

		$("body").append("<div class='panel' id='players'></div>");
		$("#players").append("<h1></<h1>");
		$("#players h1").text(paneldata.numberOfPlayers.title);

		$("#players").append("<input type='button' class='btnPlayers' value='2'/>");
		$("#players").append("<input type='button' class='btnPlayers' value='3'/>");
		$("#players").append("<input type='button' class='btnPlayers' value='4'/>");
		$("#players").append("<input type='button' class='btnPlayers' value='5'/>");
		$("#players").append("<input type='button' class='btnPlayers' value='6'/>");
		panel.addPanel("#players", function(){});
		//action for selection of player size
		$(".btnPlayers").bind('click', function(){
				//record number of players 
				gameData.playerSize = parseInt(this.value);
				gameData.player = new Array(gameData.playerSize);
				panel.removePanel("#players",function(){});
				panel.playerPanel();

		});
	},

	playerPanel : function(){
		console.log("playerpanel");
	},

	removePanel : function(id,callback){
			console.log("removing panel ...");
		$(id).animate({
			//genomskinlighet
			'opacity': 0.0,
			'margin-left' : (parseInt($(id).parent().css('width')) - parseInt($(id).css('width'))) + 'px'
		}, 2000, callback());
	},

	addPanel : function(id,callback){
		console.log("adding panel ...");
	$(id).animate({
			//genomskinlighet
			'opacity': 100.0,
			 'margin-left' : (parseInt($(id).parent().css('width')) - parseInt($(id).css('width'))) / 2+ 'px'
		}, 1000, callback());
	}
}
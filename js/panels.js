var paneldata ={
	numberOfPlayers : {
		title : "Choose number of players",
	},
	playerID : {
		title : "Each player rolls a dice, highest writes in their name first"
	}
};

var panel = {

	startpanel : function(){
		console.log("startpanel");

		$("body").append("<div class='panel' id='players'></div>");
		$("#players").append("<h1></<h1>");

		panel.addPanel("#players", function(){
					$("#players h1").text(paneldata.numberOfPlayers.title);

		$("#players").append("<input type='button' class='btnPlayers' value='2'/>");
		$("#players").append("<input type='button' class='btnPlayers' value='3'/>");
		$("#players").append("<input type='button' class='btnPlayers' value='4'/>");
		$("#players").append("<input type='button' class='btnPlayers' value='5'/>");
		$("#players").append("<input type='button' class='btnPlayers' value='6'/>");

		});
		//action for selection of player size
		$(".btnPlayers").bind('click', function(){
				//record number of players 
				gameData.playerSize = parseInt(this.value);
				gameData.player = new Array(gameData.playerSize);
				panel.removePanel("#players",function(){});
						$("#players").remove();
				panel.playerPanel();
		
		});
	},

	playerPanel : function(){
		console.log("playerpanel");

		$("body").append("<div class='panel' id='playerIds'></div>");
		$("#playerIds").append("<h1></<h1>");
		$("#playerIds h1").text(paneldata.playerID.title);

		panel.addPanel("#playerIds", function(){
			for (var i = 1; i <= gameData.playerSize; i++) {
				var value = "Player" + i;


				$("#playerIds").append('<input id="tb" type="text" style="width:100px">');
				var race = players[maps[gameData.playerSize-3].order[i-1]].race;
				$("#playerIds").append('<img class="raceicon"src="img/'+race+'.jpg"/>');
				$("#playerIds").append('<Br/>');
			};
			


		});
	
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
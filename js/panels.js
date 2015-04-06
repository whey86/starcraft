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
				gameData.players = new Array(gameData.playerSize);
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

				var color = players[maps[gameData.playerSize-3].order[i-1]].color;

				$("#playerIds").append('<input id="player'+color+'" type="text" style="width:100px">');
				$("#player"+color).val(value);
				var race = players[maps[gameData.playerSize-3].order[i-1]].race;
				$("#playerIds").append('<img class="raceicon"src="img/'+race+'.jpg"/>');

				$("#playerIds").append('<Br/>');
			};

			$("#playerIds").append('<Br/>');

			//Button and action to finish 
			$("#playerIds").append('<input id="btnPlayerDone" type="button" value="Done"  style="width:100px">');
			$("#btnPlayerDone").bind('click',function(){
				//Check that all players has chosen a race;
				for (var i = 1; i <= gameData.playerSize; i++) {
					var color = players[maps[gameData.playerSize-3].order[i-1]].color;
					var name = $("#player"+color).val();
					if( name == ""){
						alert("Please enter names for all players");
						return;
					}
					players[maps[gameData.playerSize-3].order[i-1]].name = name;
					gameData.players[i-1] =players[maps[gameData.playerSize-3].order[i-1]];
				};
		// Launch game;
		panel.removePanel("#playerIds",function(){
			$("#playerIds").remove();
			gameLoop();
		});
	});


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
	console.log("adding panel " + id);
	$(id).animate({
			//genomskinlighet
			'opacity': 100.0,
			'margin-left' : (parseInt($(id).parent().css('width')) - parseInt($(id).css('width')))/3 + 'px'
		}, 1000, callback());
},
territoriumPanel : function(territorium,id){
	var temp = id.split(" ");
	var planet = parseInt(temp[0]);
	var area = parseInt(temp[1]);
	console.log(temp);
	console.log(planet);
	console.log(area);
	$("body").append("<div class='panel' id='territorium'></div>");
	$("#territorium").append("<h1></<h1>");

	panel.addPanel("#territorium",function(){

		var color = maps[gameData.playerSize-3].planets[planet].territories[area].color;
		$("#territorium").css('background-image', 'none');
		$("#territorium").css("background-color", color);
		$('map area').off('click');
		$("#territorium h1").text(territorium.toUpperCase());
		$("#territorium").append('<div id="unitscontainer" class="panelcontainer"/>');
		$("#unitscontainer").append('<input id="btnUnitsMinus" class="btnPanel" type="button" value="-" />');
		$("#unitscontainer").append("<h1 id='units'> Units : "+maps[gameData.playerSize-3].planets[planet].territories[area].units+"</h1>");
		$("#unitscontainer").append('<input id="btnUnitsPlus" class="btnPanel" type="button" value="+"  />');
		$("#territorium").append('<div id="colorcontainer" class="panelcontainer" />');

		$("#colorcontainer").append('<input id="btnColorNext" class="btnPanel" type="button" value="Next" />');
		$("#colorcontainer").append("<h1 id='color'> Color : "+color+"</h1>");
		//Button and action to finish 
		$("#territorium").append('<input id="btnDoneTerr" class="btnPanel" type="button" value="Done"/>');
		$("#btnDoneTerr").bind('click',function(){

			panel.removePanel("#territorium",function(){
				$("#territorium").remove();

				$('map area').bind('click',function(){
					areaClick($(this).attr('alt'),$(this).attr('title'));
				});
			});
		});
		$("#btnUnitsMinus").bind('click',function(){
			maps[gameData.playerSize-3].planets[planet].territories[area].units--;
			$("#units").text("Units : " + maps[gameData.playerSize-3].planets[planet].territories[area].units);
		});
		$("#btnUnitsPlus").bind('click',function(){
			maps[gameData.playerSize-3].planets[planet].territories[area].units++;
			$("#units").text("Units : " + maps[gameData.playerSize-3].planets[planet].territories[area].units);
		});
		$("#btnColorNext").bind('click',function(){
			
			for (var i = 0; i < gameData.players.length; i++) {
				if(gameData.players[i].color === color){
					color = gameData.players[(i+1) % (4)].color
					console.log((i+1) % (4));
					break;
				}
			};
			maps[gameData.playerSize-3].planets[planet].territories[area].color = color;
			$("#territorium").css("background-color", color);
			$("#color").text("Color : " + color);
		});
	});
}
}

var scorePanelData ={
	toggleTitle : 'Map color',
	toggleTitleHHTML : "'<h2 id='titleToggle'></h2>'",
	toggleColorHTML : '<div class="toggle-btn-grp joint-toggle"><label onclick="" id="on" class="toggle-btn success"><input id="toggleOn" type="radio" name="group3"/>On</label><label onclick="" id="off" class="toggle-btn"><input id="toggleOff" type="radio" name="group3"/>Off</label></div>'


}
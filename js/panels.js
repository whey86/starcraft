var paneldata ={
	numberOfPlayers : {
		title : "Choose number of players",
	},
	playerID : {
		title : "Enter name and race"
	}
};

var panel = {

	startpanel : function(control){
		console.log("startpanel");

		$("body").append("<div class='panelTop' id='playersTop'></div>");
		$("body").append("<div class='panelBottom' id='playersBottom'></div>");
		$("#playersTop").append("<h1></<h1>");

		panel.fadeIn("#playersTop", function(){
			$("#playersTop h1").text(paneldata.numberOfPlayers.title);
		});
		panel.fadeIn("#playersBottom", function(){


			$("#playersBottom").append("<input type='button' class='btnPlayers btnStyle' value='3'/>");
			$("#playersBottom").append("<input type='button' class='btnPlayers btnStyle' value='4'/>");
			$("#playersBottom").append("<input type='button' class='btnPlayers btnStyle' value='5'/>");
			$("#playersBottom").append("<input type='button' class='btnPlayers btnStyle' value='6'/>");

		});
		//action for selection of player size
		$(".btnPlayers").bind('click', function(){
			console.log('click');
				//record number of players 
				control.setPlayerSize(parseInt(this.value));
				control.setPlayers(players.slice(0,parseInt(this.value)));
				panel.fadeOut("#playersTop *", function(){$('#playersTop *').html('');});
				panel.fadeOut(".panelBottom *", function(){	$('.panelBottom *').remove(); panel.playerPanel(control);});

				

			});
	},

	playerPanel : function(control){
		console.log("playerpanel");

		$("#playersTop").append("<h1 id='playerTitle'><h1>");
		$("#playerTitle").text(paneldata.playerID.title);
		$("#playersTop *").css('opacity','0')
		panel.fadeIn("#playersTop *", function(){});


		console.log(control.getGameData());
		for (var i = 1; i <= control.getPlayerSize(); i++) {
			var value = "Player" + i;

			var color = players[i-1].color;

			$("#playersBottom").append('<input id="player'+color+'" type="text" class="pplay inputPlayer" style="width:100px">');
			$("#player"+color).val(value);
			$("#playersBottom").append('<img id="terranimg'+i+'" class="raceicon playerrow'+i+' terran pplay"src="img/terran.png"/>');
			$("#playersBottom").append('<img id="protossimg'+i+'" class="raceicon playerrow'+i+' pplay"src="img/protoss.jpg"/>');
			$("#playersBottom").append('<img id="zergimg'+i+'" class="raceicon playerrow'+i+' pplay"src="img/zerg.png"/>');
				//Click on  img
				$(".playerrow"+i).bind('click',function(){

					var id = $(this).attr('id');
					var rowClass = $(this).attr('class').split(' ')[1];
					var num = parseInt(id.split('img')[1])-1;
					$("."+rowClass).removeClass("chosen");
					$(this).addClass("chosen");
					control.setPlayerRace(num,id.split('img')[0]);

				});
				if(i>3){
					$("#playersBottom").append('<br/>');
				}

			};


			//Button and action to finish 
			$("#playersBottom").append('<br/>');
			$("#playersBottom").append('<input id="btnPlayerDone" class="btnStyle" type="button" value="Done"  style="width:100px">');

			$("#btnPlayerDone").bind('click',function(){
				console.log("Done");
				//Check that all players has chosen a race;
				for (var i = 1; i <= control.getPlayerSize(); i++) {
					var color = control.getPlayerColor(i-1);
					var name = $("#player"+color).val();
					var race = control.getPlayerRace(i-1);
					if( name == "" || race ==""){
						alert("Please enter names and race for all players");
						return;
					}
					control.setPlayerName(i-1,name);
				};

				$('<div id="boardContainer"></div>').insertAfter("#playersTop");
				$("#boardContainer").append(boardImg);

				panel.open(function(){
					$("#playersTop *").remove();
					$("#playersBottom *").remove();
					gameLoop(control);
				});
			});
			$("#playersTop *").css('opacity','0')
			panel.fadeIn("#playersBottom *", function(){	});


		},

		fadeOut : function(id,callback){
			console.log("removing panel ...");
			$(id).animate({
			//genomskinlighet
			'opacity': 0.0,
		}, 3000, callback());
		},

		fadeIn : function(id,callback){
			console.log("adding panel " + id);
			$(id).animate({
			//genomskinlighet
			'opacity': 100.0,

		}, 5000, callback());
	/*$(id).addClass('load');
	callback();*/
},
slideUp : function(id,callback){
	$(id).animate({

		'marginTop': "-=270px",
	}, 3000, callback());
},
slideDown : function(id,callback){
	$(id).animate({

		'marginTop': "+=270px",
	}, 3000, callback());
},
open : function(callback){
	$("#playersTop").animate({
		'marginTop': "-=300px",
	}, { duration: 2000, queue: false });
	$("#playersBottom").animate({

		'marginTop': "+=270px",
	},{ duration: 2000, queue: false });
	$("#boardContainer").animate({

		'marginTop': "-=270px",
		'height' : "+=540px",
	}, { duration: 2000, queue: false });
	callback();
},
close : function(){
	$("#playersTop").animate({
		'marginTop': "+=300px",
	}, { duration: 2000, queue: false });
	$("#playersBottom").animate({

		'marginTop': "-=270px",
	},{ duration: 2000, queue: false });
	$("#boardContainer").animate({

		'marginTop': "+=270px",
		'height' : "-=540px",
	}, { duration: 2000, queue: false });

},
attack : function(ui,control,attackunits,defunits){
	$("#playersTop").append("<div id='attackTitle'>");
	$("#attackTitle").append("<h2 id='atitle' class='attacker'>ATTACKER Units: "+attackunits+"</h2>");
	$("#attackTitle").append("<h3 id='attackerOutcome'  class='attacker'>");
	$("#attackTitle").append("<h2 id='dtitle' class='defender'>DEFENDER Units: "+defunits+"</h2>");
	$("#attackTitle").append("<h3 id='defenderOutcome' class='defender'>");;
	$("#playersTop").append("<br/>");
	$("#playersTop").append("<div id='dices'>");
	$("#dices").append("<h3  class='attacker' >Attack roll--></>");
	$("#dices").append("<h3 id='diceA1' class='dice attacker'/>");
	$("#dices").append("<h3 id='diceA2'class='dice attacker'/>");
	$("#dices").append("<h3 id='diceA3'class='dice attacker'/>");
	$("#dices").append("<h3 class='defender'><--Defend roll</>");
	$("#dices").append("<h3 id='diceD1'class='dice defender'/>");
	$("#dices").append("<h3 id='diceD2'class='dice defender'/>");
	$("#playersBottom").append('<div id="unitsContainer"/>');
	$('#unitsContainer').append("<button id='btnSub' class='btnStyle btnA' >-</button>");
	$('#unitsContainer').append("<h1 id='attackingUnits' class='btnA'>1</h1>");
	$('#unitsContainer').append("<button id='btnAdd' class='btnStyle'btnA >+</button>");
	$('#playersBottom').append("<br/>");
	$('#playersBottom').append("<button id='btnRoll' class='btnStyle' >Roll!</button>");
	$('#playersBottom').append("<button id='btnEndBattle' class='btnStyle' >End</button>");

	var win = false;
	$('#btnRoll').bind('click', function(){
		console.log("ROLLING ROLLING");
		var value =	parseInt($('#attackingUnits').text());
		$('#attackingUnits').text(1);
		if(control.reciveAttack(value)){
			 $('#btnRoll').prop("disabled",true);
 			$('#btnEndBattle').prop("disabled",true);
			setTimeout(function(){
				panel.fadeOut("#playersTop *",function(){


					$('#playersTop *').remove();
					$('#btnRoll').remove();
					$('#attackingUnits').text(1)
					$('#playersTop').append("<h1 class='attacker'>You won! Enter transfer size and press end to return</h1>");			
					win = true;
					$('#btnEndBattle').prop("disabled",false);
				});

			}, 3000);


		}
	});
	$('#btnAdd').bind('click', function(){
		var value =	parseInt($('#attackingUnits').text());
		if(control.maxAttack(value)){
			alert("You dont have so many units");
			return;
		}
		if(value > 3){
			alert("Maxmium units per attack is 3");
			return;
		}
		$('#attackingUnits').text(''+(value+1) );
	});
	$('#btnSub').bind('click', function(){
		var value =	parseInt($('#attackingUnits').text());
		if(value==1){
			alert("You must attack with at least one unit");
			return;
		};
		$('#attackingUnits').text(''+(value-1) );
	});
	$('#btnEndBattle').bind('click', function(){
		panel.fadeOut("#playersTop *",function(){});
		panel.fadeOut("#playersBottom *",function(){
			if(win){
				var val = parseInt($('#attackingUnits').text());
				control.winTransfer(val);
				win=false;
			}

			panel.open(function(){
				
				$('#playersTop *').remove();
				$('#playersBottom *').remove();
				ui.addInfoPanel();
				control.updateScorePanel();
				control.updateTerritoryUI();
				control.activateDone();
			});
		});

	});

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

		var color = maps[gameData.playerSize-3].area[planet].territories[area].color;
		$("#territorium").css('background-image', 'none');
		$("#territorium").css("background-color", color);
		$('map area').off('click');
		$("#territorium h1").text(territorium.toUpperCase());
		$("#territorium").append('<div id="unitscontainer" class="panelcontainer"/>');
		$("#unitscontainer").append('<input id="btnUnitsMinus" class="btnPanel" type="button" value="-" />');
		$("#unitscontainer").append("<h1 id='units'> Units : "+maps[gameData.playerSize-3].area[planet].territories[area].units+"</h1>");
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
			maps[gameData.playerSize-3].area[planet].territories[area].units--;
			$("#units").text("Units : " + maps[gameData.playerSize-3].area[planet].territories[area].units);
		});
		$("#btnUnitsPlus").bind('click',function(){
			maps[gameData.playerSize-3].area[planet].territories[area].units++;
			$("#units").text("Units : " + maps[gameData.playerSize-3].area[planet].territories[area].units);
		});
		$("#btnColorNext").bind('click',function(){
			
			for (var i = 0; i < gameData.players.length; i++) {
				if(gameData.players[i].color === color){
					color = gameData.players[(i+1) % (4)].color
					console.log((i+1) % (4));
					break;
				}
			};
			maps[gameData.playerSize-3].area[planet].territories[area].color = color;
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
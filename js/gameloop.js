var gameLoop = function(){
	var isRunning = true;
	setupBoard();
	// while(isRunning){
			//Set turn

			//Reinforcement phase

			//Attack phase

			//Achivement phase

			//Movement phase
	// }

};

var setupBoard = function(){
	$("body").css("float","left");
	$("body").css('background-image', 'none');
	$("body").css("background-color","black");

	//Adds sidepanel
	addInfoPanel();
	//Add board
	addBoard();


};

var addInfoPanel = function(){
	$("body").append('<div id="scorepanel"></div>');
	$("#scorepanel").append("<h1 id='titleTurn' class='score'>"+gameData.players[gameData.turn].name+"</h1>");
	$("#scorepanel").append("<h2 id='titlePhase' class='score'>"+gameData.gamePhases[gameData.gamePhase]+"</h1>");
	$("#scorepanel").append("<input type='button' id='nextPhase' class='score' value='Next phase'></input>");
	$('#titleTurn').css('color',"#"+gameData.players[gameData.turn].color);
	$('#titlePhase').css('color',"white");
	$("#scorepanel").append(scorePanelData.toggleTitleHTML);
	$("#toggleTitle ").append(scorePanelData.toggleTitle);
	$("#scorepanel").append(scorePanelData.toggleColorHTML);

	$(".toggle-btn:not('.noscript') input[type=radio]").addClass("visuallyhidden");
	$(".toggle-btn:not('.noscript') input[type=radio]").change(function() {
		if( $(this).attr("name") ) {
			$(this).parent().addClass("success").siblings().removeClass("success")
		} else {
			$(this).parent().toggleClass("success");
		}
	});
	$(".toggle-btn:not('.noscript') input[type=radio]").bind('click', function(){
		console.log($(this).attr('id'));
		if($(this).attr('id') == 'toggleOn'){
			highlighting.alwaysOn =true;
		}else if($(this).attr('id') == 'toggleOff'){
				highlighting.alwaysOn =false;
		}
		for (var i = 0; i < 42; i++) {
			var color =  getTerrColor("#terr"+i);
			highlighting.setTerritoriumColor("#terr"+i,color);
		};
		$('#playboard').maphilight();
	});

	$('#nextPhase').bind('click',function(){
		gameData.gamePhase++;
		if(gameData.gamePhase>4){
			gameData.turn = (gameData.turn+1)%4;
			gameData.gamePhase=0;
		} 
		$('#titleTurn').text(gameData.players[gameData.turn].name);
		$('#titleTurn').css('color',"#"+ gameData.players[gameData.turn].color);
		$('#titlePhase').text(gameData.gamePhases[gameData.gamePhase]);
		$('#titlePhase').css('color',"white");
	});

};

var addBoard = function(){
	$("body").append('<div id="boardContaineer"/>');
	$("#boardContaineer").append(boardImg);
	$("#boardContaineer").append(map);
	for (var i = 0; i < 42; i++) {
		$("#Map").append($(area1[i]).attr('id','terr' + i));
		var color =  getTerrColor("#terr"+i);
		highlighting.setTerritoriumColor("#terr"+i,color);
	};
	$('#playboard').maphilight();

}

var areaClick = function(area,id){
	panel.territoriumPanel(area,id);
}

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
	return maps[gameData.playerSize-3].planets[parseInt(pos2[0])].territories[parseInt(pos2[1])].color;
}

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
	$("body").css("background-color","black");;
	//Add scorepanel
	$("body").append('<div id="scorepanel"></div>');
	$("#scorepanel").append("<h1 id='titleTurn'>Turn</h1>");
	$("#scorepanel").append("<h2 id='titlePhase'>phase</h1>");
	//Add board
	$("body").append(boardImg);
	


};

var addSidePanel = function(){


};
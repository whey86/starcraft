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

	//Adds sidepanel
	addSidePanel();
	//Add board
	addBoard();


};

var addSidePanel = function(){
	$("body").append('<div id="scorepanel"></div>');
	$("#scorepanel").append("<h1 id='titleTurn'>Turn</h1>");
	$("#scorepanel").append("<h2 id='titlePhase'>phase</h1>");

};

var addBoard = function(){

	$("body").append(boardImg);
	$("body").append(map);
	for (var i = 0; i < 37; i++) {
		$("#Map").append(area1[i]);
	};
	
	$('map area').bind('click',function(){
		areaClick($(this).attr('alt'),$(this).attr('title'));
	});
}

var areaClick = function(area,id){
	panel.territoriumPanel(area,id);
	}


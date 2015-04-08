function UIControl(c){
	var self =this;
	this.control = c;
	this.setupBoard = function(){
		$("body").css("float","left");
		$("body").css('background-image', 'none');
		$("body").css("background-color","black");

	//Adds sidepanel
	addInfoPanel();
	//Add board
	addBoard();
};

this.setTurn = function(player){
	$('#titleTurn').text(player.name);
	$('#titleTurn').css('color',"#"+ player.color);
};
this.setPhase = function(player){
	$('#titlePhase').text(player.name);
	$('#titlePhase').css('color',"#"+ player.color);
}

var addInfoPanel = function(){
	$("body").append('<div id="scorepanel"></div>');
	$("#scorepanel").append("<h1 id='titleTurn' class='score'></h1>");
	$("#scorepanel").append("<h2 id='titlePhase' class='score'></h1>");
	$("#scorepanel").append("<input type='button' id='nextPhase' class='score' value='Next phase'></input>");

	//
	// $('#titleTurn').css('color',"#"+gameData.players[gameData.turn].color);
	// $('#titlePhase').css('color',"white");
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
		console.log(data);
	/*	gameData.gamePhase++;
		if(gameData.gamePhase>4){
			gameData.turn = (gameData.turn+1)%4;
			gameData.gamePhase=0;
		} 
		$('#titleTurn').text(gameData.players[gameData.turn].name);
		$('#titleTurn').css('color',"#"+ gameData.players[gameData.turn].color);
		$('#titlePhase').text(gameData.gamePhases[gameData.gamePhase]);
		$('#titlePhase').css('color',"white");*/
	});

};

var addBoard = function(){
	$("body").append('<div id="boardContainer"/>');
	$("#boardContainer").append(boardImg);

	$("#boardContainer").append(map);
	for (var i = 0; i < 42; i++) {
		$("#Map").append($(area1[i]).attr('id','terr' + i));

		var pos = $("#terr"+i).attr('title');
		var pos2 = pos.split(" ");
		console.log(pos2);
		var color =  self.control.getColor(parseInt(pos2[0]),parseInt(pos2[1]));
		highlighting.setTerritoriumColor("#terr"+i,color);
	};
	$('#playboard').maphilight();

 /* var $span=$('<span class="map_title">'+"30 Units"+'</span>');        
        $span.css({top: 200+'px', left: 200+'px', color : 'purple', "font-size" : '40px', position:'absolute'});
        $span.appendTo('#boardContainer');*/
    }

    this.setTurn = function(){};
    this.setPhase = function(){};
    this.setInfoPanel=function(){};
}
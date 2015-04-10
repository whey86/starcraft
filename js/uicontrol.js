function UIControl(c){
	var self =this;
	this.ratio;
	this.ctx;
this.myCanvas;
	this.control = c;

		$("body").empty();
		$("body").css('background-image', 'none');
		$("body").css("background-color","#000011");


this.setTurn = function(player){
	console.log(player);
	$('#titleTurn').text(player.name);
	$('#titleTurn').css('color',"#"+ player.color);
};
this.setPhase = function(phase){
	$('#titlePhase').text(phase);
}

this.addInfoPanel = function(){
	$("body").append('<div id="scorepanel"></div>');
		$("#scorepanel").append('<div id="score1"></div>');
	$("#score1").append("<h1 id='titleTurn' class='score'></h1>");
	$("#scorepanel").append('<div id="score2"></div>');
	$("#score2").append("<h1 id='titlePhase' class='score'></h1>");


	/*$("#scorepanel").append(scorePanelData.toggleTitleHTML);
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
				var pos = $("#terr"+i).attr('title');
			var pos2 = pos.split(" ");
			var color =  self.control.getColor(parseInt(pos2[0]),parseInt(pos2[1]));
			highlighting.setTerritoriumColor("#terr"+i,color);
		};
		$('#playboard').maphilight();
	});

	$('#nextPhase').bind('click',function(){
		console.log(self.control.getGameData());*/
	/*	gameData.gamePhase++;
		if(gameData.gamePhase>4){
			gameData.turn = (gameData.turn+1)%4;
			gameData.gamePhase=0;
		} 
		$('#titleTurn').text(gameData.players[gameData.turn].name);
		$('#titleTurn').css('color',"#"+ gameData.players[gameData.turn].color);
		$('#titlePhase').text(gameData.gamePhases[gameData.gamePhase]);
		$('#titlePhase').css('color',"white");*/
	// });

};

this.addBoard = function(){
	$("body").append('<div id="boardContainer"></div>');
	$("#boardContainer").append(boardImg);
		$("#boardContainer").append(map);
	;
	for (var i = 0; i < 42; i++) {
		$("#Map").append($(area1[i]).attr('id','terr' + i));

		// var pos = $("#terr"+i).attr('title');
		// var pos2 = pos.split(" ");
		// var color =  self.control.getColor(parseInt(pos2[0]),parseInt(pos2[1]));
		// highlighting.setTerritoriumColor("#terr"+i,color);
	};
	
	$('#playboard').maphilight({strokeColor : "#AAAAAA"});
	// $('img[usemap]').rwdImageMaps();
 /* var $span=$('<span class="map_title">'+"30 Units"+'</span>');        
        $span.css({top: 200+'px', left: 200+'px', color : 'purple', "font-size" : '40px', position:'absolute'});
        $span.appendTo('#boardContainer');*/
    }
this.setupBoard = function(){
	this.addInfoPanel();
	this.addBoard();
	this.addInputPanel();
	// this.addOverlayCanvas();
	//Create canvas with the device resolution.
 	self.myCanvas = createHiDPICanvas(800, 540);
	this.drawTerritoryStats(80,110,40);

}

this.addInputPanel = function(){
$("body").append('<div id="inputpanel"></div>');
	
	$("#inputpanel").append('<div id="input1"></div>');
	$("#input1").append("<button id='btnDone' class='score' >Done</button>");
}
this.drawTerritoryStats = function(x, y, units){
var c = $('#overlayCanvas')[0];
      // var context = c[0].getContext('2d');
console.log(c);
      var ctx = c.getContext("2d");
ctx.font = "20px Sans-serif"
    ctx.fillStyle = 'white';
    ctx.fillText(units, x, y);
      // context.lineWidth = 3;
      // // stroke color
      // context.strokeStyle = 'blue';
      // context.font = '22pt calibri';
      // context.fillStyle = 'white';
      // context.fillText(units, 150, 100);

}
this.addOverlayCanvas = function(){
	    $('<canvas>').attr({
        id: 'overlayCanvas'
    }).css({
        width: 800  + 'px',
        height: 540 + 'px'
    }).appendTo("#boardContainer div");
}
}
var PIXEL_RATIO = (function () {
    var ctx =   $('<canvas>').attr({
        id: 'overlayCanvas'
    })[0];
    console.log(ctx);
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();
var createHiDPICanvas = function(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can =   $('<canvas>').attr({
        id: 'overlayCanvas'
    }).appendTo("#boardContainer div")[0];
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    $(can).attr('id', 'overlayCanvas')
    return can;
}
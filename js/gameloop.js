var gameLoop = function(control){
	var isRunning = true;
	var uicontrol = new UIControl(control);
	control.setUIControl(uicontrol);
	uicontrol.setupBoard();
	bindTerritoryClick(control);
	uicontrol.setTurn(control.getCurrentPlayer);
	// bindTerritoryClick(control);

};

var setClickFunction = function(control){
		$("#Map area").bind('click',function(){
    		alert('unit placed');
    		var pos = $(this).attr('title').split[" "];
    		var area = parseInt(pos[0]);
    		var territory = parseInt(pos[1]);
    	});

}


    var areaClick = function(area,id){
    	panel.territoriumPanel(area,id);
    }
    var bindTerritoryClick = function(control){
    	$("#Map area").bind('click',function(){

    		control.territoryClick($(this));
    	});
    }


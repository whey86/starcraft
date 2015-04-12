var gameLoop = function(control){
	var isRunning = true;
	var uicontrol = new UIControl(control);
	control.setUIControl(uicontrol);
	uicontrol.setupBoard();
	bindTerritoryClick(control);
	control.updateScorePanel();
};



    var areaClick = function(area,id){
    	panel.territoriumPanel(area,id);
    }
    var bindTerritoryClick = function(control){
    	$("#Map area").bind('click',function(){

    		control.territoryClick($(this));
    	        highlighting.setTerritoriumColor()
    	});
    }


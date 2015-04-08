var gameLoop = function(control){
	var isRunning = true;
	var uicontrol = new UIControl(control);
	uicontrol.setupBoard();
	//If map is not premade(startup units placed), start unitplacment
	if(control.isStartPhase){
		// placeBase(control);
	}
	// while(isRunning){
			//Set turn

			//Reinforcement phase

			//Attack phase

			//Achivement phase

			//Movement phase
	// }

};



    var areaClick = function(area,id){
    	panel.territoriumPanel(area,id);
    }
    var placeBase = function(control){
    	$("#Map area").bind('click',function(){
    		alert('unit placed');
    		var pos = $(this).attr('title').split[" "];
    		var area = parseInt(pos[0]);
    		var territory = parseInt(pos[1]);
    	});
    }

    var placeStartUnits = function(control){


    	$("#Map area").bind('click',function(){
    		alert('unit placed');
    		var pos = $(this).attr('title').split[" "];
    		var area = parseInt(pos[0]);
    		var territory = parseInt(pos[1]);
    		// if(map.area[area].territories[territory].units)  
    	});
    }
    var changeGameState = function(){

    }
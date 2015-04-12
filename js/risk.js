function risk(){
	var data = gameData;
	var gamemap = freemap;
	var control; 
	this.setGameData = function(gamedata){data = gamedata;};
	this.setMap = function(map){gamemap=map};
	this.start = function(){
	 control = new gameControl(data,gamemap);
		panel.startpanel(control);
	};

	this.getData = function(){
		return data;
	}
	this.getControl = function(){
		return control;
	}

}
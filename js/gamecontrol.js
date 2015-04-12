function gameControl (d,m){
	var self = this;
	var map = m;
	var data = d;
	var ui;

	var selection = {
		isSelected : false,
		area : null,
		territory : null,
	}

	/****************Set variables*********************/
	this.setGameData = function(model){
		data = model;
	};
	this.setMap = function(model){
		map = model;
	};
	this.setUIControl= function  (uic) {
		ui = uic;
	}
	/******************Game states***************************/

	this.getStartPhase = function(){
		return data.startPhases[data.startPhase];
	};
	this.nextStartPhase = function(){
		return data.startPhase++;
	};

	this.getTurn = function(){
		return data.turn;
	};
	this.turnComplete =  function(){
		data.turn = (data.turn + 1)%data.playerSize;
	};

	this.getGamePhase =  function(){
		return data.gamePhases[data.phase];
	};

	this.getCurrentPhase =  function(){
		if(data.startPhase<3){
			return data.startPhases[data.startPhase];
		}
		return data.gamePhases[data.gamePhase];
	};
	this.getGameData =  function(){
		return data;
	};
	this.nextGamePhase = function(){
		return data.gamePhase = (data.gamePhase+1) % (data.gamePhases.length);
	};

	this.isStartPhase = function(){
		if(data.startPhase<3)
		{
			return true;
		}
		else
		{
			return false;
		};
	};
	this.getCurrentMessage = function(){
		return data.message;
	}
	this.setMessage = function(message){
		data.message = message;
	}

	//Number of players (sets startunits at the same time)
	this.setPlayerSize = function(size){
		for (var i = 0; i < size; i++) {
			data.unitCount[i] = data.startUnits[size-3];
		};
		data.playerSize = size;
	}
	this.getPlayerSize = function(){
		return data.playerSize;
	}

	//Set continer of players
	this.setPlayers = function(players){
		data.players= players;
	}
	this.getCurrentPlayer = function(){
		return data.players[data.turn];
	}
	//Set player race
	this.setPlayerRace = function(index, race){
		data.players[index].race = race;
	}
	this.getPlayerRace = function(index){
		return data.players[index].race;
	}
	this.getPlayerColor = function(index){
		return data.players[index].color;
	}
	//Set player race
	this.setPlayerName = function(index, name){
		data.players[index].name = name;
	}

	//Territories api
	//int of area, int territory, int number of units added
	this.addUnits = function(area, territory, units){
		map.area[area].territories[territory].units += units;
		// self.updateTerritoryUI(area, territory);
	};
	//int of area, int territory, int number of units removed
	this.removeUnits = function(area, territory, units){
		map.area[area].territories[territory].units -= units;
		ui.drawTerritoryStats(area, territory, map.area[area].territories[territory].units);
	};
	//int of area, int territory, colorcode of owner
	this.changeControl = function(area, territory, color){
		map.area[area].territories[territory].color = color;
	};
	//int of area, int territory, boolean if base
	this.setBase = function(area, territory, base){
		map.area[area].territories[territory].base = base;
	};
	//int of area, int territory, boolean if extra value of territoium
	this.setExtra = function(area, territory, extra){
		map.area[area].territories[territory].extra = extra;
	};
	//int of area, int territory
	this.getUnits = function(area, territory){
		return map.area[area].territories[territory].units;
	};
	//int of area, int territory, int number of units added
	this.getColor = function(area, territory){
		return map.area[area].territories[territory].color;
	};
	//int of area, int territory, int number of units added
	this.hasHero = function(area, territory){
		return map.area[area].territories[territory].hero;
	};
	this.getAdjacent = function(area, territory){
		return map.area[area].territories[territory].adjacent;
	};
	//move units from one area to another
	this.moveUnits = function(area1, territory1, area2, territory2, units){
		//Reduce from current territory
		map.area[area1].territories[territory1].units -= units;
		//Add to new territory
		map.area[area2].territories[territory2].units += units;
	},
	this.isDefeated = function(area, territory){
		if(map.area[area1].territories[territory1].units<=0){ return true;}
		else{return false;}
	};
	this.isFree = function(area, territory){
		var color = map.area[area].territories[territory].color;
		console.log(color);
		if( color == null || color == ""){return true;} else{return false;} 
	}
	this.getMiddle = function(area, territory){
		return map.area[area].territories[territory].middle;
	}

	/*************** STARTPHASE ************************/

	this.addHero= function(area, territory){
		console.log(territory);
		console.log(area);
		console.log(map.area[area].territories[territory]);
		if(map.area[area].territories[territory].color == data.players[data.turn].color){
			map.area[area].territories[territory].hero = true;
			return true;
		}else{
			return false;
		}
		
	}
	this.addBase= function(area, territory){
		if(self.isFree(area, territory)){
			// map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].base = true;
			// self.updateTerritoryUI(area, territory);
			return true;
		}else{
			return false;
		}
		
	}
	this.addReinforcement = function(area, territory){
		if(self.isFree(area, territory)){
			map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].units++;
			// self.updateTerritoryUI(area, territory);
			return true;
		}else{
			alert("area is taken");
			return false;
		}
	};
	this.getStartSum = function(){
		var sum = 0;
		for (var i = 0; i < data.startUnitCount.length; i++) {
			sum += data.unitCount[i];
		};
		return;
	}
	//Attack an other territory
	//int of area, int territory, int number of units to attack with, array with dices, defender area and territory
	// returns true if opponent was defeated
	this.attack = function(area1, territory1,units, attackroll, area2, territory2, defroll){
		//Wrong input
		if(attackroll.length > units){
			//Do alert before
			alert("Not enough units to attack");
			return false;
		}
		//is adjacent
		if(!gameControl.isAdjacent(area1, territory1, area2, territory2)){
			//Do alert beforil
			alert("terriories not adjacent");
			return false;
		};

		var a = attackroll.sort(function(a, b){return b-a});
		var b = defroll.sort(function(a, b){return b-a});
		if(gameControl.hasHero(area1, territory1)){
			a[0]++;
		}
		if(gameControl.hasHero(area2, territory2)){
			b[0]++;
		}
		for (var i = 0; i < Math.min(a.length,b.length); i++) {
			console.log("attack : " + a[i]);
			console.log("defend : " + b[i]);
			//If attacker wins
			if(a[i]>b[i]){
				gameControl.removeUnits(area2,territory2,1);
				// self.updateTerritoryUI(area2, territory2);
				if(gameControl.isDefeated(area2, territory2)){return true;}
			//Defender wins
		}else{
			gameControl.removeUnits(area1,territory1,1);
			// self.updateTerritoryUI(area1, territory1);
		}
	};
	return false;

};
	//Same as attack but autorolls dices
	this.attackandroll = function(area1, territory1,units, area2, territory2){
		if(gameControl.getUnits(area1, territory1)<units || gameControl.getUnits(area1, territory1)==1){
			//no enough units
			return;
		}
		var defcount = 1;
		if(gameControl.getUnits(area1, territory1)>1){
			defcount = 2;
		}
		gameControl.attack(area1, territory1,units, dice.rollMulti(units), area2, territory2, dice.rollMulti(defcount));
	};
	//Returns boolean if 2 territories is adjacent
	this.isAdjacent = function(area1, territory1, area2, territory2){
		var adjacent = gameControl.getAdjacent(area1, territory1);
		console.log(adjacent);
		for (var i = 0; i < adjacent.length; i++) {
			if(adjacent[i].area == area2 && adjacent[i].territory == territory2){
				return true;
			}
		};
		return false;
	}
		//Set how a territory should react on click depending on phase
		var startPhaseFunctions = [
				//Startphase 1´0
    			//Bases left to deploy
    			function (con, area,territory) {
    				if(con.addBase(area,territory)){
    					console.log("Base placed");
    					data.baseCount++;
    					con.addReinforcement(area,territory);
    					data.unitCount[data.turn]--;
    					data.unitsOut++;
    					con.turnComplete();
    				}else{
    					alert("base === true");
    				}
    				if(data.baseCount >= data.playerSize){
    				//Place base if territory dont have a base and finish turn
    				con.nextStartPhase();
    				return;
    			}	},
    			function (con,area,territory) {
    				console.log("click 2");
    				//Player has units left 
    				if(data.unitCount[data.turn] > 0 ){
    					//all areas are busy, add reinforcement on own territory instead of free
    					if(data.unitsOut>=map.mapSize){
    						if(	map.area[area].territories[territory].color == data.players[data.turn].color){
    							map.area[area].territories[territory].units++;
    							// self.updateTerritoryUI(area, territory);
    							data.unitCount[data.turn]--;
    							data.unitsOut++;
    							data.message = messages.deployment + data.unitCount[data.turn];
    							con.turnComplete();
    							if(data.unitsOut>=data.max[data.playerSize-3]){
    								data.turn = 0;
    								con.nextStartPhase();
    							}
    							return;
    						}
    						return;
    					}
    					//add reinforcement on free area
    					else{
    						if(con.addReinforcement(area,territory)){
    							data.unitCount[data.turn]--;
    							data.unitsOut++;
    								data.message = messages.deployment + data.unitCount[data.turn];
    							con.turnComplete();
    							if(data.unitsOut>=data.max[data.playerSize-3]){
    								data.turn = 0;
    								con.nextStartPhase();
    							}
    							return;
    						}
    						return;
    					}
    				}
    				else{
    					con.turnComplete();
    					if(data.unitsOut>=data.max[data.playerSize-3]){
    						data.turn = 0;
    						con.nextStartPhase();
    					}

    					return
    				}
    				

    			}
    			,
    			function (con,area,territory) {
    				console.log("click 3");
    				
    				if(self.addHero(area, territory)){
    					data.heroCount++;
    					con.turnComplete();
    				}
    				if(data.heroCount >= data.playerSize){

    					data.turn = 0;
    					con.nextStartPhase();

    							//Begining of a new turn, player gets reinforcement

    								self.setupTurn();
    								data.startOfTurn=false;
    							
    								activateDone();
    						}
    						return;
    					}

    					];

    					var gameFunctions = [
    			//Deployment function
    			function (area,territory){
    				console.log(data.unitCount);
    				console.log(data.turn);

    				if(data.unitCount[data.turn] > 0){
    					if(	map.area[area].territories[territory].color == data.players[data.turn].color){
    						map.area[area].territories[territory].units++;
    						data.unitCount[data.turn]--;
    						data.unitsOut++;
    						data.message = messages.deployment + data.unitCount[data.turn];
    						return;
    					}
    					alert("You have to place your units on a friendly territory");
    				}else{
    					alert("No reinforcements left, start next phase");
    				}
    			}
    			,
    			//Attack select
    			function (area,territory){
    				selection.isSelected = true;
    				selection.area = area;
    				selection.territory = territory;

    				//Mark terrotiry
    				highlighting.markAsSelected('#' + $(obj[0]).attr('id'));
    				

    			}
    			,
    			//Attack target
    			function (area,territory){
    				//is adjcent
    				//....


    			}
    			,
    			//Achivement
    			function (area,territory){
    			}
    			,
    			//Movement select
    			function (area,territory){

    			},
    			//Movment target
    			function (area,territory){

    			}
    			];
    			this.territoryClick = function(obj){
    				var pos = $(obj[0]).attr('title').split(" ");
    				var area = parseInt(pos[0]);
    				var territory = parseInt(pos[1]);

    				if(self.isStartPhase()){

    					startPhaseFunctions[data.startPhase](self,area,territory);
    					var color = self.getColor(area,territory);
    					console.log(color);
    					if(color !=""){
    						console.log("Changing color");
    						console.log($(obj[0]).attr('id'));
    						highlighting.setTerritoriumColor('#' + $(obj[0]).attr('id'),''+color);
    					}

    				//gamephase
    			}else{

    				//Deployment phase
    				if(data.gamePhase == 0){
    					gameFunctions[data.gamePhase](area,territory);
    				}
    				//Attack phase
    				else if(data.gamePhase == 1){

    					//from

    					//to
    				}
    				else if(data.gamePhase == 2){

    				}
    				else if(data.gamePhase == 2){

    				}
    				
    			}
    			setTimeout(function(){
    				var ctx = $("#boardContainer div canvas")[0].getContext("2d");
    				self.updateTerritoryUI();

    			}, 50);
    			self.updateScorePanel();


    		}
    		this.updateScorePanel = function(){
    			ui.setTurn(self.getCurrentPlayer());
    			ui.setPhase(self.getCurrentPhase());
    			ui.setMessage(self.getCurrentMessage());
    		}
    		this.updateTerritoryUI = function(){

    			for (var i = 0; i < map.area.length; i++) {
    				for (var j = 0; j < map.area[i].territories.length; j++) {
    					var middle = self.getMiddle(i,j);
    					var x = middle[0];
    					var y = middle[1];
    					var units = map.area[i].territories[j].units;
    					var base = map.area[i].territories[j].base;
    					var hero = map.area[i].territories[j].hero;
    					var color = map.area[i].territories[j].color;
    					ui.drawTerritoryStats(x,y,units,base,hero,color);

    				};
    			};


    		};

    		this.setupTurn = function(){
    			data.unitCount[data.turn] += self.countReinforcement();
    			self.setMessage("Reinforcement: " + data.unitCount[data.turn]);
    		}
    		//Loops though all terrtories,bases etc and return the size of the current players reinforcement
    		this.countReinforcement = function(){
    			var reinforcement = 0;
    			var bonus = 0;
    			var current = data.players[data.turn].color;
    			//loops planet
    			for (var i = 0; i < map.area.length; i++) {
    				var planetbonus = map.area[i].territories.length;
    				var planet = 0;
    				for (var j = 0; j < map.area[i].territories.length; j++) {
    					var color = map.area[i].territories[j].color;
    					if(color == current){
    						if(map.area[i].territories[j].base){bonus++;}
    						if(map.area[i].territories[j].mineral){bonus++;}
    						bonus++;
    						planet++;
    					}



    				};
    				if(planet == planetbonus){
    					reinforcement += map.area[i].bonus;
    				}

    			};

    			reinforcement += (bonus/3);
    			return reinforcement;
    		}
    		function activateDone(){
    			$("#btnDone").bind('click',function(){
    				self.nextGamePhase();
    				self.updateScorePanel();
    			});
    		}

    	}



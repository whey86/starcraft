function gameControl (d,m){
	var self = this
	var map = m;
	var data = d;
	var ui;

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
		return data.gamePhases[gameControl.gameData.phase];
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

	//Number of players (sets startunits at the same time)
	this.setPlayerSize = function(size){
		for (var i = 0; i < size; i++) {
			data.unitCount[i] = data.startUnits[size-2];
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
	};
	//int of area, int territory, int number of units removed
	this.removeUnits = function(area, territory, units){
		map.area[area].territories[territory].units -= units;
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
		console.log(map);
		var color = map.area[area].territories[territory].color;
		if( color == null || color == ""){return true;} else{return false;} 
	}

	/*************** STARTPHASE ************************/

	this.addHero= function(area, territory){
		if(map.area[area].territories[territory].color == data.players[data.turn].color){
			map.area[area].territories[territory].hero = true;
			return true;
		}else{
			return false;
		}
		
	}
	this.addBase= function(area, territory){
		if(self.isFree(area, territory)){
			map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].base = true;
			return true;
		}else{
			return false;
		}
		
	}
	this.addReinforcement = function(){
		if(self.isFree(area, territory)){
			console.log("is free");
			map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].units++;
			return true;
		}else{
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
				if(gameControl.isDefeated(area2, territory2)){return true;}
			}else{
				gameControl.removeUnits(area1,territory1,1);
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

    				console.log("click 1");
    				console.log(data.baseCount);
    				console.log(data.playerSize);
    				if(data.baseCount < data.playerSize){
    				//Place base if territory dont have a base and finish turn
    				if(con.addBase(area,territory)){
    					console.log("Base placed");
    					data.baseCount++;
    					con.turnComplete();
    				}
    				return;
    			}else{
    				con.nextStartPhase();
    			}	},
    			function (con,area,territory) {
    				console.log("click 2");
    				if(data.unitCount[data.turn] > 0 ){
    					//cant place on busy area
    					if(data.unitsOut>=map.mapSize){
    						if(this.getPlayerColor(data.turn) == getColor(area,territory)){
    							con.addUnits(area,territory,1);
    							data.unitsOut++;
    							data.unitCount[data.turn]-1;
    							console.log("unit placed");
    							con.turnComplete();
    							return;
    						}
    					}
    					//all areas are taken, can place on busy area
    					else{
    						if(con.addReinforcement){
    							data.unitCount[data.turn]-1;
    							data.unitsOut++;
    							console.log("unit placed");
    							con.turnComplete();
    							return;
    						}
    						return;
    					}
    				}
    				else{
    					con.turnComplete();
    				}
    				con.nextStartPhase();
    			}
    			,
    			function (area,territory) {
    				console.log("click 3");
    				if(data.heroCount < data.playerSize){
    					if(con.addHero(area, territory)){
    						data.heroCount++;
    						console.log("hero placed");
    						return;
    					}
    					return;

    				}
    				con.nextStartPhase();
    			}

    			];
    			this.territoryClick = function(obj){
    				console.log("Phase : " + data.startPhase);
    				console.log("Turn : " + data.turn);
    				var pos = $(obj[0]).attr('title').split(" ");
    				var area = parseInt(pos[0]);
    				var territory = parseInt(pos[1]);
    				if(this.isStartPhase){
    					console.log(data.startPhase);
    					startPhaseFunctions[data.startPhase](self,area,territory);
    				}
    			}
    		}


function gameControl (d,m){
	var self = this
	var map = m;
	var data = d;
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
	this.setGameData = function(model){
		data = model;
	};
	this.setMap = function(model){
		map = model;
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

	//Number of players
	this.setPlayerSize = function(size){
		data.playerSize = size;
	}
	this.getPlayerSize = function(){
		return data.playerSize;
	}

	//Set continer of players
	this.setPlayers = function(players){
		data.players= players;
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
		console.log(area);
		console.log(territory);
		console.log(map);
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
			map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].units++;
			return true;
		}else{
			return false;
		}
	};
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

	//UI control
}
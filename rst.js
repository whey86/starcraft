var boardImg = '<img src="img/board2.jpg" id="playboard" alt="" usemap="#Map">';
var map = '<map name="Map" id="Map" ></map>';
var area1= [ 
'<area  alt="Augustgrad" title="1 2" href="#" shape="poly" coords="665,164,648,187,641,211,629,225,652,241,658,253,650,259,666,317,690,338,714,334,724,347,735,365,780,372,789,381,809,402,865,408,878,392,904,379,876,370,859,336,861,324,867,326,880,324,871,309,859,310,829,294,820,265,810,264,810,277,799,276,788,268,798,261,785,255,792,230,799,216,813,218,832,207,826,183,828,169,785,172,771,203,694,202,685,185,673,174" />'
,'<area  alt="Radiated wastes" title="1 3" href="#" shape="poly" coords="670,395,673,363,685,351,688,340,665,324,647,262,656,250,624,228,636,219,649,176,662,163,652,151,662,110,643,110,622,126,611,146,596,167,587,191,577,222,573,255,571,293,584,332,599,367,620,393,648,419,681,443,684,443" />'
,'<area alt="Ruins of styrling" title="1 4" href="#" shape="poly" coords="687,444,671,388,671,367,688,357,689,344,718,335,721,349,726,350,732,366,780,375,783,384,798,386,808,406,861,411,859,446,812,461,759,465,714,455" />'
,'<area alt="ATE" title="0 11" href="#" shape="poly" coords="618,431,591,459,580,490,587,528,605,561,642,583,658,586,687,567,738,555,748,516,742,465,686,447,656,430,644,421" />'
,'<area alt="Eris" title="0 10" href="#" shape="poly" coords="377,544,356,545,339,555,328,565,317,586,314,609,317,631,332,656,351,670,373,675,398,671,423,658,436,637,445,616,440,588,426,562,404,547" />'
,'<area alt="Dauntless plateau" title="0 5" href="#" shape="poly" coords="591,352,604,376,622,398,616,430,598,440,583,464,573,467,565,466,558,469,550,473,531,476,522,472,511,472,507,463,495,463,490,455,469,448,462,442,465,428,466,418,465,410,472,400,474,389,465,380,465,371,478,353,495,337,534,338,547,352,558,358" />'
,'<area title="1 0" href="#" shape="poly" coords="651,149,665,114,675,89,696,81,736,65,779,64,822,67,868,85,904,107,932,138,939,149,891,150,846,186,834,189,828,167,787,167,768,199,699,201,681,177" />'
,'<area alt="Canis" title="1 6" href="#" shape="poly" coords="911,112,934,78,970,69,999,76,1020,97,1031,130,1021,164,1006,175,981,190,967,191,944,148" />'
,'<area alt="Keresh province" title="1 1" href="#" shape="poly" coords="942,149,964,190,975,230,978,257,970,312,946,370,908,373,875,368,861,333,880,322,875,309,861,307,831,293,822,261,819,255,806,260,808,271,796,267,801,261,791,253,803,218,818,226,837,209,832,193,889,153" />'
,'<area alt="Ursa" title="1 5" href="#" shape="poly" coords="906,377,876,396,864,419,861,443,870,476,898,496,940,502,961,492,979,469,989,429,981,409,953,378" />'
,'<area alt="Pyramus" title="4 5" href="#" shape="poly" coords="910,581,866,610,853,636,857,679,884,710,920,720,961,714,988,686,995,639,974,602,943,584" />'
,'<area alt="Jacobs installation" title="4 4" href="#" shape="poly" coords="873,593,822,565,765,555,693,565,689,590,693,597,688,605,723,658,742,655,756,654,764,633,794,631,814,657,833,671,850,655,854,628,879,601" />'
, '<area alt="Diamondback wastelands" title="4 2" href="#" shape="poly" coords="692,568,660,587,632,612,607,649,592,686,590,720,591,756,596,780,615,821,633,841,662,834,661,780,692,770,715,762,788,778,779,761,818,722,885,716,860,691,850,661,830,669,807,663,795,637,768,639,757,658,723,661,685,613" />'
, '<area alt="Backwater station" title="4 1" href="#" shape="poly" coords="787,780,785,807,818,813,828,823,843,830,852,826,863,830,876,828,889,830,916,810,873,862,840,884,797,898,733,898,699,888,660,870,637,847,660,837,665,785,690,772,722,763" />'
, '<area alt="Riksville" title="4 3" href="#" shape="poly" coords="889,716,934,726,934,756,927,780,918,804,889,828,878,822,865,826,851,823,840,826,830,822,824,811,785,805,791,781,781,762,822,724" />'
,    '<area alt="Katuul province" title="5 1" href="#" shape="poly" coords="1042,747,1040,790,1054,837,1087,880,1103,845,1169,839,1206,773,1167,773,1130,675,1112,661,1067,692" />'
,  '<area alt="Rajal" title="5 0" href="#" shape="poly" coords="1054,848,1028,861,1011,887,1009,922,1020,947,1046,966,1091,963,1113,948,1124,922,1124,910,1085,887" />'
,   '<area alt="Talematros" title="5 2" href="#" shape="poly" coords="1315,804,1304,782,1168,770,1134,677,1110,658,1165,646,1195,646,1232,655,1251,664,1291,694,1307,732,1316,763" />'
,  '<area alt="Xelnaga temple grounds" title="5 3" href="#" shape="poly" coords="1208,776,1170,843,1106,846,1089,888,1157,920,1195,920,1234,910,1283,875,1309,828,1313,806,1304,786" />'
,   '<area alt="Antioch province" title="2 3" href="#" shape="poly" coords="1280,602,1221,614,1187,614,1153,605,1112,583,1107,579,1151,552,1199,532,1291,519,1354,548,1322,577" />'
,   ' <area alt="Scion province" title="2 4" href="#" shape="poly" coords="1353,545,1377,514,1347,480,1318,459,1293,445,1246,427,1194,428,1199,529,1291,514" />'
,   '<area alt="The great forum" title="2 2" href="#" shape="poly" coords="1197,533,1146,549,1106,577,1076,553,1062,534,1132,431,1192,429" />'
, '<area alt="Temple of the preservers" title="2 1" href="#" shape="poly" coords="1061,532,1036,468,1034,421,1042,373,1055,350,1085,307,1106,347,1119,385,1129,429" />'
,   '<area alt="Velari province" title="2 7" href="#" shape="poly" coords="1134,430,1191,426,1244,425,1225,377,1198,319,1177,303,1122,281,1085,305" />'
,   '<area alt="Saalok" title="2 0" href="#" shape="poly" coords="1058,340,1023,291,1026,266,1042,236,1071,217,1110,216,1139,232,1153,260,1101,286" />'
, '<area alt="Citadel of the executor" title="2 8" href="#" shape="poly" coords="1125,279,1167,260,1193,256,1234,276,1267,313,1284,350,1228,374,1202,319" />'
,    '<area alt="Feral hives" title="2 6" href="#" shape="poly" coords="1197,254,1261,261,1302,278,1343,307,1366,338,1381,371,1388,396,1391,432,1359,397,1332,374,1283,353,1269,313,1250,288,1232,275" />'
,   '<area alt="Remains of the overmind" title="2 5" href="#" shape="poly" coords="1375,511,1391,469,1393,436,1352,392,1308,366,1283,356,1228,379,1248,426,1318,456" />'
,   '<area alt="Thisby" title="4 0" href="#" shape="poly" coords="676,881,659,914,623,935,594,937,559,920,540,894,538,851,551,822,584,802,602,799,625,843" />'
,  '<area alt="The eternal scar" title="3 0" href="#" shape="poly" coords="414,713,424,730,427,747,436,764,416,775,396,773,381,787,382,795,365,792,344,784,337,767,327,765,303,747,284,750,263,758,262,771,249,771,263,750,278,731,311,711,354,701,384,702" />'
,    '<area alt="Fulmic highlands" title="3 2" href="#" shape="poly" coords="246,777,235,818,240,861,259,903,284,928,296,934,295,926,286,918,290,914,294,906,291,901,293,885,307,888,313,899,327,896,338,895,331,883,335,874,345,871,352,867,358,849,350,842,339,842,335,828,324,824,322,815,337,805,351,807,358,791,341,787,340,775,327,769,317,758,305,752,297,745,270,758,264,774" />'
,   '<area alt="Volatile cleft" title="3 3" href="#" shape="poly" coords="299,936,331,948,359,954,393,950,413,943,441,926,462,905,474,887,482,867,487,844,477,843,466,869,450,882,414,876,411,866,395,865,377,858,372,850,360,851,357,868,351,873,338,873,336,884,342,895,314,901,307,891,295,886,296,912,289,917" />'
,   '<area alt="Sundered valley" title="3 1" href="#" shape="poly" coords="417,713,446,735,468,758,482,788,489,824,489,842,475,839,463,865,456,864,450,878,418,870,411,862,396,859,373,847,360,848,352,840,340,837,335,825,329,822,334,809,354,807,360,797,372,800,386,796,387,786,413,780,438,766" />'
, '<area alt="Char aleph" title="0 0" href="#" shape="poly" coords="231,174,234,162,227,156,230,152,219,149,217,148,207,150,206,155,190,159,185,158,183,160,183,169,175,167,178,158,152,144,130,150,105,158,103,169,107,173,100,175,98,185,97,190,74,197,84,225,87,221,89,229,98,241,104,233,118,255,127,236,142,238,149,251,156,240,160,240,164,226,168,230,174,220,183,238,197,246,205,246,216,229,224,231,232,243,239,230,246,231,255,208,252,198,244,195,245,187,227,177" />'

, '<area alt="Glass flats" title="0 1" href="#" shape="poly" coords="236,179,266,161,286,151,329,136,370,130,399,131,426,134,455,142,449,150,439,159,438,165,426,173,417,177,411,174,405,190,404,196,394,204,360,194,345,203,336,203,333,212,325,214,324,208,312,205,311,200,292,218,285,217,278,207,269,205,263,196,252,196,245,194,245,186" />'

, '<area alt="Death valley" title="0 3" href="#" shape="poly" coords="453,140,488,155,504,163,519,175,547,196,543,219,539,221,540,232,528,235,521,240,509,247,499,248,485,244,480,248,473,256,465,261,451,288,448,292,444,295,435,303,416,301,392,291,388,291,383,284,379,276,371,272,376,261,385,261,392,260,396,263,399,259,408,249,413,239,411,233,411,223,393,217,392,205,411,176,416,176,424,172,439,164" />'

,  '<area alt="Burning rift" title="0 2" href="#" shape="poly" coords="309,203,321,207,324,212,328,208,331,211,337,201,344,203,359,195,377,201,407,221,412,228,408,245,403,256,396,260,388,260,373,259,368,269,367,272,355,273,348,273,349,279,349,291,340,304,333,305,324,309,329,313,324,323,320,337,312,336,296,348,288,344,279,345,279,335,273,336,260,329,261,319,256,309,251,289,249,292,248,281,248,275,252,268,249,259,243,253,247,247,237,243,236,232,244,232,248,228,255,204,261,199,267,204,283,215,291,217" />'

,  '<area alt="Acid marsh" title="0 9" href="#" shape="poly" coords="179,236,167,260,157,275,152,290,147,312,141,338,137,356,137,380,140,403,144,422,155,463,163,467,167,475,169,486,172,496,188,496,195,491,205,482,204,478,204,472,200,462,209,446,199,426,196,420,207,420,211,412,205,398,209,367,216,366,215,350,212,334,205,319,208,318,201,315,196,303,204,292,205,282,196,275,195,263,201,246" />'

, '<area alt="Primary hive cluster" title="0 8" href="#" shape="poly" coords="215,231,203,247,196,260,207,281,205,296,197,301,200,313,205,317,213,331,211,339,217,349,215,364,212,372,208,397,213,411,211,419,197,423,212,445,203,464,207,480,199,493,192,496,172,500,188,521,205,540,221,556,243,572,241,564,240,553,237,553,237,535,244,521,259,517,265,509,289,507,299,493,300,484,295,477,301,471,299,468,319,444,332,448,335,443,340,441,348,431,348,417,345,412,357,397,364,397,372,392,381,380,385,380,393,359,400,357,407,331,403,328,412,319,409,315,415,303,387,293,377,280,372,275,364,273,355,276,349,276,351,292,343,304,329,308,332,315,327,325,321,340,308,340,296,351,285,347,276,347,276,340,257,332,259,321,249,295,243,288,244,281,248,269,241,256,243,248" />'

, '<area alt="Nydus network" title="0 7" href="#" shape="poly" coords="244,575,311,605,321,573,332,559,351,547,377,540,380,535,376,527,381,517,391,517,395,520,401,508,405,503,407,497,416,497,420,499,433,487,445,488,449,483,471,481,477,477,484,476,493,467,491,459,480,455,471,455,468,451,460,447,459,436,463,435,461,428,465,427,464,415,463,411,471,399,471,389,465,383,463,376,461,353,461,344,456,340,453,332,449,321,436,305,419,303,411,316,407,327,403,357,395,361,387,379,371,396,357,399,349,428,329,449,321,447,307,461,299,477,300,481,303,485,293,505,284,509,267,509,261,517,245,523,240,527,236,543" />'

,'<area alt="Bone trench" title="0 4" href="#" shape="poly" coords="549,198,550,200,574,224,570,266,576,311,589,352,573,353,561,358,553,353,550,344,537,337,526,343,505,340,495,335,483,352,465,368,462,344,448,317,438,305,450,292,466,262,492,245,496,249,508,249,523,240,540,233,543,221" />'
, '<area alt="Hells gates" title="0 6" class="noborder icolor00ff00" href="#" shape="poly" coords="382,540,413,549,433,570,447,594,449,604,477,595,505,577,539,558,565,532,577,519,577,491,581,472,523,479,505,474,471,478,445,487,423,495,414,499,386,519"><span>test</span>< /area>'];

var dice = {
	sides : 6,
	rollDice : function(){
		return Math.floor((Math.random() * dice.sides) + 1);
	},
	//Rolls muliple dices and returns array with result
	rollMulti : function(number){
		var array = new Array(number);

		for (var i = 0; i < number; i++) {
			array[i] = dice.rollDice();
		};
		return array;
	}
}


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


var gameData = {
	//Number of players
	playerSize : null,
	//Array with player data
	players: null,
	//Startphases
	startphases : ["Base", "Units", "Hero"],
	//Current startphase, if over 2, startphase is over
	starphase : 0,
	//Diffrent phases of the game
	gamePhases : ["Deployment", "Attack", "Achievment", "Movement"],
	//Currrent gamephase
	gamePhase : 0,
	turn : 0,

	map : null,
	//Starting units for number of players -> 3, 4 ,5 , 6
	startUnits : [30,25,20,15]



}
var players = [
{color: "AA00FF", race : "zerg", name: "", taken: false},
{color: "FF6D00", race : "protoss", name: "", taken: false},
{color: "2962FF", race : "terran", name: "", taken: false},
{color: "D50000", race : "terran", name: "", taken: false},
{color: "FFEB3B", race : "protoss", name: "", taken: false},
{color: "795548", race : "zerg", name: "", taken: false}
]
var player = {
	name : null,
	faction : null,
}
var mapskelleton = {
	size: null,
	premade: false,
	area : new Array(),
}
var territorySkelleton = {
	name : null, color : null, hero : false, units : 0, adjacent : [{area : 0, territory : 0}] 
}
var maps = [
	// Three players
	{},
	//Four players
	{
		order : [3,4,0,2],
		size : 4,
		premade: false,
		area : [
		{
			name : "Char",
			bonus : 7,
			territories : [
			{ name : "Char aleph", color : "AA00FF", hero : false, units : 2, adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Glass flats", color : "AA00FF", hero : false, units : 2 },
			{ name : "Burning rift", color : "AA00FF", hero : false, units : 2 },
			{ name : "Death valley", color : "2962FF", hero : false, units : 5 },
			{ name : "Bone trench", color : "FFEB3B", hero : false, units : 1 },
			{ name : "Dauntless plateau", color : "2962FF", hero : false, units : 1 },
			{ name : "Hells gates", color : "2962FF", hero : false, units : 2 },
			{ name : "Nydus network", color : "FFEB3B", hero : false, units : 2 },
			{ name : "Primary hive cluster", color : "2962FF", hero : false, units : 1 },
			{ name : "Acid marsh", color : "2962FF", hero : false, units : 1 },
			{ name : "Eris", color : "FFEB3B", hero : false, units : 2 },
			{ name : "Ate", color : "2962FF", hero : false, units : 1 }
			]
		},
		{
			name : "Korhal",
			bonus : 5,
			territories : [
			{ name : "Wolfrec province", color : "AA00FF", hero : false, units : 2 },
			{ name : "Keresh province", color : "FFEB3B", hero : false, units : 3 },
			{ name : "Augustgrad", color : "D50000", hero : false, units : 3 },
			{ name : "Radiated wastes", color : "FFEB3B", hero : false, units : 3 },
			{ name : "Ruins of styrling", color : "D50000", hero : false, units : 3 },
			{ name : "Ursa", color : "D50000", hero : false, units : 3},
			{ name : "Canis", color : "AA00FF", hero : false, units : 2 },
			]

		},
		{
			name : "Aiur",
			bonus : 5,
			territories : [
			{ name : "Saalok", color : "FFEB3B", hero : false, units : 2 },
			{ name : "Temple of the preservers", color : "FFEB3B", hero : false, units : 2 },
			{ name : "The great forum", color : "AA00FF", hero : false, units : 3 },
			{ name : "Antioch province", color : "D50000", hero : false, units : 2 },
			{ name : "Scion province", color : "AA00FF", hero : false, units : 2 },
			{ name : "Remains of the overmind", color : "AA00FF", hero : false, units : 2 },
			{ name : "Feral hives", color : "D50000", hero : false, units : 1 },

			{ name : "Velari province", color : "AA00FF", hero : false, units : 2 },
			{ name : "Citadel of the executor", color : "AA00FF", hero : false, units : 3 , base : true},

			]
		},
		//3
		{
			name : "Zerus",
			bonus : 2,
			territories : [
			{ name : "The eternal scar", color : "2962FF", hero : false, units : 4, base : true },
			{ name : "SundeD50000 valley", color : "2962FF", hero : false, units : 4 },
			{ name : "Fulmic highlands", color : "2962FF", hero : false, units : 1 },
			{ name : "Volatile cleft", color : "D50000", hero : false, units : 2 }
			]
		},
		//4
		{
			name : "Mar sara",
			bonus : 3,
			territories : [
			{ name : "Thisby", color : "D50000", hero : false, units : 1 },
			{ name : "Backwater station", color : "D50000", hero : false, units : 2, base : true },
			{ name : "Diamondback wastelands", color : "D50000", hero : false, units : 3 },
			{ name : "Riksville", color : "D50000", hero : false, units : 5 },
			{ name : "Jacobs installation", color : "2962FF", hero : false, units : 3 },
			{ name : "Pyramus", color : "FFEB3B", hero : false, units : 2 },
			]
		},
		{
			name : "Shakuras",
			bonus : 2,
			territories : [
			{ name : "Rajal", color : "FFEB3B", hero : false, units : 4, base : true },
			{ name : "Katuul province", color : "FFEB3B", hero : false, units : 4 },
			{ name : "Talematros", color : "AA00FF", hero : false, units : 2 },
			{ name : "Xelnaga temple grounds", color : "2962FF", hero : false, units : 2 }
			]
		}
		]


	}
	
	]

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
var highlighting = {

	alwaysOn : true,
	setTerritoriumColor : function(id,color){
		var data = $(id).data('maphilight')  || {};
		data.fillColor = color;
		data.alwaysOn = highlighting.alwaysOn;
		data.stroke = false;
		data.fillOpacity  = 0.35;
		$(id).data('maphilight', data);
	},


}
var getTerrColor= function(id){

	var pos = $(id).attr('title');
	var pos2 = pos.split(" ");
	return maps[gameData.playerSize-3].area[parseInt(pos2[0])].territories[parseInt(pos2[1])].color;
}
 var game;
 $(document).ready(function(){

	// panel.startpanel();
	             // jQuery('#ImageMap1').maphilight();
	             // gameLoop();
	             game = new risk();
	             game.setMap(maps[1]);
	             game.start();

	         });

 function gameSetup(){

 };

var paneldata ={
	numberOfPlayers : {
		title : "Choose number of players",
	},
	playerID : {
		title : "Each player rolls a dice, highest writes in their name first"
	}
};

var panel = {

	startpanel : function(control){
		console.log("startpanel");

		$("body").append("<div class='panel' id='players'></div>");
		$("#players").append("<h1></<h1>");

		panel.addPanel("#players", function(){
			$("#players h1").text(paneldata.numberOfPlayers.title);

			$("#players").append("<input type='button' class='btnPlayers' value='2'/>");
			$("#players").append("<input type='button' class='btnPlayers' value='3'/>");
			$("#players").append("<input type='button' class='btnPlayers' value='4'/>");
			$("#players").append("<input type='button' class='btnPlayers' value='5'/>");
			$("#players").append("<input type='button' class='btnPlayers' value='6'/>");

		});
		//action for selection of player size
		$(".btnPlayers").bind('click', function(){

				//record number of players 
				control.setPlayerSize(parseInt(this.value));
				control.setPlayers(players.slice(0,parseInt(this.value)));
				panel.removePanel("#players",function(){});
				$("#players").remove();
				panel.playerPanel(control);

			});
	},

	playerPanel : function(control){
		console.log("playerpanel");

		$("body").append("<div class='panel' id='playerIds'></div>");
		$("#playerIds").append("<h1></<h1>");
		$("#playerIds h1").text(paneldata.playerID.title);

		panel.addPanel("#playerIds", function(){
		console.log(control.getGameData());
			for (var i = 1; i <= control.getPlayerSize(); i++) {
				var value = "Player" + i;

				var color = players[i-1].color;

				$("#playerIds").append('<input id="player'+color+'" type="text" style="width:100px">');
				$("#player"+color).val(value);
				$("#playerIds").append('<img id="terranimg'+i+'" class="raceicon playerrow'+i+'"src="img/terran.jpg"/>');
				$("#playerIds").append('<img id="protossimg'+i+'" class="raceicon playerrow'+i+'"src="img/protoss.jpg"/>');
				$("#playerIds").append('<img id="zergimg'+i+'" class="raceicon playerrow'+i+'"src="img/zerg.jpg"/>');
				//Click on  img
				$(".playerrow"+i).bind('click',function(){

					var id = $(this).attr('id');
					var rowClass = $(this).attr('class').split(' ')[1];
					var num = parseInt(id.split('img')[1])-1;
					$("."+rowClass).removeClass("chosen");
					$(this).addClass("chosen");
					control.setPlayerRace(num,id.split('img')[0]);

				});

				$("#playerIds").append('<Br/>');
			};

			$("#playerIds").append('<Br/>');
			//Button and action to finish 
			$("#playerIds").append('<input id="btnPlayerDone" type="button" value="Done"  style="width:100px">');

			$("#btnPlayerDone").bind('click',function(){
				//Check that all players has chosen a race;
				for (var i = 1; i <= control.getPlayerSize(); i++) {
					var color = control.getPlayerColor(i-1);
					var name = $("#player"+color).val();
					var race = control.getPlayerRace(i-1);
					if( name == "" || race ==""){
						alert("Please enter names and race for all players");
						return;
					}
					control.setPlayerName(i-1,name);
				};
		// Launch game;
		panel.removePanel("#playerIds",function(){
			$("#playerIds").remove();
			gameLoop(control);
		});
	});


		});

},

removePanel : function(id,callback){
	console.log("removing panel ...");
	$(id).animate({
			//genomskinlighet
			'opacity': 0.0,
			'margin-left' : (parseInt($(id).parent().css('width')) - parseInt($(id).css('width'))) + 'px'
		}, 2000, callback());
},

addPanel : function(id,callback){
	console.log("adding panel " + id);
	$(id).animate({
			//genomskinlighet
			'opacity': 100.0,
			'margin-left' : (parseInt($(id).parent().css('width')) - parseInt($(id).css('width')))/3 + 'px'
		}, 1000, callback());
},
territoriumPanel : function(territorium,id){
	var temp = id.split(" ");
	var planet = parseInt(temp[0]);
	var area = parseInt(temp[1]);
	console.log(temp);
	console.log(planet);
	console.log(area);
	$("body").append("<div class='panel' id='territorium'></div>");
	$("#territorium").append("<h1></<h1>");

	panel.addPanel("#territorium",function(){

		var color = maps[gameData.playerSize-3].area[planet].territories[area].color;
		$("#territorium").css('background-image', 'none');
		$("#territorium").css("background-color", color);
		$('map area').off('click');
		$("#territorium h1").text(territorium.toUpperCase());
		$("#territorium").append('<div id="unitscontainer" class="panelcontainer"/>');
		$("#unitscontainer").append('<input id="btnUnitsMinus" class="btnPanel" type="button" value="-" />');
		$("#unitscontainer").append("<h1 id='units'> Units : "+maps[gameData.playerSize-3].area[planet].territories[area].units+"</h1>");
		$("#unitscontainer").append('<input id="btnUnitsPlus" class="btnPanel" type="button" value="+"  />');
		$("#territorium").append('<div id="colorcontainer" class="panelcontainer" />');

		$("#colorcontainer").append('<input id="btnColorNext" class="btnPanel" type="button" value="Next" />');
		$("#colorcontainer").append("<h1 id='color'> Color : "+color+"</h1>");
		//Button and action to finish 
		$("#territorium").append('<input id="btnDoneTerr" class="btnPanel" type="button" value="Done"/>');
		$("#btnDoneTerr").bind('click',function(){

			panel.removePanel("#territorium",function(){
				$("#territorium").remove();

				$('map area').bind('click',function(){
					areaClick($(this).attr('alt'),$(this).attr('title'));
				});
			});
		});
		$("#btnUnitsMinus").bind('click',function(){
			maps[gameData.playerSize-3].area[planet].territories[area].units--;
			$("#units").text("Units : " + maps[gameData.playerSize-3].area[planet].territories[area].units);
		});
		$("#btnUnitsPlus").bind('click',function(){
			maps[gameData.playerSize-3].area[planet].territories[area].units++;
			$("#units").text("Units : " + maps[gameData.playerSize-3].area[planet].territories[area].units);
		});
		$("#btnColorNext").bind('click',function(){
			
			for (var i = 0; i < gameData.players.length; i++) {
				if(gameData.players[i].color === color){
					color = gameData.players[(i+1) % (4)].color
					console.log((i+1) % (4));
					break;
				}
			};
			maps[gameData.playerSize-3].area[planet].territories[area].color = color;
			$("#territorium").css("background-color", color);
			$("#color").text("Color : " + color);
		});
	});
}
}

var scorePanelData ={
	toggleTitle : 'Map color',
	toggleTitleHHTML : "'<h2 id='titleToggle'></h2>'",
	toggleColorHTML : '<div class="toggle-btn-grp joint-toggle"><label onclick="" id="on" class="toggle-btn success"><input id="toggleOn" type="radio" name="group3"/>On</label><label onclick="" id="off" class="toggle-btn"><input id="toggleOff" type="radio" name="group3"/>Off</label></div>'


}
function risk(){
	var data = gameData;
	var gamemap = maps[1];
	var control; 
	this.setGameData = function(gamedata){data = gamedata;};
	this.setMap = function(map){gamemap=map};
	this.start = function(){
		var control = new gameControl(data,gamemap);
		panel.startpanel(control);
	};

	this.getData = function(){
		return data;
	}
	this.getControl = function(){
		return control;
	}

}

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
		gameData.gamePhase++;
		if(gameData.gamePhase>4){
			gameData.turn = (gameData.turn+1)%4;
			gameData.gamePhase=0;
		} 
		$('#titleTurn').text(gameData.players[gameData.turn].name);
		$('#titleTurn').css('color',"#"+ gameData.players[gameData.turn].color);
		$('#titlePhase').text(gameData.gamePhases[gameData.gamePhase]);
		$('#titlePhase').css('color',"white");
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
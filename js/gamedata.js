var gameData = {
	//Number of players
	playerSize : null,
	//Array with player data
	players: null,
	//Startphases
	startPhases : ["Place your base", "Add reinforcement", "Add hero on friendly territory"],
	//Current startphase, if over 2, startphase is over
	startPhase : 0,
	//Diffrent phases of the game
	gamePhases : ["Deployment", "Attack", "Achievment", "Movement"],
	//Currrent gamephase
	gamePhase : 0,
	turn : 0,
	baseCount : 0,
	heroCount : 0,
	unitCount : [],
	map : null,
	//Starting units for number of players -> 3, 4 ,5 , 6
	startUnits : [30,25,20,15],
	unitsOut :0



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
var freemap = {
		order : null,
		size : null,
		premade: false,
		mapSize : 42,
		area : [
		{
			name : "Char",
			bonus : 7,
			territories : [
			{ name : "Char aleph", color : "", hero : false, units : 0, adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Glass flats", color : "", hero : false, units : 0 },
			{ name : "Burning rift", color : "", hero : false, units : 0 },
			{ name : "Death valley", color : "", hero : false, units : 0 },
			{ name : "Bone trench", color : "", hero : false, units : 0 },
			{ name : "Dauntless plateau", color : "", hero : false, units : 0 },
			{ name : "Hells gates", color : "", hero : false, units : 0 },
			{ name : "Nydus network", color : "", hero : false, units : 0 },
			{ name : "Primary hive cluster", color : "", hero : false, units : 0 },
			{ name : "Acid marsh", color : "", hero : false, units : 0 },
			{ name : "Eris", color : "", hero : false, units : 0 },
			{ name : "Ate", color : "", hero : false, units : 0 }
			]
		},
		{
			name : "Korhal",
			bonus : 5,
			territories : [
			{ name : "Wolfrec province", color : "", hero : false, units : 0 },
			{ name : "Keresh province", color : "", hero : false, units : 0 },
			{ name : "Augustgrad", color : "", hero : false, units : 0 },
			{ name : "Radiated wastes", color : "", hero : false, units : 0 },
			{ name : "Ruins of styrling", color : "", hero : false, units : 0 },
			{ name : "Ursa", color : "", hero : false, units : 0},
			{ name : "Canis", color : "", hero : false, units : 0 },
			]

		},
		{
			name : "Aiur",
			bonus : 5,
			territories : [
			{ name : "Saalok", color : "", hero : false, units : 0 },
			{ name : "Temple of the preservers", color : "", hero : false, units :0 },
			{ name : "The great forum", color : "", hero : false, units : 0 },
			{ name : "Antioch province", color : "", hero : false, units : 0},
			{ name : "Scion province", color : "", hero : false, units : 0 },
			{ name : "Remains of the overmind", color : "", hero : false, units : 0 },
			{ name : "Feral hives", color : "", hero : false, units : 0 },

			{ name : "Velari province", color : "", hero : false, units : 0 },
			{ name : "Citadel of the executor", color : "", hero : false, units : 0 , base : false},

			]
		},
		//3
		{
			name : "Zerus",
			bonus : 2,
			territories : [
			{ name : "The eternal scar", color : "", hero : false, units : 0, base : false },
			{ name : "SundeD50000 valley", color : "", hero : false, units : 0 },
			{ name : "Fulmic highlands", color : "", hero : false, units : 0 },
			{ name : "Volatile cleft", color : "", hero : false, units : 0 }
			]
		},
		//4
		{
			name : "Mar sara",
			bonus : 3,
			territories : [
			{ name : "Thisby", color : "", hero : false, units : 0 },
			{ name : "Backwater station", color : "", hero : false, units : 0, base : false },
			{ name : "Diamondback wastelands", color : "", hero : false, units : 0 },
			{ name : "Riksville", color : "", hero : false, units : 0 },
			{ name : "Jacobs installation", color : "", hero : false, units : 0 },
			{ name : "Pyramus", color : "", hero : false, units : 0 },
			]
		},
		{
			name : "Shakuras",
			bonus : 2,
			territories : [
			{ name : "Rajal", color : "", hero : false, units : 0, base : false },
			{ name : "Katuul province", color : "", hero : false, units : 0 },
			{ name : "Talematros", color : "", hero : false, units :0 },
			{ name : "Xelnaga temple grounds", color : "", hero : false, units : 0 }
			]
		}
		]


	};


var maps = [
	// Three players
	{},
	//Four players
	{
		order : [3,4,0,2],
		size : 4,
		premade: false,
		mapSize : 42,
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

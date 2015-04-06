var gameData = {
	//Number of players
	playerSize : null,
	//Array with player data
	players: null,
	//Diffrent phases of the game
	gamePhases : ["Deployment", "Attack", "Achievment", "Movement"],
	//Currrent gamephase
	gamePhase : 0,
	turn : 0

}
var players = [
{color: "AA00FF", race : "zerg", name: ""},
{color: "FF6D00", race : "protoss", name: ""},
{color: "2962FF", race : "terran", name: ""},
{color: "D50000", race : "terran", name: ""},
{color: "FFEB3B", race : "protoss", name: ""},
{color: "795548", race : "zerg", name: ""}
]
var player = {
	name : null,
	faction : null,
}
var maps = [
	// Three players
	{},
	//Four players
	{
		order : [3,4,0,2],
		size : 4,
		planets : [
		{
			name : "Char",
			bonus : 7,
			territories : [
			{ name : "Char aleph", color : "AA00FF", hero : false, units : 2 },
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

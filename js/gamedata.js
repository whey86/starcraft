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
{color: "purple", race : "zerg", name: ""},
{color: "orange", race : "protoss", name: ""},
{color: "blue", race : "terran", name: ""},
{color: "red", race : "terran", name: ""},
{color: "yellow", race : "protoss", name: ""},
{color: "brown", race : "zerg", name: ""}
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
			{ name : "Char aleph", color : "purple", hero : false, units : 2 },
			{ name : "Glass flats", color : "purple", hero : false, units : 2 },
			{ name : "Burning rift", color : "purple", hero : false, units : 2 },
			{ name : "Death valley", color : "blue", hero : false, units : 5 },
			{ name : "Bone trench", color : "yellow", hero : false, units : 1 },
			{ name : "Dauntless plateau", color : "blue", hero : false, units : 1 },
			{ name : "Hells gates", color : "blue", hero : false, units : 2 },
			{ name : "Nydus network", color : "yellow", hero : false, units : 2 },
			{ name : "Primary hive cluster", color : "blue", hero : false, units : 1 },
			{ name : "Acid marsh", color : "blue", hero : false, units : 1 },
			{ name : "Eris", color : "yellow", hero : false, units : 2 },
			{ name : "Ate", color : "blue", hero : false, units : 1 }
			]
		},
				{
			name : "Korhal",
			bonus : 5,
			territories : [
			{ name : "Wolfrec province", color : "purple", hero : false, units : 2 },
			{ name : "Keresh province", color : "yellow", hero : false, units : 3 },
			{ name : "Augustgrad", color : "red", hero : false, units : 3 },
			{ name : "Radiated wastes", color : "yellow", hero : false, units : 3 },
			{ name : "Ruins of styrling", color : "red", hero : false, units : 3 },
			{ name : "Ursa", color : "röd", hero : false, units : 3},
			{ name : "Canis", color : "purple", hero : false, units : 2 },
			]

		},
			{
			name : "Aiur",
			bonus : 5,
			territories : [
			{ name : "Saalok", color : "yellow", hero : false, units : 2 },
			{ name : "Temple of the preservers", color : "yellow", hero : false, units : 2 },
			{ name : "The great forum", color : "purple", hero : false, units : 3 },
			{ name : "Antioch province", color : "red", hero : false, units : 2 },
			{ name : "Scion province", color : "purple", hero : false, units : 2 },
			{ name : "Remains of the overmind", color : "purple", hero : false, units : 2 },
			{ name : "Feral hives", color : "red", hero : false, units : 1 },

			{ name : "Velari province", color : "purple", hero : false, units : 2 },
			{ name : "Citadel of the executor", color : "purple", hero : false, units : 3 , base : true},

			]
		},
				{
			name : "Zerus",
			bonus : 2,
			territories : [
			{ name : "The eternal scar", color : "blue", hero : false, units : 4, base : true },
			{ name : "Sundered valley", color : "blue", hero : false, units : 4 },
			{ name : "Fulmic highlands", color : "blue", hero : false, units : 1 },
			{ name : "Volatile cleft", color : "red", hero : false, units : 2 }
			]
		},
				{
			name : "Mar sara",
			bonus : 3,
			territories : [
			{ name : "Thisby", color : "red", hero : false, units : 1 },
			{ name : "Backwater station", color : "red", hero : false, units : 2, base : true },
			{ name : "Diamondback wastelands", color : "red", hero : false, units : 3 },
			{ name : "Riksville", color : "red", hero : false, units : 5 },
			{ name : "Jacobs installation", color : "blue", hero : false, units : 3 },
			{ name : "Pyramus", color : "yellow", hero : false, units : 2 },
			]
		},
					{
			name : "Shakuras",
			bonus : 2,
			territories : [
			{ name : "Rajal", color : "yellow", hero : false, units : 4, base : true },
			{ name : "Katuul province", color : "yellow", hero : false, units : 4 },
			{ name : "Talematros", color : "purple", hero : false, units : 2 },
			{ name : "Xelnaga temple grounds", color : "blue", hero : false, units : 2 }
			]
		}
		]


	}
	
	]

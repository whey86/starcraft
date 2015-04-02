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
			name : "char",
			bonus : 7,
			territories : [
				{ name : "Char aleph", color : "purple", hero : false, units : 2 },
			]
		}
		 

		]
			

		}
	
]

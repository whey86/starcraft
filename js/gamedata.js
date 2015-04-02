var gameData = {
	playerSize : null,
	player: null,
	gamePhases : ["Deployment", "Attack", "Achievment", "Movement"],
	gamePhase : 0,

}
var players = [
{color: "purple", race : "zerg"},
{color: "orange", race : "protoss"},
{color: "blue", race : "terran"},
{color: "red", race : "terran"},
{color: "yellow", race : "protoss"},
{color: "brown", race : "zerg"}
]
var player = {
	name : null,
	race : null,
	color : null
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

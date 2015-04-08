 var myGame;
 $(document).ready(function(){

	// panel.startpanel();
	             // jQuery('#ImageMap1').maphilight();
	             // gameLoop();
	             myGame = new risk();
	             myGame.setMap(maps[1]);
	             myGame.start();

	         });

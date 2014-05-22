// this is where i add and edit the levels of my game.//
  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,2,1,1,1,2,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0]],
     2:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0]],
    3:   [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,2,2,2,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0]],
    4:    [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,1,0,0,1,0,1,0,0,1,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,2,2,2,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [2,2,1,1,1,2,2,1,1,1,2],
          [0,0,1,1,1,1,1,1,1,1,0]]};



//added more levels to the game increasing number of enemies per level//

//this is how you incorporate the sprite sheet into the game//
  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 13, h: 18, cls: Alien, frames: 2 },
    'alien2': { sx: 2,  sy: 20, w: 12, h: 17, cls: Alien, frames: 2 },
    'alien3': { sx: 32.9,  sy: 1, w: 16.1, h: 15.7, cls: Alien, frames: 2 },
    'player': { sx: 0,  sy: 37, w: 27, h: 15.8, cls: Player, frames: 2 },
    'missile': { sx: 0,  sy: 86, w: 3,  h: 14, cls: Missile }
    
  }
// this is where i edit the menu text
  function startGame() {
    var screen = new GameScreen("Fire Fighter","press space to start",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }
// this is where you edit the game over text.
  function endGame() {
    var screen = new GameScreen("Burn Out","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

// this is where i add the you win screen.
  function winGame() {
    var screen = new GameScreen("You Saved The Day!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }
//this is where i change the sound files from laser noises to match current theme
  $(function() {
    GameAudio.load({ 'fire' : 'media/laser.ogg', 'die' : 'media/explosion.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });




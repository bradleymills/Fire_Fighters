// this is where i add and edit the levels of my game.//
  var levelData = { 
    
      1:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0]],
      2:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0]],
     3:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [3,0,0,0,3,3,3,0,0,0,3],
          [0,0,2,2,2,2,2,2,2,2,0],
          [3,0,2,2,2,2,2,2,2,2,3],
          [3,0,1,1,1,1,1,1,1,1,3],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
    4:   [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [5,0,4,4,4,4,4,4,4,0,5],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,3,3,3,3,3,3,3,3,0],
          [3,0,0,0,0,0,0,0,0,0,3],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,1,1,1,1,1,1,0,0]],
      5:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,4,4,4,0,0,0,0],
          [5,0,0,0,2,2,2,0,0,0,5],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,2,0,0,2,2,2,0,0,3,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0]],
           
    6:    [[0,0,0,0,0,0,0,0,0,0,0],
          [3,0,0,0,0,4,0,0,5,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [5,0,4,4,4,0,4,0,4,0,5],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,3,0,0,3,0,3,3,3,0],
          [3,0,0,0,0,0,0,0,0,0,3],
          [0,0,2,2,2,2,2,2,2,2,0],
          [4,0,0,0,0,0,0,0,0,0,4],
          [0,0,1,1,0,5,0,1,1,0,0]]};



//added more levels to the game increasing number of enemies per level//

//this is how you incorporate the sprite sheet into the game//
  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 13, h: 18, cls: Alien, frames: 2 },
    'alien2': { sx: 2,  sy: 20, w: 12, h: 17, cls: Alien, frames: 2 },
    'alien3': { sx: 32.9,  sy: 1, w: 17, h: 15.7, cls: Alien, frames: 2 },
    'alien4': { sx: 69,  sy: 3.1, w: 16, h: 14, cls: Alien, frames: 2 },
    'alien5': { sx: 28,  sy: 20, w: 19, h: 17, cls: Alien, frames: 2 },
    'player': { sx: 0,  sy: 37, w: 27, h: 15.8, cls: Player, frames: 2 },
     // 'player': { sx: 113.2,  sy: 29, w: 38.7, h: 25, cls: Player, frames: 2 },//
      
    'missile': { sx: 2.2,  sy: 89, w: 4.8,  h: 9, cls: Missile },
   // 'missile2': { sx: 8,  sy: 89, w: 4.8,  h: 9, cls: Missile2 },
      
    
  }
  //this function controlls what happens when the player loses a life//
function loseLife(){
  if(this.Player) lives = lives -1;
    document.getElementById('lives').innerHTML="LIVES : " + lives; 
  }


function loseLifeScreen() {
    var screen = new GameScreen("SCORE : "+score+" ","you have "+lives+" lives left",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);

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
                                      document.getElementById('lives').innerHTML="LIVES : " + lives;
                                      
                                     score = 0;
                                     document.getElementById('score').innerHTML="SCORE : " + score;
                                     
                            
                                 });
    Game.loadBoard(screen);
  }

// this is where i add the you win screen. if the player completes the game
  function winGame() {
    var screen = new GameScreen("You Saved The Rain Forrest!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }
//this is where i change the sound files from laser noises to match current theme
  $(function() {
    GameAudio.load({ 'fire' : 'media/waterfire.ogg', 'die' : 'media/explosion.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start" : startGame,
                                       "loseLife" : loseLifeScreen,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });

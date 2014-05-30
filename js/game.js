

//this variable determins the score as 0 for starting the game
var score = 0;

//this variable determins the number of total lifes you recieve throughout the game

var lives = 3;




var AlienFlock = function AlienFlock() {
  this.invulnrable = true;
  this.dx = 10; this.dy = 0;
  this.hit = 1; this.lastHit = 0;
  this.speed = 10;

  this.draw = function() {};
    //This function controls the loading of the next level in the game, if there are no more levels then the game is 'won'//
  this.die = function() {
      this.alive = false;
      
    if(Game.board.nextLevel()) {
      Game.loadBoard(new GameBoard(Game.board.nextLevel())); 
    } else {
      Game.callbacks['win']();
    }
  }

  this.step = function(dt) { 
    if(this.hit && this.hit != this.lastHit) {
      this.lastHit = this.hit;
      this.dy = this.speed;
    } else {
      this.dy=0;
    }
    this.dx = this.speed * this.hit;

    var max = {}, cnt = 0;
    this.board.iterate(function() {
      if(this instanceof Alien)  {
        if(!max[this.x] || this.y > max[this.x]) {
          max[this.x] = this.y; 
        }
        cnt++;
      } 
    });

    if(cnt == 0) { this.die(); } 

    this.max_y = max;
    return true;
  };

}



var Alien = function Alien(opts) {
  this.flock = opts['flock'];
  this.frame = 0;
  this.mx = 0;
}
//this changes the drawing of the aliens//
Alien.prototype.draw = function(canvas) {
  Sprites.draw(canvas,this.name,this.x,this.y,this.frame);
}

//this effects how the game responds when an enemy is shot
Alien.prototype.die = function() {
  GameAudio.play('die');
  this.flock.speed += 1;  //here is where there is a rule added where when alien dies it increseas the speed of the alien flock//
  this.board.remove(this);
     score = score +1;
    document.getElementById('score').innerHTML="SCORE : " + score;
    
}
//this changes the frame rate of the 'aliens'//
Alien.prototype.step = function(dt) {
  this.mx += dt * this.flock.dx;
  this.y += this.flock.dy;
  if(Math.abs(this.mx) > 10) {
    if(this.y == this.flock.max_y[this.x]) {
      this.fireSometimes();
    }
    //this changes the frame rate of the aliens therfore chnages the speed in which they are animated
    this.x += this.mx;
    this.mx = 0;
    this.frame = (this.frame+1) % 2;
    if(this.x > Game.width - Sprites.map.alien1.w * 2) this.flock.hit = -1;
    if(this.x < Sprites.map.alien1.w) this.flock.hit = 1;
  }
  return true;
}
//this is where u change the fire rate of the aliens
Alien.prototype.fireSometimes = function() {
      if(Math.random()*100 < 9) {
          
          
          
                //This is where i can change the missles that the aliens will fire need to change missle to missle 2//
        this.board.addSprite('missile',this.x + this.w/2 - Sprites.map.missile.w/2,
                                      this.y + this.h, 
                                     { dy: 100 });
          
          
      }
}

var Player = function Player(opts) { 
  this.reloading = 0;
}
//this draws the player avatar//
Player.prototype.draw = function(canvas) {
   Sprites.draw(canvas,'player',this.x,this.y);
                //,this.frame);
}

//this determins what happens when the player dies or loses a life //
Player.prototype.die = function() {
  GameAudio.play('die');
  Game.callbacks['loseLife']();
    loseLife();
    loseLifeScreen();
    
    //this states that if the players lifes are equal to zero the game restarts
    if(lives <=0){
       Game.callbacks['die']();
    lives = 3;
    
};


}
//this changes the controlls for the player//
Player.prototype.step = function(dt) {
  if(Game.keys['left']) { this.x -= 100 * dt; }
  if(Game.keys['right']) { this.x += 100 * dt; }
  if(Game.keys['up']) { this.y -= 100* dt; }
  if(Game.keys['down']) { if(this.y < 480) { this.y += 100* dt; }
  }

  if(this.x < 0) this.x = 0;
  if(this.x > Game.width-this.w) this.x = Game.width-this.w;

  if(this.y < 400) this.y = 400;
  if(this.height > Game.height) this.height  = Game.height - this.y;


  this.reloading--; 
//this changes the amount of missles fired before reloading//
  if(Game.keys['fire'] && this.reloading <= 2 && this.board.missiles < 4) {
    GameAudio.play('fire');
    this.board.addSprite('missile',                     //this is where i can change the missles player will fire 
                          this.x + this.w/2 - Sprites.map.missile.w/2,
                          this.y-this.h,
                          { dy: -100, player: true });
    this.board.missiles++;
    this.reloading = 10;
  }
  return true;
}

//this variable declairs the funtion of the missle
var Missile = function Missile(opts) {
   this.dy = opts.dy;
   this.player = opts.player;
}
//this decides where the missle is drawn up from by the co ordinates on the sprite sheet
Missile.prototype.draw = function(canvas) {
   Sprites.draw(canvas,'missile',this.x,this.y);
}

Missile.prototype.step = function(dt) {
   this.y += this.dy * dt;

    
    //this variable tells the game to kill an enemy if there is a missle collision
   var enemy = this.board.collide(this);
   if(enemy) { 
     enemy.die();
     return false;
   }
   return (this.y < 0 || this.y > Game.height) ? false : true;
}

Missile.prototype.die = function() {
  if(this.player) this.board.missiles--;
  if(this.board.missiles < 0) this.board.missiles=0;
   this.board.remove(this);
}

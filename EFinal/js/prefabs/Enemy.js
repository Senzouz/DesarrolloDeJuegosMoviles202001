Enemy = function (game, key) {
  Phaser.Sprite.call(this, game, 0, 0, key);
  this.anchor.setTo(0.5);
  this.game = game;
  this.randomizer1_1 = this.game.rnd.integerInRange(0,1);
  switch(key){
    case "redEnemy":
      if(this.randomizer1_1 == 0){
        this.x = -this.width/2;
      }
      else{
        this.x = this.game.width+this.width/2;
      }

      this.y = 500;
      break;
    case "yellowEnemy":
      if(this.randomizer1_1 == 0){
        this.x = -this.width/2;
      }
      else{
        this.x = this.game.width+this.width/2;
      }

      this.y = 500;
      break;
    case "flyEnemy":
      if(this.randomizer1_1 == 0){
        this.x = -this.width/2;
      }
      else{
        this.x = this.game.width+this.width/2;
      }
      this.y = this.game.world.centerY;
      break;
    case "brownEnemy":
      this.x = this.game.rnd.integerInRange(0,this.game.width + this.width/2);
      this.y = this.game.height + this.height/2;
      break;
    case "creamEnemy":
      this.x = this.game.rnd.integerInRange(0,this.game.width + this.width/2);
      this.y = -this.height/2
      break;
  }
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function () {
};
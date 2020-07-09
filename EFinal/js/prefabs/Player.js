Player = function (game, hp, speed) {
  Phaser.Sprite.call(this, game, 0, 0, "player");
  this.anchor.setTo(0.5);
  this.game = game;
  this.hp = hp;
  this.frame = 4;
  this.direction = null;

  this.x = this.game.world.centerX;
  this.y = 500;

  this.PLAYER_SPEED = speed;

  this.game.add.existing(this);

  this.game.physics.arcade.enable(this);
  this.anchor.setTo(0.5); 
  this.body.collideWorldBounds = true;

  this.createBullet = new Phaser.Signal();

  this.animations.add("leftWalk", [0, 1, 2, 3, 2, 1], 10, false);
  this.animations.add("rightWalk", [5, 6, 7, 8, 7, 6], 10, false);

  this.keys = this.game.input.keyboard.createCursorKeys();
  
};
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function () {

  this.body.velocity.x = 0;
  this.body.velocity.y = 0;
  if (this.keys.left.isDown) {
    this.play("leftWalk")
    this.body.velocity.x = -this.PLAYER_SPEED;
    this.direction = "left";
  }
  else if (this.keys.right.isDown) {
    this.play("rightWalk")
    this.body.velocity.x =this.PLAYER_SPEED;
    this.direction = "right";
  }
  else if (this.keys.up.isDown) {
    if(this.body.touching.down)
    this.body.velocity.y =-1600;
    this.direction = "up";
  }
  else{
    this.frame = 4;
  }
};

Player.prototype.shoot = function () {
  this.createBullet.dispatch(this.x, this.y);
};


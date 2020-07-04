Number = function (game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, "numbers");
  this.anchor.setTo(0.5);
  this.frame = frame;
  this.game = game;

  this.game.add.existing(this);
};

Number.prototype = Object.create(Phaser.Sprite.prototype);
Number.prototype.constructor = Number;

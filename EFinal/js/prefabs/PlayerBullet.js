PlayerBullet = function (game, x, y,key) {
  Phaser.Sprite.call(this, game, x, y, key);
  this.anchor.setTo(0.5);
  this.scale.setTo(0.5);
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
};

PlayerBullet.prototype = Object.create(Phaser.Sprite.prototype);
PlayerBullet.prototype.constructor = PlayerBullet;

Preload = function () {};

Preload.prototype = {
  preload: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //centrar el juego horizontalmente
    this.scale.pageAlignHorizontally = true;
    //centrar el juego verticalmente
    this.scale.pageAlignVertically = true;
    this.load.image("redEnemy", "assets/red/springMan_stand.png");
    this.load.image("yellowEnemy", "assets/yellow/wingMan1.png");
    this.load.image("flyEnemy", "assets/fly/shipBeige_manned.png");
    this.load.image("brownEnemy", "assets/brown/duck_outline_brown.png");
    this.load.image("creamEnemy", "assets/cream/creamMocca.png");
    ///////////////////////////////////////////////////////////////////////////
    this.load.image("redBullet", "assets/bullets/red.png");
    this.load.image("yellowBullet", "assets/bullets/yellow.png");
    this.load.image("flyBullet", "assets/bullets/fly.png");
    this.load.image("brownBullet", "assets/bullets/brown.png");
    this.load.image("creamBullet", "assets/bullets/cream.png");
    ///////////////////////////////////////////////////////////////////////////
    this.load.image("fondo", "assets/bg_layer4.png");
    this.load.image("piso", "assets/floor/choco.png")
    this.load.spritesheet("player", "assets/dude.png", 32, 48, 9);
  },
  create: function () {
    this.state.start("Menu");
  },
};

Menu = function () {};

Menu.prototype = {
  create: function () {
    this.background = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'fondo');
    this.background.anchor.setTo(0.5)
    this.background.width = 800;
    this.background.height = 600;

    this.title = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 200, "Examen Final");
    this.title.anchor.setTo(0.5);
    this.title.fill = "#000000";
    this.title.fontSize = 20;

    this.play = this.game.add.text( this.game.world.centerX, this.game.world.centerY - 150, "Jugar");
    this.play.anchor.setTo(0.5);
    this.play.fill = "#FFFFFF";
    this.play.inputEnabled = true;
    this.play.events.onInputDown.add(this.goGame, this);

  },
  goGame: function (currentLevel) {
    this.state.start("Selection");
  },
};
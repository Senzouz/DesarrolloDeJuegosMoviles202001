Selection = function () {};

Selection.prototype = {
  create: function () {
    this.background = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'fondo');
    this.background.anchor.setTo(0.5)
    this.background.width = 800;
    this.background.height = 600;

    this.normal = this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY, "Modo normal");
    this.normal.anchor.setTo(0.5);
    this.normal.fill = "#FFFFFF";
    this.normal.inputEnabled = true;
    this.normal.difficulty = 1;
    this.normal.events.onInputDown.add(this.goGame, this);

    this.parao = this.game.add.text( this.game.world.centerX + 150, this.game.world.centerY, "Parao y sin polo");
    this.parao.anchor.setTo(0.5);
    this.parao.fill = "#FFFFFF";
    this.parao.inputEnabled = true;
    this.parao.difficulty = 4;
    this.parao.events.onInputDown.add(this.goGame, this);

  },
  goGame: function (difficulty) {
    this.state.start("Game", true, false, difficulty.difficulty);
  },
};
GameOver = function (game) {};

//prototype: para crear más funcionalidades
GameOver.prototype = {
  create: function () {
    this.background = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'fondo');
    this.background.anchor.setTo(0.5)
    this.background.width = 800;
    this.background.height = 600;

    this.title = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 150, "Game Over");
    this.title.anchor.setTo(0.5);
    this.title.fill = "#FFFFFF";
    this.title = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 150, "Score : "+ localStorage.getItem('score'));
    this.title.anchor.setTo(0.5);
    this.title.fill = "#FFFFFF";
    this.time = 0;
  },
  update:function(){
    
    this.time += this.game.time.elapsed;
    if(this.time >= 3000){
      this.GoToMenu();
    }
  },
  GoToMenu: function () {
    this.state.start("Menu");
  },
};

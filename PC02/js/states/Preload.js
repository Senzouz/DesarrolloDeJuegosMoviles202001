Preload = function(game){}

Preload.prototype = {
	preload:function(){

		this.load.image('gameTitle', 'assets/gametitle.png');
		this.load.image('gameOver', 'assets/gameover.png');
		this.load.image('higher', 'assets/higher.png');
		this.load.image('lower', 'assets/lower.png');
		this.load.image('play', 'assets/play.png');
		this.load.spritesheet('numbers', 'assets/numbers.png', 100, 100,10);
	},
	create:function(){
		this.state.start("Menu");
	}

}
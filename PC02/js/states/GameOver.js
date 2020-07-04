GameOver = function(game){}

GameOver.prototype = {
	create:function(){
	this.title = this.game.add.sprite(0,0,'gameOver');
	this.title.x = this.game.world.centerX;
	this.title.y = this.game.world.centerY;
	this.title.anchor.setTo(0.5);
	this.title.inputEnabled = true;
	this.title.events.onInputDown.add(this.goMenu,this);
	},
	goMenu:function(){
		this.state.start("Menu");
	}
}
Menu = function(game){};

Menu.prototype = {
	create:function(){
		this.title = this.game.add.sprite(0,0,'gameTitle');
		this.title.anchor.setTo(0.5);
		this.title.x = this.game.world.centerX;
		this.title.y = this.game.world.centerY;
		this.gameButt = this.game.add.sprite(0,0,'play');
		this.gameButt.anchor.setTo(0.5);
		this.gameButt.x = this.game.world.centerX;
		this.gameButt.y = this.title.y + 70;
		this.gameButt.inputEnabled = true;
		this.gameButt.events.onInputDown.add(this.goGame,this);
	},
	goGame:function(){
		this.state.start("Game");
	}
}
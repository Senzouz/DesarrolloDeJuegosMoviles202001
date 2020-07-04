Game = function(game){}

Game.prototype = {
	create:function(){
		this.isMoving = false;

		this.high = this.game.add.sprite(0,0,'higher');
		this.high.anchor.setTo(0.5);
		this.high.x = this.game.world.centerX;
		this.high.y = this.game.world.centerY - 200;
		this.high.type = "higher";
		this.high.inputEnabled = true;
		this.high.events.onInputDown.add(this.clickButton,this);

		this.low = this.game.add.sprite(0,0,'lower');
		this.low.anchor.setTo(0.5);
		this.low.x = this.game.world.centerX;
		this.low.y = this.game.world.centerY + 200;
		this.low.type = "lower";
		this.low.inputEnabled = true;
		this.low.events.onInputDown.add(this.clickButton,this);

		this.number = new Number(this.game,this.game.world.centerX,this.game.world.centerY, 5);
		this.score = 20;
		console.log(this.score);
	},

	clickButton:function(sprite){
		
		if(this.isMoving)
			return;
		this.isMoving = true;
		this.numFrame = this.game.rnd.integerInRange(0,9);
		this.new_number = new Number(this.game,this.game.width + this.number.width,this.game.world.centerY, this.numFrame);

		if(sprite.type == 'higher'){
			if(this.new_number.frame < this.number.frame){
				this.score -= 5;
				console.log(this.score);
			} else{
				this.score += 10;
				console.log(this.score);
			}
		} else if(sprite.type == 'lower'){
			if(this.new_number.frame > this.number.frame){
				this.score -= 5;
				console.log(this.score);
			} else{
				this.score += 10;
				console.log(this.score);
			}
		}

		this.tween_current = this.game.add.tween(this.number).to({x:-this.number.width},300);
		this.tween_current.start();
		

		this.tween_new = this.game.add.tween(this.new_number).to({x:this.game.world.centerX},300);
		this.tween_new.onComplete.add(this.onCompleteTween,this);
		this.tween_new.start();
	},
	update:function(){
		if(this.score <= 0){
			this.state.start("GameOver");
		}
	},

	onCompleteTween:function(){
		this.number.destroy();
		this.number = this.new_number;
		this.isMoving = false;
	}
}

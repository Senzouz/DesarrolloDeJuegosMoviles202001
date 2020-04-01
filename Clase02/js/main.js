window.onload = function(){
	//console.log("Nilton te ignoro");

	let current_animal = {},
		 animals = ["sheep","horse","pig","chicken"],
		 new_animal = {},
		 index = 0,
		 isMoving = false,
		 arrow1 = {},
		 arrow2 = {},
		 direction_arrow = "";

	let game =	new Phaser.Game(640,360,Phaser.AUTO,'content',
		{
			preload : preload,
			create:create,
			update:update
		});

	function preload(){
		//console.log("preload")
		game.load.image("background","assets/images/background.png");
		game.load.image("arrow","assets/images/arrow.png");
		game.load.spritesheet("sheep","assets/images/sheep_spritesheet.png",244,200,3);
		game.load.spritesheet("chicken","assets/images/chicken_spritesheet.png",131,200,3);
		game.load.spritesheet("horse","assets/images/horse_spritesheet.png",212,200,3);
		game.load.spritesheet("pig","assets/images/pig_spritesheet.png",297,200,3);

	}

	function create() {
		let bg = game.add.sprite(0,0,'background');
		arrow1 = game.add.sprite(0,0,'arrow');
		arrow1.anchor.setTo(0.5);
		arrow1.y = game.world.centerY;
		arrow1.x = arrow1.width*0.5;
		arrow1.scale.setTo(-1);
		arrow1.direccion = "left";
		arrow1.inputEnabled = true;
		arrow1.events.onInputDown.add(clickArrow);

		arrow2 = game.add.sprite(0,0,'arrow');
		arrow2.anchor.setTo(0.5);
		arrow2.y = game.world.centerY;
		arrow2.x = game.width - (arrow2.width*0.5);
		arrow2.direccion = "right";
		arrow2.inputEnabled = true;
		arrow2.events.onInputDown.add(clickArrow);
		current_animal = game.add.sprite(0,0,animals[index]);
		current_animal.anchor.setTo(0.5);
		current_animal.y = game.world.centerY;
		current_animal.x = game.world.centerX;
		current_animal.animations.add('animacion',[0,1,2,1,0,1],6,true);
		current_animal.animations.play("animacion");

	}

	function clickArrow(sprite){
		if(isMoving){
			return;
		}
		isMoving = true;
		sprite.alpha =  0.5;
		console.log(sprite.direccion)
		direction_arrow = sprite.direccion;
		if(sprite.direccion == "left"){
			index = index == 0 ? animals.length -1 : index -=1;
			new_animal = game.add.sprite(0,game.world.centerY,animals[index]);
			new_animal.anchor.setTo(0.5);
			new_animal.x = game.width + new_animal.width;

			let tween_current = game.add.tween(current_animal).to({x:-current_animal.width},300);
			tween_current.start();

			let tween_new = game.add.tween(new_animal).to({x:game.world.centerX},300);
			tween_new.onComplete.add(onCompleteTween);
			tween_new.start();
			
		} else{
			
			index = index == animals.length -1 ? 0 : index +=1;
			new_animal = game.add.sprite(0,game.world.centerY,animals[index]);
			new_animal.anchor.setTo(0.5);
			new_animal.x = -new_animal.width;
			let tween_current = game.add.tween(current_animal).to({x:game.width+current_animal.width},300);
			tween_current.start();

			let tween_new = game.add.tween(new_animal).to({x:game.world.centerX},300);
			tween_new.onComplete.add(onCompleteTween);
			tween_new.start();

		}
	}

	function onCompleteTween(){
		if(direction_arrow == "left"){
			arrow1.alpha = 1;
		}else{
			arrow2.alpha = 1;
		}
		current_animal.destroy();
		//current_animal.kill();
		new_animal.animations.add('animacion',[0,1,2,1,0,1],6,true);
		new_animal.animations.play("animacion");
		current_animal = new_animal;
		isMoving = false;
	}

	function update(){
	}

}
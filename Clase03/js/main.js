window.onload = function(){

	let game =	new Phaser.Game(360,640,Phaser.AUTO,'content',
		{
			preload : preload,
			create:create
		});

	function preload(){
		game.load.image("backyard","assets/images/backyard.png");
		game.load.image("apple","assets/images/apple.png");
		game.load.image("arrow","assets/images/arrow.png");
		game.load.image("candy","assets/images/candy.png");
		game.load.spritesheet("pet","assets/images/pet.png",98,83,5);
		game.load.image("rotate","assets/images/rotate.png");
		game.load.image("rubber_duck","assets/images/rubber_duck.png");

	}

	function create() {
		let bg = game.add.sprite(0,0,'backyard');

		let manzana = game.add.sprite(0,0,'apple');
		manzana.anchor.setTo(0.5);
		manzana.y = game.height - manzana.height;
		manzana.x = manzana.width*0.5;

		let caramelo = game.add.sprite(0,0,'candy');
		caramelo.anchor.setTo(0.5);
		caramelo.y = game.height - caramelo.height;
		caramelo.x = caramelo.width*0.5 + manzana.width;

		let rotar = game.add.sprite(0,0,'rotate');
		rotar.anchor.setTo(0.5);
		rotar.y = game.height - rotar.height;
		rotar.x = rotar.width*0.5 + manzana.width + caramelo.width;

		let patito = game.add.sprite(0,0,'rubber_duck');
		patito.anchor.setTo(0.5);
		patito.y = game.height - patito.height;
		patito.x = patito.width*0.5 + manzana.width + caramelo.width + rotar.width;

		let mascota = game.add.sprite(0,0,'pet');
		mascota.anchor.setTo(0.5);
		mascota.y = game.world.centerY;
		mascota.x = game.world.centerX;
		
	}

}
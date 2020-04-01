window.onload = function(){
	//console.log("Nilton te ignoro");

	let game = new Phaser.Game(640,360,Phaser.AUTO,'content',
		{
			preload : preload,
			create:create,
			update:update
		});

	function preload(){
		//console.log("preload")
		game.load.image("background","assets/images/background.png")
		game.load.image("arrow","assets/images/arrow.png")
	}

	function create() {
		let bg = game.add.sprite(0,0,'background')
		let ar = game.add.sprite(20,200,'arrow')
		let ar2 = game.add.sprite(500,200,'arrow')
		console.log("create")
	}

	function update(){
		//console.log("update")
	}

}
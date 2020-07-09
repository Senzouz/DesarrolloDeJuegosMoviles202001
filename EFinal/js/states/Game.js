Game = function () {};

Game.prototype = {
  init: function (difficulty) {
    this.hp = parseInt(localStorage.getItem('hp'));
    if(this.hp == null || this.hp <= 0)
      this.hp = 4/difficulty;
    this.numLevels = 5;
    this.currentWave = localStorage.getItem('cWave');
    if(this.currentWave == null)
      this.currentWave = 1
    this.PLAYER_SPEED = 200;
    this.BULLET_SPEED = 200;
    this.GRAVITY = 1500;
    this.ENEMY_SPEED = 200;

    this.shooting_time = 0;
    this.SHOOTING_TIMER = 120;
    this.ENEMY_SPAWNER_TIMER = 8000;
    this.enemy_spawner_time = 0;
    this.enemyTypes = ["redEnemy"];
    this.cantEnemies = 4;
  },
  create: function () {
    if(this.currentWave == 2) { this.ENEMY_SPAWNER_TIMER = 6000; this.enemyTypes = ["redEnemy", "yellowEnemy"]; this.cantEnemies = 8;}
    else if(this.currentWave == 3) { this.ENEMY_SPAWNER_TIMER = 4000; this.enemyTypes = ["redEnemy", "yellowEnemy", "flyEnemy"]; this.cantEnemies = 16;}
    else if(this.currentWave == 4) { this.ENEMY_SPAWNER_TIMER = 3000; this.enemyTypes = ["redEnemy", "yellowEnemy", "flyEnemy", "brownEnemy"]; this.cantEnemies = 32;}
    else if(this.currentWave >= 5) { this.ENEMY_SPAWNER_TIMER = 2000; this.enemyTypes = ["redEnemy", "yellowEnemy", "flyEnemy", "brownEnemy", "creamEnemy"]; this.cantEnemies = 64;}

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.background = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'fondo');
    this.background.anchor.setTo(0.5)
    this.background.width = 800;
    this.background.height = 600;
    this.bKey = "";
    this.shooting = false;

    this.floor = this.game.add.sprite(this.game.world.centerX,this.game.height,'piso');
    this.floor.y -= this.floor.height/2;
    this.floor.anchor.setTo(0.5)
    this.floor.width = this.game.width;
    this.game.physics.arcade.enable(this.floor);
    this.floor.body.immovable = true;
    this.floor.body.allowGravity = false;

    this.player = new Player(this.game, this.hp, this.PLAYER_SPEED);
    this.player.createBullet.add(this.createPlayerBullet, this);
    this.player.body.gravity.y = this.GRAVITY;

    this.initBullets();
    this.initEnemies();

    this.score = parseInt(localStorage.getItem('score'));
    if(this.score == null || this.currentWave < 2)
      this.score = 0;
    this.scoreText = this.game.add.text(this.game.world.width * 0.05, this.game.world.height * 0.05, "Score :" + this.score);
    this.scoreText.fill = "#FFFFFF";

    this.hpText = this.game.add.text(this.game.world.width * 0.9, this.game.world.height * 0.05, "HP :" + this.player.hp);
    this.hpText.fill = "#FFFFFF";
    this.AKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.SKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.DKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.FKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
    this.GKey = this.game.input.keyboard.addKey(Phaser.Keyboard.G);
    this.AKey.onDown.add(this.changeBulletA,this);
    this.SKey.onDown.add(this.changeBulletS,this);
    this.DKey.onDown.add(this.changeBulletD,this);
    this.FKey.onDown.add(this.changeBulletF,this);
    this.GKey.onDown.add(this.changeBulletG,this);
  },
  changeBulletA:function(){
    this.bKey = "brownBullet";
    this.createPlayerBullet(this.player.x,this.player.y);

  },
  changeBulletS:function(){
    this.bKey = "creamBullet";
    this.createPlayerBullet(this.player.x,this.player.y);
  },
  changeBulletD:function(){
    this.bKey = "flyBullet";
    this.createPlayerBullet(this.player.x,this.player.y);
  },
  changeBulletF:function(){
    this.bKey = "redBullet";
    this.createPlayerBullet(this.player.x,this.player.y);
  },
  changeBulletG:function(){
    this.bKey = "yellowBullet";
    this.createPlayerBullet(this.player.x,this.player.y);
  },
  initEnemies: function () {
    this.enemies = this.game.add.group();
    this.enemies.enableBody = true;
  },
  initBullets: function () {
    this.playerBullets = this.game.add.group();
    this.playerBullets.enableBody = true;
  },
  createPlayerBullet: function (x, y) {
    bullet = new PlayerBullet(this.game, x, y,this.bKey);
    this.playerBullets.add(bullet);
    if(this.player.direction == "left") bullet.body.velocity.x = -this.BULLET_SPEED;
      else if(this.player.direction == "right") bullet.body.velocity.x = this.BULLET_SPEED;
    else if(this.player.direction == "up") bullet.body.velocity.y = -this.BULLET_SPEED;
  },
  createEnemy: function (key) {
    enemy = new Enemy(this.game, key);
    this.enemies.add(enemy);
    if(key == "redEnemy" || key == "yellowEnemy" || key == "flyEnemy"){
      if(enemy.x < 0){
        enemy.body.velocity.x = this.ENEMY_SPEED;
      } else if(enemy.x > this.game.width){
        enemy.body.velocity.x = -this.ENEMY_SPEED;
      }
    }
    else if(key == "brownEnemy"){
      enemy.body.velocity.y = -this.ENEMY_SPEED;
    }
    else if(key == "creamEnemy"){
      enemy.body.velocity.y = this.ENEMY_SPEED;
    }


  },
  
  update: function () {
    this.randomizerGamePlusUltra = this.game.rnd.integerInRange(0,this.enemyTypes.length-1);
    this.enemy_spawner_time += this.game.time.elapsed;
    if(this.enemy_spawner_time > this.ENEMY_SPAWNER_TIMER){
      this.enemy_spawner_time = 0;
      this.createEnemy(this.enemyTypes[this.randomizerGamePlusUltra])
    }
    this.game.physics.arcade.collide(this.player,this.floor);
    this.game.physics.arcade.overlap(this.playerBullets,this.enemies,this.damageEnemy,null,this);
    this.game.physics.arcade.overlap(this.player,this.enemies,this.damagePlayer,null,this);
  },
  damageEnemy:function(bullet,enemy){
    bullet.kill();
    if((bullet.key == 'brownBullet' && enemy.key == 'brownEnemy') || (bullet.key == 'redBullet' && enemy.key == 'redEnemy') || (bullet.key == 'yellowBullet' && enemy.key == 'yellowEnemy')
    || (bullet.key == 'flyBullet' && enemy.key == 'flyEnemy') || (bullet.key == 'creamBullet' && enemy.key == 'creamEnemy')){
      if(enemy.key == 'redEnemy') this.score += 10;
      if(enemy.key == 'yellowEnemy') this.score += 15;
      if(enemy.key == 'flyEnemy') this.score += 50;
      if(enemy.key == 'brownEnemy') this.score += 5;
      if(enemy.key == 'creamEnemy') this.score += 20;
      this.scoreText.text = "Score : "+ this.score;
      enemy.kill();
      this.cantEnemies--;
      console.log(this.cantEnemies)
      if(this.cantEnemies <= 0){
        this.currentWave++;
        localStorage.setItem('score',this.score);
        localStorage.setItem('cWave',this.currentWave);
        localStorage.setItem('hp',this.hp);
        this.game.state.start("Game")
      }
    }
  },
  damagePlayer: function (player, enemy) {
    enemy.kill()
    this.player.hp--;
    this.hpText.text = "HP :" + this.player.hp;
    if (this.player.hp == 0) {
      localStorage.setItem('score',this.score);
      this.game.state.start("GameOver");
    }
  },
};
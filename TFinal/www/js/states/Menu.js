Menu = function(){

}

Menu.prototype = {
    create:function(){
        this.background = this.game.add.tileSprite(0,0,
            this.game.world.width,this.game.world.height,"space");
        this.logo = this.game.add.sprite(0,0,'logo');
        this.logo.anchor.setTo(0.5);
    }
}
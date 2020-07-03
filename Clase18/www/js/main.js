window.onload = function(){
    var game = new Phaser.Game("800","650",Phaser.AUTO);
    game.state.add("Menu",Menu);
    game.state.start("Menu");
}
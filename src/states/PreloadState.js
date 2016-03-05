class PreloadState extends Phaser.State{

    preload(){

        this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%', { fill: 'white' });
        this.progress.anchor.setTo(0.5, 0.5);
        
        // Progress bar
        this.progressBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'progressBar');
        this.progressBar.anchor.setTo(0.5, 0.5);

        this.game.load.setPreloadSprite(this.progressBar);
        
        
        // Set callbacks
        this.game.load.onLoadStart.add(this.loadStart, this);
        this.game.load.onFileComplete.add(this.fileComplete, this);
        this.game.load.onLoadComplete.add(this.loadComplete, this);
        
        // Load all assets
        this.game.load.image('starsBg', 'images/game_bg_universe.jpg');
        this.game.load.image('lava', 'images/lava_bg.png');
        this.game.load.image('rockPlatform', 'images/rock_platform.png');
        this.game.load.spritesheet('playerIdle','images/character1/characterMain.png', 128, 107, 38);
        this.game.load.image('playerJump', 'images/character1/jump.png');
        this.game.load.audio('ambientMusic', 'sounds/music.wav');
        this.game.load.audio('jump', 'sounds/jump.wav');

    }
    
    fileComplete(progress){
        this.progress.text = progress + '%';
    }

    loadStart(){

    }

    loadComplete(){
        this.game.state.start('GameState');
    }

}   

export default PreloadState;
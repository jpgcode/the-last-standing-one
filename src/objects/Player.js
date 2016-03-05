class Player extends Phaser.Sprite{

	constructor(game) {
		super(game, 50, 320, 'playerIdle');
		this.enableBody = true;
		game.physics.arcade.enable(this);
        this.animations.add('idle', [0,1,2,3,4,5], 10, true);
        this.animations.add('playerRun', [6,7,8,9,10,11], 10, true);
        this.animations.add('playerJump', [20], 10, false);
        this.animations.play('idle');

        this.body.bounce.y = 0.2;
        this.body.gravity.y = 400;
        this.body.setSize(45, 102);
        this.body.collideWorldBounds = true; 

        this.anchor.setTo(0.3, 0.3);
        game.add.existing(this);
	}

}

export default Player;
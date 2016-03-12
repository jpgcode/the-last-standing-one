'use strict';

import RockPlatformsGroup from '../objects/RockPlatformGroup';
import Player from '../objects/Player';

class GameState extends Phaser.State {

	create() {

        //Globals
		this.cursors       = this.game.input.keyboard.createCursorKeys();
        this.music         = this.game.add.audio('ambientMusic');
        this.jumpSound     = this.game.add.audio('jump');
        this.starsBG       = this.game.add.sprite(0, 0, 'starsBg');
        this.lava          = this.game.add.tileSprite(0, 530, this.game.stage.game.width, 292, 'lava');
        this.rockPlatforms = new RockPlatformsGroup(this.game, 5);
        this.player        = new Player(this.game);

        //Start game physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		//Methods calls
		this.playMusic();
	}

	playMusic() {
		this.music.play();
	}

    collisionCallback(s, platform){
        if (!s.locked) {
            s.locked = true;
            s.lockedTo = platform;
            s.body.velocity.y = 0;
        }
    }

	update() {

		this.lava.tilePosition.x += 0.6;
		this.game.physics.arcade.collide(this.player, this.rockPlatforms, this.collisionCallback, null, this);

        if (this.player.locked) {
            if (this.player.body.right < this.player.lockedTo.body.x || this.player.body.x > this.player.lockedTo.body.right) {
                this.player.locked = false;
                this.player.lockedTo = null;
            } else {
                this.player.x += this.player.lockedTo.deltaX;
                this.player.y += this.player.lockedTo.deltaY;
            }
        }

		const grounded = this.player.body.touching.down;
        if(grounded && !this.cursors.left.isDown && !this.cursors.right.isDown){
            this.player.animations.play('idle');    
        }
        
        if (this.cursors.up.isDown) {
            if(grounded){
                this.player.animations.play('playerJump'); 
                this.player.body.velocity.y = -250;
                this.jumpSound.play();
            }
        }

        if (this.cursors.left.isDown) {
            this.player.scale.x = -1;
            if (grounded){
                this.player.body.velocity.x = -200;
                this.player.animations.play('playerRun');  
            }else{
                this.player.animations.play('playerJump'); 
            }
            this.player.body.velocity.x = -200;
        } else if (this.cursors.right.isDown) {

            this.player.scale.x = 1;
            if (grounded){
                this.player.body.velocity.x = 200;
                this.player.animations.play('playerRun');
            }else{
                this.player.animations.play('playerJump'); 
            }
        } else {
            if (grounded){
                this.player.body.velocity.x = 0;
            }
        }
	}

	

}

export default GameState;

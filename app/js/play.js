var IngameState = function (game) { };

IngameState.prototype = {
    
    preload: function() {
        this.game.load.image('starsBg', 'assets/images/game_bg_universe.jpg');
        this.game.load.image('lava', 'assets/images/lava_bg.png');
        this.game.load.image('rockPlatform', 'assets/images/rock_platform.png');
        this.game.load.spritesheet('playerIdle','assets/images/character1/idle.png', 75.3, 102, 6);
        this.game.load.image('playerJump', 'assets/images/character1/jump.png');
        this.game.load.audio('jump', 'assets/sounds/jump.wav');
    },
    
    create: function() {
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.add.sprite(0, 0, 'starsBg');
        this.lava = this.game.add.tileSprite(0, 530, this.game.stage.game.width, 292, 'lava');
        this.createPlatforms();
        //this.animatePlatforms();
        this.createPlayer();
        this.jumpSound = this.game.add.audio('jump');

    },

    createPlayer: function(){
        this.player = this.game.add.sprite(50, 420, 'playerIdle');
        this.player.animations.add('idle', [0,1,2,3,4,5], 20, true);
        this.player.animations.play('idle');
        // Enable physics
        this.game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 400;
        this.player.body.bounce.y = 0.2;
        this.player.body.collideWorldBounds = true; 
        this.player.anchor.setTo(0.5, 1);
        //this.player.body.setSize(187, 50, 0, 20);
    },

    createPlatforms: function(){

        this.platforms = this.game.add.group();
        this.platforms.enableBody = true;

        var startingCords = {
            0: { top: 430, left: -30 }, 
            1: { top: 380, left: 235 }, 
            2: { top: 340, left: 520 },
            3: { top: 390, left: 800 }, 
            4: { top: 380, left: 1100 }
        }

        for (var i = 0; i < 5; i++) {
            var platform = this.platforms.create(startingCords[i].left, startingCords[i].top, 'rockPlatform');
            platform.body.immovable = true;
        }

    },

    animatePlatforms: function(){

        var platforms = this.platforms;        

        var goDown = function(){
            var tween = this.game.add.tween(platforms).to({ y: platforms.position.y + 100 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0);
            tween.onComplete.add(goUp, this);
        }

        var goUp = function(){
            var tween2 = this.game.add.tween(platforms).to({ y: platforms.position.y - 100 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0);
            tween2.onComplete.add(goDown, this); 
        }

        goDown();
        
    },
    
    update: function() {
        this.lava.tilePosition.x += 0.2;
        this.game.physics.arcade.collide(this.player, this.platforms);
        var grounded = this.player.body.touching.down;
        if(grounded){
            this.player.loadTexture('playerIdle', 0);
            this.player.animations.play('idle');    
        }
        
        if (this.cursors.up.isDown) {
            if(grounded){
                this.player.loadTexture('playerJump', 0);
                this.player.body.velocity.y = -250;
                this.jumpSound.play();
            }
        }

        if (this.cursors.left.isDown) {
            this.player.scale.x = -1;
            if (grounded){
                this.player.body.velocity.x = -150;
            }
            this.player.body.velocity.x = -150;
        } else if (this.cursors.right.isDown) {
            this.player.scale.x = 1;
            if (grounded){
                this.player.body.velocity.x = 150;
            }
        } else {
            if (grounded){
                this.player.body.velocity.x = 0;
            }
        }

    }
};
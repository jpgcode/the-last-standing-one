var IngameState = function (game) { };

IngameState.prototype = {
    
    preload: function() {
        this.game.load.image('starsBg', 'assets/images/game_bg_universe.jpg');
        this.game.load.image('lava', 'assets/images/lava_bg.png');
        this.game.load.image('rockPlatform', 'assets/images/rock_platform.png');
        this.game.load.spritesheet('playerIdle','assets/images/character1/characterMain.png', 128, 107, 38);
        this.game.load.image('playerJump', 'assets/images/character1/jump.png');
        this.game.load.audio('jump', 'assets/sounds/jump.wav');
    },
    
    create: function() {
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.add.sprite(0, 0, 'starsBg');
        this.lava = this.game.add.tileSprite(0, 530, this.game.stage.game.width, 292, 'lava');
        this.createPlatforms();
        this.animatePlatforms();
        this.createPlayer();
        this.jumpSound = this.game.add.audio('jump');

    },

    createPlayer: function(){
        
        this.player = this.game.add.sprite(50, 340, 'playerIdle');

        this.game.physics.arcade.enable(this.player);

        this.player.animations.add('idle', [0,1,2,3,4,5], 10, true);
        this.player.animations.add('playerRun', [6,7,8,9,10,11], 10, true);
        this.player.animations.add('playerJump', [20], 10, false);
        this.player.animations.play('idle');

        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 400;
        this.player.body.setSize(45, 102);
        this.player.body.collideWorldBounds = true; 

        this.player.anchor.setTo(0.3, 0.3);
        
    },

    createPlatforms: function(){

        this.platforms = this.game.add.group();
        this.platforms.enableBody = true;

        var startingCords = {
            0: { top: 430, left: 80 }, 
            1: { top: 380, left: 335 }, 
            2: { top: 340, left: 520 },
            3: { top: 380, left: 800 }, 
            4: { top: 380, left: 1100 }
        }

        for (var i = 0; i < 5; i++) {
            var platform = this.platforms.create(startingCords[i].left, startingCords[i].top, 'rockPlatform');
            platform.body.immovable = true;
            platform.body.setSize(177, 64, 0, 20);
            if(i === 0 || i === 1){
                platform.anchor.setTo(0.5, 0);
                platform.scale.x = -1;
            }
        }

    },

    animatePlatforms: function(){

        var platforms = this.platforms;  
        
        this.platforms.forEach(function(callback){

            var goDown = function(){
                var tween = this.game.add.tween(platforms).to({ y: platforms.position.y + 100 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0);
                tween.onComplete.add(goUp, this);
            }

            var goUp = function(){
                var tween2 = this.game.add.tween(platforms).to({ y: platforms.position.y - 100 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0);
                tween2.onComplete.add(goDown, this); 
            }

            
            //var timer = game.time.events.add(Phaser.Timer.SECOND * index+1, goDown, this);

        });

        
        
        
        
    },
    
    update: function() {
        this.lava.tilePosition.x += 0.6;
        this.game.physics.arcade.collide(this.player, this.platforms);
        var grounded = this.player.body.touching.down;
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
};
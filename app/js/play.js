var IngameState = function (game) { };

IngameState.prototype = {
    
    preload: function() {
        this.game.load.image('starsBg', 'assets/images/game_bg_universe.jpg');
        this.game.load.image('lava', 'assets/images/lava_bg.png');
        this.game.load.image('rockPlatform', 'assets/images/rock_platform.png');
    },
    
    create: function() {
        this.game.add.sprite(0, 0, 'starsBg');
        this.lava = this.game.add.tileSprite(0, 530, this.game.stage.game.width, 292, 'lava');
        this.createPlatforms();
        this.animatePlatforms();
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
        }

    },

    animatePlatforms: function(){
        this.platforms.forEach(function(platform){

            var goDown = function(){
                var tween = this.game.add.tween(platform).to({ y: platform.position.y + 100 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0);
                tween.onComplete.add(goUp, this);
            }

            var goUp = function(){
                var tween2 = this.game.add.tween(platform).to({ y: platform.position.y - 100 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0);
                tween2.onComplete.add(goDown, this); 
            }

            goDown();
        });
    },
    
    update: function() {
        this.lava.tilePosition.x += 0.2;
    }
};
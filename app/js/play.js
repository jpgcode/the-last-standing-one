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
    },

    createPlatforms: function(){

        this.platforms = this.game.add.group();
        this.platforms.enableBody = true;

        for (var i = 0; i < 5; i++) {

            var top, left;

            switch(i){
                case 0: 
                    top = 430;
                    left = -30;
                    break;
                case 1:
                    top = 380;
                    left = 235;
                    break;
                case 2:
                    top = 340;
                    left = 520;
                    break;
                case 3:
                    top = 390;
                    left = 800;
                    break;
                case 4:
                    top = 380;
                    left = 1100;
                    break;
            }

            var platform = this.platforms.create(left, top, 'rockPlatform');
            var tween = this.game.add.tween(platform).to({ y: platform.position.y + 50 }, 1000, 'Linear', true, 0);
            tween.onComplete.add(function(){
                this.game.add.tween(platform).to({ y: platform.position.y - 50 }, 1000, 'Linear', true, 0);
            }, this);
        }

    },
    
    update: function() {
        this.lava.tilePosition.x += 0.2;
    }
};
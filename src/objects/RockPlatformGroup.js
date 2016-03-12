class RockPlatformGroup extends Phaser.Group{

	constructor(game, items) {
		super(game);
		this.items = items;
		this.enableBody = true;
        this.rocks = [];
		this.createPlatforms();
	}

	createPlatforms() {
		
		const startingCords = {
            0: { top: 430, left: 80 }, 
            1: { top: 380, left: 335 }, 
            2: { top: 430, left: 520 },
            3: { top: 380, left: 800 }, 
            4: { top: 430, left: 1100 }
        }

        for (let i = 0; i < this.items; i++) {

            const platform = this.create(startingCords[i].left, startingCords[i].top, 'rockPlatform');
            	  platform.body.immovable = true;
                  platform.body.allowGravity = false;
                  platform.body.setSize(187, 84, 0, 30);

            if(i === 0 || i === 1){
                platform.anchor.setTo(0.5, 0);
                platform.scale.x = -1;
            }
            this.rocks.push(platform);
        }
        this.animatePlatforms();
	}

    animatePlatforms() {

        const animTime = 1500;
        const easing   = Phaser.Easing.Quadratic.InOut;

        const animDirection = (tween, direction) => {
            //tween.to(properties, duration, ease, autoStart, delay, repeat, yoyo)
            tween.to({ y: direction }, animTime, easing, true, 0, -1, true);
        }

        this.rocks.forEach((item, i) => {

            let direction = (i % 2 == 0)? item.position.y - 75 : item.position.y + 75;
            const tween = this.game.add.tween(item.position);

            animDirection(tween, direction);
            
        });

    }

}

export default RockPlatformGroup;
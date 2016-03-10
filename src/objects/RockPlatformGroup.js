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
                  platform.body.setSize(177, 64, 0, 20);

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

        const goDown = (item) => {
            const downTween = this.game.add.tween(item).to({ y: item.position.y + 75 }, animTime, easing, true, 0);
            downTween.onComplete.add(goUp, this);
        }

        const goUp = (item) => {
            const upTween = this.game.add.tween(item).to({ y: item.position.y - 75 }, animTime, easing, true, 0);
            upTween.onComplete.add(goDown, this); 
        }

        this.rocks.forEach((item, i) => {
            (i % 2 == 0)? goUp(item): goDown(item);
        });

    }

}

export default RockPlatformGroup;
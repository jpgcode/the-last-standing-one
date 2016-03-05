class RockPlatformGroup extends Phaser.Group{

	constructor(game, items) {
		super(game);
		this.items = items;
		this.enableBody = true;
		this.createPlatforms();
	}

	createPlatforms() {
		
		const startingCords = {
            0: { top: 430, left: 80 }, 
            1: { top: 380, left: 335 }, 
            2: { top: 340, left: 520 },
            3: { top: 380, left: 800 }, 
            4: { top: 380, left: 1100 }
        }

        for (let i = 0; i < this.items; i++) {

            const platform = this.create(startingCords[i].left, startingCords[i].top, 'rockPlatform');
            	  platform.body.immovable = true;
                  platform.body.setSize(177, 64, 0, 20);

            if(i === 0 || i === 1){
                platform.anchor.setTo(0.5, 0);
                platform.scale.x = -1;
            }

        }
	}

}

export default RockPlatformGroup;
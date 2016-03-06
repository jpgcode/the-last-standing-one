'use strict';

class IntroState extends Phaser.State{

	create(){

		this.starsBG = this.game.add.sprite(0, 0, 'starsBg');
		this.lava    = this.game.add.tileSprite(0, 530, this.game.stage.game.width, 292, 'lava');
		this.introBg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'introBg');
		this.playBtn = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 190, 'playBtn', this.test);

		this.introText = this.game.add.text(
			this.game.world.centerX, 
			this.game.world.centerY, 
			'Fight for honor against fiery opponents', 
			{ font: 'Helvetica', fontSize: '20px', fill: '#fff' }
		);

		this.introText2 = this.game.add.text(
			this.game.world.centerX, 
			this.game.world.centerY + 30, 
			'Get power gems and objects to improve your skills', 
			{ font: 'Helvetica', fontSize: '20px', fill: '#fff' }
		);

		this.introText3 = this.game.add.text(
			this.game.world.centerX, 
			this.game.world.centerY + 60,
			'The last player standing will reach the glory!',
			{ font: 'Helvetica', fontSize: '20px', fill: '#fff' }
		);

		var anchorElements = [
			this.introBg,
			this.introText,
			this.introText2,
			this.introText3,
			this.playBtn
		];

		anchorElements.forEach(function(el){
			el.anchor.setTo(0.5, 0.5);
		});
	}

	update(){
		this.lava.tilePosition.x += 0.6;
	}

	test(){
		this.game.state.start('GameState');
	}
}	

export default IntroState;
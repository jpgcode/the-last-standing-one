import GameState from './states/GameState';
import BootState from './states/BootState';
import PreloadState from './states/PreloadState';

class Game extends Phaser.Game {

	constructor() {
		super(1280, 720, Phaser.AUTO, 'content', null);
		this.state.add('BootState', BootState, false);
		this.state.add('GameState', GameState, false);
		this.state.add('PreloadState', PreloadState, false);
		this.state.start('BootState');
	}

}

new Game();

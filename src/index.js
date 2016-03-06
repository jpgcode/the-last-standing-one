'use strict';

import BootState from './states/BootState';
import PreloadState from './states/PreloadState';
import IntroState from './states/IntroState';
import GameState from './states/GameState';


class Game extends Phaser.Game {

	constructor() {
		super(1280, 720, Phaser.AUTO, 'content', null);
		this.state.add('BootState', BootState, false);
		this.state.add('IntroState', IntroState, false);
		this.state.add('PreloadState', PreloadState, false);
		this.state.add('GameState', GameState, false);
		this.state.start('BootState');
	}

}

new Game();

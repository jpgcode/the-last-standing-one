(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBootState = require('./states/BootState');

var _statesBootState2 = _interopRequireDefault(_statesBootState);

var _statesPreloadState = require('./states/PreloadState');

var _statesPreloadState2 = _interopRequireDefault(_statesPreloadState);

var _statesIntroState = require('./states/IntroState');

var _statesIntroState2 = _interopRequireDefault(_statesIntroState);

var _statesGameState = require('./states/GameState');

var _statesGameState2 = _interopRequireDefault(_statesGameState);

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 1280, 720, Phaser.AUTO, 'content', null);
		this.state.add('BootState', _statesBootState2['default'], false);
		this.state.add('IntroState', _statesIntroState2['default'], false);
		this.state.add('PreloadState', _statesPreloadState2['default'], false);
		this.state.add('GameState', _statesGameState2['default'], false);
		this.state.start('BootState');
	}

	return Game;
})(Phaser.Game);

new Game();

},{"./states/BootState":4,"./states/GameState":5,"./states/IntroState":6,"./states/PreloadState":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = (function (_Phaser$Sprite) {
  _inherits(Player, _Phaser$Sprite);

  function Player(game) {
    _classCallCheck(this, Player);

    _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, game, 50, 320, 'playerIdle');
    this.enableBody = true;
    game.physics.arcade.enable(this);
    this.animations.add('idle', [0, 1, 2, 3, 4, 5], 10, true);
    this.animations.add('playerRun', [6, 7, 8, 9, 10, 11], 10, true);
    this.animations.add('playerJump', [20], 10, false);
    this.animations.play('idle');

    this.body.bounce.y = 0.2;
    this.body.gravity.y = 400;
    this.body.setSize(45, 102);
    this.body.collideWorldBounds = true;

    this.anchor.setTo(0.3, 0.3);
    game.add.existing(this);
  }

  return Player;
})(Phaser.Sprite);

exports['default'] = Player;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RockPlatformGroup = (function (_Phaser$Group) {
  _inherits(RockPlatformGroup, _Phaser$Group);

  function RockPlatformGroup(game, items) {
    _classCallCheck(this, RockPlatformGroup);

    _get(Object.getPrototypeOf(RockPlatformGroup.prototype), 'constructor', this).call(this, game);
    this.items = items;
    this.enableBody = true;
    this.createPlatforms();
  }

  _createClass(RockPlatformGroup, [{
    key: 'createPlatforms',
    value: function createPlatforms() {

      var startingCords = {
        0: { top: 430, left: 80 },
        1: { top: 380, left: 335 },
        2: { top: 340, left: 520 },
        3: { top: 380, left: 800 },
        4: { top: 380, left: 1100 }
      };

      for (var i = 0; i < this.items; i++) {

        var platform = this.create(startingCords[i].left, startingCords[i].top, 'rockPlatform');
        platform.body.immovable = true;
        platform.body.setSize(177, 64, 0, 20);

        if (i === 0 || i === 1) {
          platform.anchor.setTo(0.5, 0);
          platform.scale.x = -1;
        }
      }
    }
  }]);

  return RockPlatformGroup;
})(Phaser.Group);

exports['default'] = RockPlatformGroup;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootState = (function (_Phaser$State) {
	_inherits(BootState, _Phaser$State);

	function BootState() {
		_classCallCheck(this, BootState);

		_get(Object.getPrototypeOf(BootState.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(BootState, [{
		key: 'preload',
		value: function preload() {
			this.game.load.image('progressBar', 'images/progress_bar.png');
		}
	}, {
		key: 'create',
		value: function create() {
			this.game.state.start('PreloadState');
		}
	}]);

	return BootState;
})(Phaser.State);

exports['default'] = BootState;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsRockPlatformGroup = require('../objects/RockPlatformGroup');

var _objectsRockPlatformGroup2 = _interopRequireDefault(_objectsRockPlatformGroup);

var _objectsPlayer = require('../objects/Player');

var _objectsPlayer2 = _interopRequireDefault(_objectsPlayer);

var GameState = (function (_Phaser$State) {
    _inherits(GameState, _Phaser$State);

    function GameState() {
        _classCallCheck(this, GameState);

        _get(Object.getPrototypeOf(GameState.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(GameState, [{
        key: 'create',
        value: function create() {

            //Globals
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.music = this.game.add.audio('ambientMusic');
            this.jumpSound = this.game.add.audio('jump');
            this.starsBG = this.game.add.sprite(0, 0, 'starsBg');
            this.lava = this.game.add.tileSprite(0, 530, this.game.stage.game.width, 292, 'lava');
            this.rockPlatforms = new _objectsRockPlatformGroup2['default'](this.game, 5);
            this.player = new _objectsPlayer2['default'](this.game);

            //Start game physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            //Methods calls
            this.playMusic();
            this.animatePlatforms();
        }
    }, {
        key: 'playMusic',
        value: function playMusic() {
            this.music.play();
        }
    }, {
        key: 'animatePlatforms',
        value: function animatePlatforms() {
            var that = this;

            var goDown = function goDown() {
                var tween = that.game.add.tween(that.rockPlatforms).to({ y: that.rockPlatforms.position.y + 100 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0);
                tween.onComplete.add(goUp, that);
            };

            var goUp = function goUp() {
                var tween2 = that.game.add.tween(that.rockPlatforms).to({ y: that.rockPlatforms.position.y - 100 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0);
                tween2.onComplete.add(goDown, that);
            };

            goDown();
        }
    }, {
        key: 'update',
        value: function update() {

            this.lava.tilePosition.x += 0.6;
            this.game.physics.arcade.collide(this.player, this.rockPlatforms);

            var grounded = this.player.body.touching.down;
            if (grounded && !this.cursors.left.isDown && !this.cursors.right.isDown) {
                this.player.animations.play('idle');
            }

            if (this.cursors.up.isDown) {
                if (grounded) {
                    this.player.animations.play('playerJump');
                    this.player.body.velocity.y = -250;
                    this.jumpSound.play();
                }
            }

            if (this.cursors.left.isDown) {
                this.player.scale.x = -1;
                if (grounded) {
                    this.player.body.velocity.x = -200;
                    this.player.animations.play('playerRun');
                } else {
                    this.player.animations.play('playerJump');
                }
                this.player.body.velocity.x = -200;
            } else if (this.cursors.right.isDown) {

                this.player.scale.x = 1;
                if (grounded) {
                    this.player.body.velocity.x = 200;
                    this.player.animations.play('playerRun');
                } else {
                    this.player.animations.play('playerJump');
                }
            } else {
                if (grounded) {
                    this.player.body.velocity.x = 0;
                }
            }
        }
    }]);

    return GameState;
})(Phaser.State);

exports['default'] = GameState;
module.exports = exports['default'];

},{"../objects/Player":2,"../objects/RockPlatformGroup":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntroState = (function (_Phaser$State) {
	_inherits(IntroState, _Phaser$State);

	function IntroState() {
		_classCallCheck(this, IntroState);

		_get(Object.getPrototypeOf(IntroState.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(IntroState, [{
		key: 'create',
		value: function create() {
			var _this = this;

			this.starsBG = this.game.add.sprite(0, 0, 'starsBg');
			this.lava = this.game.add.tileSprite(0, 530, this.game.stage.game.width, 292, 'lava');
			this.introBg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'introBg');
			this.playBtn = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 190, 'playBtn', this.test);

			this.introText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Fight for honor against fiery opponents', { font: 'Helvetica', fontSize: '20px', fill: '#fff' });

			this.introText2 = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 30, 'Get power gems and objects to improve your skills', { font: 'Helvetica', fontSize: '20px', fill: '#fff' });

			this.introText3 = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 60, 'The last player standing will reach the glory!', { font: 'Helvetica', fontSize: '20px', fill: '#fff' });

			this.elemsGroup = this.game.add.group();

			var anchorElements = [this.introBg, this.introText, this.introText2, this.introText3, this.playBtn];

			anchorElements.forEach(function (el) {
				_this.elemsGroup.add(el);
			});

			this.elemsGroup.setAll('anchor.x', 0.5);
			this.elemsGroup.setAll('anchor.y', 0.5);
		}
	}, {
		key: 'update',
		value: function update() {
			this.lava.tilePosition.x += 0.6;
		}
	}, {
		key: 'test',
		value: function test() {
			this.game.state.start('GameState');
		}
	}]);

	return IntroState;
})(Phaser.State);

exports['default'] = IntroState;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreloadState = (function (_Phaser$State) {
    _inherits(PreloadState, _Phaser$State);

    function PreloadState() {
        _classCallCheck(this, PreloadState);

        _get(Object.getPrototypeOf(PreloadState.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PreloadState, [{
        key: 'preload',
        value: function preload() {

            this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%', { fill: 'white' });
            this.progress.anchor.setTo(0.5, 0.5);

            // Progress bar
            this.progressBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'progressBar');
            this.progressBar.anchor.setTo(0.5, 0.5);

            this.game.load.setPreloadSprite(this.progressBar);

            // Set callbacks
            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);

            // Load all assets
            this.game.load.image('introBg', 'images/introBg.png');
            this.game.load.image('playBtn', 'images/playBtn.png');
            this.game.load.image('starsBg', 'images/game_bg_universe.jpg');
            this.game.load.image('lava', 'images/lava_bg.png');
            this.game.load.image('rockPlatform', 'images/rock_platform.png');
            this.game.load.image('playerJump', 'images/character1/jump.png');

            this.game.load.audio('jump', 'sounds/jump.wav');
            this.game.load.audio('ambientMusic', 'sounds/music.wav');

            this.game.load.spritesheet('playerIdle', 'images/character1/characterMain.png', 128, 107, 38);
        }
    }, {
        key: 'fileComplete',
        value: function fileComplete(progress) {
            this.progress.text = progress + '%';
        }
    }, {
        key: 'loadStart',
        value: function loadStart() {}
    }, {
        key: 'loadComplete',
        value: function loadComplete() {
            this.game.state.start('IntroState');
        }
    }]);

    return PreloadState;
})(Phaser.State);

exports['default'] = PreloadState;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=game.js.map

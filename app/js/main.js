var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

//global variables go below
game.global = {
    mute: false,
    score: 0,
    music: false
};

// game.state.add('boot', bootState);
// game.state.add('load', loadState);
// game.state.add('play', playState);
// game.state.start('boot');
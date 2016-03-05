class BootState extends Phaser.State{
	preload(){
		this.game.load.image('progressBar', 'images/progress_bar.png');   
	}
	create(){
		this.game.state.start('PreloadState');
	}
}	

export default BootState;
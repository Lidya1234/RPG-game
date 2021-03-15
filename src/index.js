
import Phaser from 'phaser';
import './main.scss';
import config from './config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';

import CreditsScene from './scenes/CreditsScene';
import LeaderBoardScene from './scenes/LeaderBoardScene';


/* eslint-enable import/no-unresolved */
class Game extends Phaser.Game {
  constructor() {
    super(config);

    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);

    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Board', LeaderBoardScene);

    this.scene.start('Boot');
  }
}


window.game = new Game();


/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';
import './main.scss';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';

import CreditsScene from './Scenes/CreditsScene';
import LeaderBoardScene from './Scenes/LeaderBoardScene';


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

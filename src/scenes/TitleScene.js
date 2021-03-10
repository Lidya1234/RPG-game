
import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

1;

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.load.image('tileset1', 'assets/tiles/map.png');
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('tiles', 'assets/tiles/tiles.png');
    this.load.tilemapTiledJSON('map', 'assets/tiles/map.JSON');
    this.load.spritesheet('hero', 'assets/spritesheets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('hero2', 'assets/spritesheets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('enemy', 'assets/spritesheets/power-up.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('explode', 'assets/spritesheets/explosion.png', { frameWidth: 16, frameHeight: 16 });
    // this.load.spritesheet('projectiles', 'assets/spritesheets/beam.png', { frameWidth: 16, frameHeight: 16 })
  }

  create() {
    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
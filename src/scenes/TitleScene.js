
import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';


export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.load.image('tileset1', 'src/assets/tiles/map.png');
    this.load.image('logo', 'src/assets/images/logo.png');
    this.load.image('tiles', 'src/assets/tiles/tiles.png');
    this.load.tilemapTiledJSON('map', 'src/assets/tiles/map.JSON');
    this.load.spritesheet('hero', 'src/assets/spritesheets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('hero2', 'src/assets/spritesheets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('enemy', 'src/assets/spritesheets/power-up.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('explode', 'src/assets/spritesheets/explosion.png', { frameWidth: 16, frameHeight: 16 });
  }

  create() {
    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');
  }
}
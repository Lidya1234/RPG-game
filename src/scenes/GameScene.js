
import 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('tileset1', 'assets/tiles/map.png')
		this.load.tilemapTiledJSON('map', 'assets/tiles/map.JSON')
  }
 
  create () {

    const mapee = this.make.tilemap({ key: 'map' })
    //const tileset = map.tilesets[0]

		const tileset = mapee.addTilesetImage('tilesets', 'tileset1', 16, 16, 1, 2)
    //let tileset = map.addTilesetImage('')
    console.log({mapee,tileset})
		mapee.createLayer('Ground', tileset)
    this.add.image(400, 300, 'logo');
    const wallsLayer = mapee.createLayer('wall', tileset)

		wallsLayer.setCollisionByProperty({ collides: true })
  }
};
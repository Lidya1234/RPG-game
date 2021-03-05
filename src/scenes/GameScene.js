
import 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
 
    this.cursors  =this.input.keyboard.createCursorKeys()
  }
 
  create () {

    const map = this.make.tilemap({ key: 'map' })
    

		const tileset = map.addTilesetImage('tileset1', 'tiles')
    
		 map.createLayer('Ground', tileset)
   
 
    const wallsLayer = map.createLayer('wall', tileset)

		wallsLayer.setCollisionByProperty({ collides: true })
    

        // this.physics.wallsLayer.bounds.width = map.widthInPixels;
        // this.physics.wallsLayer.bounds.height = map.heightInPixels;
        // this.hero.setCollideWorldBounds(true);

        // this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // this.cameras.main.startFollow(this.hero);
        // this.cameras.main.roundPixels = true;
       

    const debugGraphics = this.add.graphics().setAlpha(0.75);
wallsLayer.renderDebug(debugGraphics, {
  tileColor: null, 
  collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), 
  faceColor: new Phaser.Display.Color(40, 39, 37, 255) 
});




   // animation with key 'left', we don't need left and right as we will use one and flip the sprite
   this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 2}),
    frameRate: 10,
    repeat: -1
});

// animations
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('hero', {  start: 4, end: 6} ),
    frameRate: 10,
    repeat: -1
});
this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('hero', {  start: 7, end: 9}),
    frameRate: 10,
    repeat: -1
});
this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('hero', {  start: 10, end: 12}),
    frameRate: 10,
    repeat: -1
});   

this.hero = this.physics.add.sprite(50, 100, 'hero', 0);
  }

update()
{
//    this.controls.update(delta);

    this.hero.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown)
    {
        this.hero.body.setVelocityX(-80);
    }
    else if (this.cursors.right.isDown)
    {
        this.hero.body.setVelocityX(80);
    }

    // Vertical movement
    if (this.cursors.up.isDown)
    {
        this.hero.body.setVelocityY(-80);
    }
    else if (this.cursors.down.isDown)
    {
        this.hero.body.setVelocityY(80);
    }        

    // Update the animation last and give left/right animations precedence over up/down animations
    if (this.cursors.left.isDown)
    {
        this.hero.anims.play('left', true);
        this.hero.flipX = true;
    }
    else if (this.cursors.right.isDown)
    {
        this.hero.anims.play('right', true);
        this.hero.flipX = false;
    }
    else if (this.cursors.up.isDown)
    {
        this.hero.anims.play('up', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.hero.anims.play('down', true);
    }
    else
    {
        this.hero.anims.stop();
    }
}

  
};
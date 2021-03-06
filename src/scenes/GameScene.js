
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
        this.hero = this.physics.add.sprite(50, 100, 'hero', 0);
        this.hero.setInteractive();
this.physics.add.collider(this.hero, wallsLayer);
this.cameras.main.startFollow(this.hero,true)
this.enemy = this.physics.add.sprite(256, 160, 'enemy', 0);
this.physics.add.collider(this.enemy, wallsLayer);

this.anims.create({
    key: "red",
    frames: this.anims.generateFrameNumbers("enemy",{
        start:0,
        end: 1
    }),
    frameRate:20,
    repeat: -1,
   
});
this.anims.create({
    key: "gray",
    frames: this.anims.generateFrameNumbers("enemy",{
        start:2,
        end: 3
    }),
    frameRate:20,
    repeat: -1,
    
});


this.enemies = this.physics.add.group();
let maxObjects =4;
for(let i=0; i<= maxObjects; i++)
{
    let enemy =this.physics.add.sprite(16,16 ,"enemy");
    this.physics.add.collider(enemy, wallsLayer);
    this.enemies.add(enemy);
    enemy.setRandomPosition(0,0, 256, 256);
    if(Math.random() > 0.5)
    {
        enemy.play("red");
    }
    else {
        enemy.play("gray");
    }

    enemy.setVelocity(100,100)
    enemy.setCollideWorldBounds(true);
    enemy.setBounce(1)
}


 
// this.ship1.play("ship1_anim")
// this.enemy = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
// for(var i = 0; i < 30; i++) {
//     var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
//     var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
//     // parameters are x, y, width, height
//     this.enemy.create(x, y, 20, 20);            
// }        
// this.physics.add.overlap(this.hero, this.enemy, this.onMeetEnemy, false, this);     

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

this.anims.create({
    key: "explode",
    frames: this.anims.generateFrameNumbers("explosion"),
    frameRate:20,
    repeat: 0,
    hideOnComplete: true
});

this.input.on('gameobjectdown' ,this.destroyShip ,this)

this.physics.add.overlap(this.hero, this.enemy, this.onMeetEnemy, false, this); 
  }

  destroyShip(pointer, gameObject)
{
    gameObject.setTexture ("explosion");
    gameObject.play("explode");
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
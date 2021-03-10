
import 'phaser';
import config from '../Config/config';

let herotrigger = false;
let hero2trigger = false;
var herocollider;
var hero2collider;


let score1 = 0;
let score2 = 0;
let Player1Score;
let Player2Score;


export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images

    this.cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.counter = 0;
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });


    const tileset = map.addTilesetImage('tileset1', 'tiles');

		 map.createLayer('Ground', tileset);


    const wallsLayer = map.createLayer('wall', tileset);

    wallsLayer.setCollisionByProperty({ collides: true });
    this.hero = this.physics.add.sprite(50, 100, 'hero', 3);
    this.hero.setInteractive();
    this.physics.add.collider(this.hero, wallsLayer);

    this.hero2 = this.physics.add.sprite(150, 120, 'hero2', 0);
    this.hero2.setInteractive();
    this.physics.add.collider(this.hero2, wallsLayer);

    this.enemy = this.physics.add.sprite(config.width, config.height, 'enemy', 0);
    this.physics.add.collider(this.enemy, wallsLayer);

    Player1Score = this.add.text(48, 32, 'Player_one: 0', { fontSize: '32px', fill: '#000' });
    Player2Score = this.add.text(48, 64, 'Player_two: 0', { fontSize: '32px', fill: '#000' });

    this.anims.create({
      key: 'red',
      frames: this.anims.generateFrameNumbers('enemy', {
        start: 0,
        end: 1,
      }),
      frameRate: 0,
      repeat: -1,

    });
    this.anims.create({
      key: 'gray',
      frames: this.anims.generateFrameNumbers('enemy', {
        start: 2,
        end: 3,
      }),
      frameRate: 0,
      repeat: -1,

    });


    this.enemies = this.physics.add.group();
    const maxObjects = 20;
    for (let i = 0; i <= maxObjects; i++) {
      const enemy = this.physics.add.sprite(16, 16, 'enemy');
      this.physics.add.collider(enemy, wallsLayer);
      this.enemies.add(enemy);
      enemy.setRandomPosition(0, 0, 400, 400);
      if (Math.random() > 0.5) {
        enemy.play('red');
      } else {
        enemy.play('gray');
      }

      enemy.setVelocity(100, 100);
      enemy.setCollideWorldBounds(true);
      enemy.setBounce(1);
    }


    const debugGraphics = this.add.graphics().setAlpha(0.75);
    wallsLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    });


    // animation with key 'left', we don't need left and right as we will use one and flip the sprite
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { frames: [4, 10, 4, 16] }),
      frameRate: 10,
      repeat: -1,
    });

    // animations
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { frames: [4, 10, 4, 16] }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('hero', { frames: [5, 11, 5, 17] }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('hero', { frames: [3, 9, 3, 15] }),
      frameRate: 20,
      repeat: -1,
    });


    // hero2

    // animation with key 'left', we don't need left and right as we will use one and flip the sprite
    this.anims.create({
      key: 'right2',
      frames: this.anims.generateFrameNumbers('hero2', { frames: [1, 7, 1, 13] }),
      frameRate: 10,
      repeat: -1,
    });

    // animations for hero2
    this.anims.create({
      key: 'left2',
      frames: this.anims.generateFrameNumbers('hero2', { frames: [1, 7, 1, 13] }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'up2',
      frames: this.anims.generateFrameNumbers('hero2', { frames: [2, 8, 2, 14] }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'down2',
      frames: this.anims.generateFrameNumbers('hero2', { frames: [0, 6, 0, 12] }),
      frameRate: 20,
      repeat: -1,
    });
  }

  // remove(trigger, collider,hero)
  // { if(trigger)
  //     {
  //     this.physics.removeCollider(collider);
  //      this.physics.add.collider(hero,this.enemies)

  //     }
  // }


  onMeetEnemy(hero, enemy) {
    enemy.disableBody(true, true);
    if (hero === this.hero) {
      score1 += 10;
      Player1Score.setText(`Player1: ${score1}`);
    } else {
      score2 += 10;
      Player2Score.setText(`Player2: ${score2}`);
    }
  }


  update() {
    //    this.controls.update(delta);
    this.hero.body.setVelocity(0);
    this.hero2.body.setVelocity(0);
    if (this.counter === 0) {
      this.cameras.main.startFollow(this.hero, true);
      // this.remove(this.hero2triger,this.hero2collider,this.hero2)

      // Horizontal movement
      if (this.cursors.left.isDown) {
        this.hero.body.setVelocityX(-80);
      } else if (this.cursors.right.isDown) {
        this.hero.body.setVelocityX(80);
      }

      // Vertical movement
      if (this.cursors.up.isDown) {
        this.hero.body.setVelocityY(-80);
      } else if (this.cursors.down.isDown) {
        this.hero.body.setVelocityY(80);
      }

      // Update the animation last and give left/right animations precedence over up/down animations
      if (this.cursors.left.isDown) {
        this.hero.anims.play('left', true);
        this.hero.flipX = true;
      } else if (this.cursors.right.isDown) {
        this.hero.anims.play('right', true);
        this.hero.flipX = false;
      } else if (this.cursors.up.isDown) {
        this.hero.anims.play('up', true);
      } else if (this.cursors.down.isDown) {
        this.hero.anims.play('down', true);
      } else {
        this.hero.anims.stop();
      }

      // this.physics.add.collider(this.hero,this.enemies,function(hero,enemy)
      // {
      // enemy.destroy()});
      if (hero2trigger) {
        this.physics.world.removeCollider(hero2collider);
        this.physics.add.collider(this.hero2, this.enemies);
        this.hero2trigger = false;
      }
      herotrigger = true;
     herocollider = this.physics.add.overlap(this.hero, this.enemies, this.onMeetEnemy, null, this);
    } else {
      this.cameras.main.startFollow(this.hero2, true);

      // this.remove(this.herotriger,this.herocollider,this.hero)

      // Horizontal movement
      if (this.cursors.left.isDown) {
        this.hero2.body.setVelocityX(-80);
      } else if (this.cursors.right.isDown) {
        this.hero2.body.setVelocityX(80);
      }

      // Vertical movement
      if (this.cursors.up.isDown) {
        this.hero2.body.setVelocityY(-80);
      } else if (this.cursors.down.isDown) {
        this.hero2.body.setVelocityY(80);
      }

      // Update the animation last and give left/right animations precedence over up/down animations
      if (this.cursors.left.isDown) {
        this.hero2.anims.play('left2', true);
        this.hero2.flipX = true;
      } else if (this.cursors.right.isDown) {
        this.hero2.anims.play('right2', true);
        this.hero2.flipX = false;
      } else if (this.cursors.up.isDown) {
        this.hero2.anims.play('up2', true);
      } else if (this.cursors.down.isDown) {
        this.hero2.anims.play('down2', true);
      } else {
        this.hero2.anims.stop();
      }
      //     this.physics.add.collider(this.hero2,this.enemies,function(hero,enemy)
      // {
      // enemy.destroy()});
      // this.input.on('gameobjectdown' ,this.destroyShip ,this)
      hero2trigger = true;
       hero2collider = this.physics.add.overlap(this.hero2, this.enemies, this.onMeetEnemy, null, this);
      if (herotrigger) {
        this.physics.world.removeCollider(herocollider);
        this.physics.add.collider(this.hero, this.enemies);
        herotrigger = false;
      }
    }


    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      if (this.counter === 0) {
        this.counter = 1;
      } else {
        this.counter = 0;
      }
    }
  }
}
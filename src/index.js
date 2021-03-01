import 'phaser';
import config from './config/config';

import { Scene1 } from './scenes/scene1';
import { Scene2 } from './scenes/scene2';

// const gameConfig = {
//   width: 250,
//   height: 272,
//   backgroundColor: 0x000000,
//   scene: 
//   [Scene1, Scene2
//   ],
//  pixelArt: true
// };
class Game extends Phaser.Game
 {
   constructor()
   {
     super(config)
     this.scene.add('bootGame' ,Scene1);
     this.scene.add('playGame' ,Scene2);
     this.scene.start('bootGame')
   }
   
 }

 window.onload = () =>
 {
   window.game =new Game();
 }


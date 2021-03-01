import 'phaser'
export class Scene1 extends Phaser.Scene {
    constructor()
    {
        super("bootGame")
    }

    preload()
    {   
        this.load.image("background", "assets/images/background.png");
        // this.load.image("ship1", "assets/images/ship.png");
        this.load.spritesheet("ship1", "assets/spritesheets/ship.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "assets/spritesheets/ship2.png",{
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet("ship3", "assets/spritesheets/ship3.png",{
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        // this.load.image("ship2", "assets/images/ship2.png");
        // this.load.image("ship3", "assets/images/ship3.png");
        
    }
    
    create()
    {
        this.add.text(20,20, "Loading Game ...")
        this.scene.start("playGame")
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // margin: 0,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }, //Gravité en Y à modfier après
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var platforms;

var game = new Phaser.Game(config);

/*CHarger les différentes images du game*/
function preload ()
{
	this.load.image('sky', 'images/paysage.png');
	this.load.image('sol', 'images/sol.png');
	this.load.image('platforme', 'images/plateform.png');
}

var platforms;

function create ()
{
	this.add.image(0, 0, 'sky').setOrigin(0, 0);

	/*Duplique l'image sol grace a tileSprite(Longueur/2 canvas, déplacement en Y, width canvas en X si < 800 image + petite, déplacement en Y)*/
	this.add.tileSprite(400,600,800,150, 'sol');
	/*Duplique l'image sol grace a tileSprite(déplacement en X, déplacement en Y,  longueur image réel, hauteur image réel)*/
	// this.add.tileSprite(500,400,128,31, 'platforme');

	platforms = this.physics.add.staticGroup();
	// platforms.create(400, 900, 'sol').setScale(6.25).refreshBody();

    platforms.create(600, 400, 'platforme');
        // platforms.create(50, 250, 'ground');
        // platforms.create(750, 220, 'ground');

	// this.add.image(100, 600, 'sol');
	
	// platforms.create(400, 600, 'sol').setScale(2).refreshBody();
}

function update ()
{
}
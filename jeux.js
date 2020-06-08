var config = {
    type: Phaser.AUTO,
    width: 800	,
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

//Déclaration de mes différentes variable du jeu
var platforms;
var player;
var sol;

var game = new Phaser.Game(config);

/*CHarger les différentes images du game*/
function preload ()
{
	this.load.image('sky', 'images/paysage.png');
	this.load.image('sol', 'images/sol.png');
	this.load.image('platforme', 'images/plateform.png');
	this.load.image('caisse', 'images/vertical2.png');
	this.load.image('pangolin', 'images/pangolin.png')
	this.load.spritesheet('ninja', 'images/perso.png', {
		frameWidth: 47, frameHeight: 59});
	this.load.spritesheet('dead', 'images/dead.png', {
		frameWidth: 47, frameHeight: 59});
	this.load.spritesheet('jump', 'images/jump.png', {
		frameWidth: 47, frameHeight: 59});
}


function create ()
{
	//Partie Background(ciel + plateformes)
	this.add.image(0, 0, 'sky').setOrigin(0, 0); //Mise en place du sky
	
	/*Duplique l'image sol grace a tileSprite(déplacement en X, déplacement en Y,  longueur image réel, hauteur image réel)*/
	sol = this.add.tileSprite(400,600, config.width,150, 'sol');
	this.physics.add.existing (sol, true);

	//Placement du pangolin
	this.add.image(30, 488, 'pangolin');



	platforms = this.physics.add.staticGroup();
    platforms.create(600, 250, 'platforme');
    platforms.create(400, 400, 'platforme');
    platforms.create(570, 488,'caisse');
    //Partie animation du personnage
    player = this.physics.add.sprite(100, 100, 'ninja');	
    

    this.anims.create({
	    key: 'right',
	    frames: this.anims.generateFrameNumbers('ninja', { start: 0, end: 8 }),
	    frameRate: 9,
	    repeat: -1
	});

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, sol);

}

function update ()
{
}
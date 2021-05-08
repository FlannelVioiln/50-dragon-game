function preload() 
{
    this.load.image('western-plates-base', 'assets/western-plates-base.png');
    this.load.image('western-koi-base', 'assets/western-koi-base.png');
    this.load.image('western-spike-tail', 'assets/western-spike-tail.png');
    this.load.image('western-frond-tail', 'assets/western-frond-tail.png');
    this.load.image('western-tail-base', 'assets/western-koi-tail-base.png');
    this.load.image('western-horn1', 'assets/western-horn-1.png');
    this.load.image('western-horn2', 'assets/western-horn-2.png');
    this.load.image('western-horn3', 'assets/western-horn-3.png');
}
function create() 
{
	var baseTexture;
	var newTexture;
	//var context;
   

	var westernPlatesBase;
	var westernPlatesBase2;
    textures.add( this.textures.get('western-koi-base').getSourceImage());
    tailSpikeTexture = this.textures.get('western-spike-tail').getSourceImage();
    tailFrondTexture = this.textures.get('western-frond-tail').getSourceImage();
    tailTexture = this.textures.get('western-tail-base').getSourceImage();
    hornTexture = this.textures.get('western-horn1').getSourceImage();
    horn1Texture = this.textures.get('western-horn2').getSourceImage();
    horn2Texture = this.textures.get('western-horn3').getSourceImage();

    var newTexture = this.textures.createCanvas('full_dragon', baseTexture.width, baseTexture.height);
    var newHornTexture = this.textures.createCanvas('horns', baseTexture.width, baseTexture.height);
    context = newTexture.getSourceImage().getContext('2d');
    hornContext = newHornTexture.getSourceImage().getContext('2d');
    hornContext.drawImage(horn1Texture, 0, 0,spriteWidth*scale,spriteHeight*scale);  

    hornContext.drawImage(baseTexture, 0, 0,spriteWidth*scale,spriteHeight*scale);
    hornContext.drawImage(tailTexture, 0, 0,spriteWidth*scale,spriteHeight*scale);

     
    hornContext.drawImage(hornTexture, 0, 0,spriteWidth*scale,spriteHeight*scale);
    hornContext.drawImage(horn2Texture, 0, 0,spriteWidth*scale,spriteHeight*scale); 

    hornContext.drawImage(tailSpikeTexture, 0, 0,spriteWidth*scale,spriteHeight*scale);
    hornContext.drawImage(tailFrondTexture, 0, 0,spriteWidth*scale,spriteHeight*scale);
    var westernPlatesBase2 = this.add.image(256, 256, 'full_dragon');
    var westernPlatesBase2 = this.add.image(256, 256, 'horns');

}

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
    this.load.image('western-horn3', 'assets/dragonPalette.png');
    
}
function create() 
{
	var newTexture;
	//var context;
    
	let gameTextures = [this.textures.get('western-koi-base').getSourceImage(),
						this.textures.get('western-spike-tail').getSourceImage(),
						this.textures.get('western-frond-tail').getSourceImage(),
 						this.textures.get('western-tail-base').getSourceImage(),
						this.textures.get('western-horn1').getSourceImage(),
						this.textures.get('western-horn2').getSourceImage(),
						this.textures.get('western-horn3').getSourceImage()

						];

	var westernPlatesBase2;

    var newTexture = this.textures.createCanvas('full_dragon', spriteWidth, spriteHeight);

   
    gContext = newTexture.getSourceImage().getContext('2d');

    gameTextures.forEach(loopDraw);

    var westernPlatesBase2 = this.add.image(256, 256, 'full_dragon');

}
function loopDraw(item,index){
	gContext.drawImage(item,0,0,spriteWidth*scale,spriteHeight*scale);
}
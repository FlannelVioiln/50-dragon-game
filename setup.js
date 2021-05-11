function preload() 
{
    this.load.image('palette', 'assets/dragonPalette.png');


    // western
    this.load.image('western-plates-base', 'assets/WesternAssets/western-plates-base.png');
    this.load.image('western-giraffe-base', 'assets/WesternAssets/western-giraffe-base.png');
    this.load.image('western-koi-base', 'assets/WesternAssets/western-koi-base.png');
    this.load.image('western-tail-spikes', 'assets/WesternAssets/western-tail-spikes.png');
    this.load.image('western-tail-ball', 'assets/WesternAssets/western-tail-ball.png');
    this.load.image('western-horn1', 'assets/WesternAssets/western-horn1.png');
    this.load.image('western-horn2', 'assets/WesternAssets/western-horn2.png');
    this.load.image('western-horn3', 'assets/WesternAssets/western-horn3.png');
    this.load.image('western-horn4', 'assets/WesternAssets/western-horn4.png');
    this.load.image('western-horn5', 'assets/WesternAssets/western-horn5.png');
    this.load.image('western-horn5', 'assets/WesternAssets/western-horn6.png');

    // hydra
    this.load.image('hydra-plates-base', 'assets/hydraAssets/hydra-plates-base.png');
    this.load.image('hydra-giraffe-base', 'assets/hydraAssets/hydra-giraffe-base.png');
    this.load.image('hydra-koi-base', 'assets/hydraAssets/hydra-koi-base.png');
    this.load.image('hydra-tail-spikes', 'assets/hydraAssets/hydra-tail-spikes.png');
    this.load.image('hydra-tail-ball', 'assets/hydraAssets/hydra-tail-ball.png');
    this.load.image('hydra-horn1', 'assets/hydraAssets/hydra-horn1.png');
    this.load.image('hydra-horn2', 'assets/hydraAssets/hydra-horn2.png');
    this.load.image('hydra-horn3', 'assets/hydraAssets/hydra-horn3.png');
    this.load.image('hydra-horn4', 'assets/hydraAssets/hydra-horn4.png');
    this.load.image('hydra-horn5', 'assets/hydraAssets/hydra-horn5.png');
    this.load.image('hydra-horn5', 'assets/hydraAssets/hydra-horn6.png');

    // wyvern 
    this.load.image('wyvern-plates-base', 'assets/wyvernAssets/wyvern-plates-base.png');
    this.load.image('wyvern-giraffe-base', 'assets/wyvernAssets/wyvern-giraffe-base.png');
    this.load.image('wyvern-koi-base', 'assets/wyvernAssets/wyvern-koi-base.png');
    this.load.image('wyvern-tail-spikes', 'assets/wyvernAssets/wyvern-tail-spikes.png');
    this.load.image('wyvern-tail-ball', 'assets/wyvernAssets/wyvern-tail-ball.png');
    this.load.image('wyvern-horn1', 'assets/wyvernAssets/wyvern-horn1.png');
    this.load.image('wyvern-horn2', 'assets/wyvernAssets/wyvern-horn2.png');
    this.load.image('wyvern-horn3', 'assets/wyvernAssets/wyvern-horn3.png');
    this.load.image('wyvern-horn4', 'assets/wyvernAssets/wyvern-horn4.png');
    this.load.image('wyvern-horn5', 'assets/wyvernAssets/wyvern-horn5.png');
    this.load.image('wyvern-horn5', 'assets/wyvernAssets/wyvern-horn6.png');

}
function create() 
{
	
	let westernTextures = [ this.textures.get('western-koi-base').getSourceImage(),
    						this.textures.get('western-tail-spikes').getSourceImage(),
    						this.textures.get('western-tail-ball').getSourceImage(),
    						this.textures.get('western-horn1').getSourceImage(),
    						this.textures.get('western-horn2').getSourceImage(),
    						this.textures.get('western-horn3').getSourceImage(),
                            this.textures.get('western-horn4').getSourceImage(),
                            this.textures.get('western-horn5').getSourceImage(),

						  ];

    let hydraTextures = [ this.textures.get('hydra-koi-base').getSourceImage(),
                            this.textures.get('hydra-tail-spikes').getSourceImage(),
                            this.textures.get('hydra-tail-ball').getSourceImage(),
                            this.textures.get('hydra-horn1').getSourceImage(),
                            this.textures.get('hydra-horn2').getSourceImage(),
                            this.textures.get('hydra-horn3').getSourceImage(),
                            this.textures.get('hydra-horn4').getSourceImage(),
                            this.textures.get('hydra-horn5').getSourceImage(),

                          ];


  let wyvernTextures = [     this.textures.get('wyvern-koi-base').getSourceImage(),
                            this.textures.get('wyvern-tail-spikes').getSourceImage(),
                            this.textures.get('wyvern-tail-ball').getSourceImage(),
                            this.textures.get('wyvern-horn1').getSourceImage(),
                            this.textures.get('wyvern-horn2').getSourceImage(),
                            this.textures.get('wyvern-horn3').getSourceImage(),
                            this.textures.get('wyvern-horn4').getSourceImage(),
                            this.textures.get('wyvern-horn5').getSourceImage(),

                          ];

    canvas = this.textures.createCanvas('full_dragon', spriteWidth, spriteHeight);

   
    gContext = canvas.getSourceImage().getContext('2d');

    wyvernTextures.forEach(loopDraw);

    this.add.image(256, 256, 'full_dragon');
    canvas.refresh();

    paletteWidth = game.textures.get('palette').getSourceImage().width;

    for (x = 0; x < paletteWidth; x++) {
        pixel = game.textures.getPixel(x, 0,'palette');
        colorLookup.push(pixel);
    }
}
function loopDraw(item,index){
	gContext.drawImage(item,0,0,spriteWidth*scale,spriteHeight*scale);
}

//dwarven smoking jacket with 50 gems.
// beard comb
// scroll with numbers
// hookah
// obsidian sandals
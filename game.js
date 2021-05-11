function update() 
{   
  
    if(!random){ 
        updateDragons(gContext,getPalette());
        random = true;
    }
}

function updateDragons(context,palette)
{
    var pixels = context.getImageData(0, 0, spriteWidth, spriteHeight);

    for (i = 0; i < pixels.data.length / 4; i++)
    {
        changePixelColor(pixels.data, i * 4, gray1,palette[0].r,palette[0].g,palette[0].b);
        changePixelColor(pixels.data, i * 4, gray2,palette[1].r,palette[1].g,palette[1].b);
        changePixelColor(pixels.data, i * 4, gray3,palette[2].r,palette[2].g,palette[2].b);
        changePixelColor(pixels.data, i * 4, 0,50,50,50);
    }

    context.putImageData(pixels, 0, 0);
    canvas.refresh();
}

function changePixelColor(data,index,colorToChange,red,green,blue){

     if(data[index]==colorToChange){ 
         data[index] =red;
         data[index + 1] =  green;
         data[index + 2] =  blue;
    }
}

function changeHorns(){
    
}

function getPalette(){
    var pixels = [];
            while(pixels.length < 3){
                var r = Math.floor(Math.random() * paletteWidth);
                if(!pixels.includes(colorLookup[r])){
                    pixels.push(colorLookup[r]);
            }
        }

    return pixels;
}


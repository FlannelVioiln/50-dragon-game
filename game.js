function update() 
{
    
    updateDragons(gContext,0,0,0,0,0,0)
}

function updateDragons(context,redMax,redMin,greenMax,greenMin,blueMax,blueMin)
{
    var pixels = context.getImageData(0, 0, spriteWidth*scale, spriteHeight*scale);

    for (i = 0; i < pixels.data.length / 4; i++)
    {
        changePixelColor(pixels.data, i * 4, 115,76,0,0);
        changePixelColor(pixels.data, i * 4, 181,153,21,21);
        changePixelColor(pixels.data, i * 4, 64,163,163,36);
        changePixelColor(pixels.data, i * 4, 0,50,50,50);
    }

    context.putImageData(pixels, 0, 0);
}

function changePixelColor(data,index,colorToChange,red,blue,green){

     if(data[index]==colorToChange){ 
         data[index] =red;
         data[index + 1] =  blue;
         data[index + 2] =  green;
    }
}


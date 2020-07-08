var image = null, greyimage = null , redimage = null, greenimage = null, blueimage = null, rainbowimage = null;
var caninput;

function upload(){
   caninput = document.getElementById("canv");
  var finput = document.getElementById("fileinput");
  image = new SimpleImage(finput);
  greyimage = new SimpleImage(finput);
  redimage = new SimpleImage(finput);
  greenimage = new SimpleImage(finput);
  blueimage = new SimpleImage(finput);
rainbowimage = new SimpleImage(finput);
  image.drawTo(caninput);
}

function imageIsLoaded(image1){
  if(image1 == null || !image1.complete()){
    alert("Image is not loaded");
    return false;
  }
  else
    { return true; }
}

function greyscale(){
  if(imageIsLoaded(greyimage))
    {
      filterGrey();
      greyimage.drawTo(caninput);
    }
} 
function filterGrey(){  
for(var pixel of greyimage.values())
    {
      var avg = (pixel.getRed() + pixel.getGreen()+pixel.getBlue())/3;
      pixel.setGreen(avg);
      pixel.setRed(avg);
      pixel.setBlue(avg);
    }
}

function redcolor(){
  if(imageIsLoaded(redimage))
    {
      filterRed();
      redimage.drawTo(caninput);
    }
} 
function filterRed(){
  for(var pixel of redimage.values())
    {
       var avg = (pixel.getRed() + pixel.getGreen()+pixel.getBlue())/3;
      if(avg < 128)
        {
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(255);
          pixel.setGreen(2*avg - 255);
          pixel.setBlue(2*avg - 255);
        }
    }
}

function greencolor(){
  if(imageIsLoaded(greenimage))
    {
      filterGreen();
      greenimage.drawTo(caninput);
    }
} 
function filterGreen(){
  for(var pixel of greenimage.values())
    {
       var avg = (pixel.getRed() + pixel.getGreen()+pixel.getBlue())/3;
      if(avg < 128)
        {
          pixel.setRed(0);
          pixel.setGreen(avg*2);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(avg*2 - 255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg - 255);
        }
    }
}

function bluecolor(){
  if(imageIsLoaded(blueimage))
    {
      filterBlue();
      blueimage.drawTo(caninput);
    }
} 
function filterBlue(){
  for(var pixel of blueimage.values())
    {
       var avg = (pixel.getRed() + pixel.getGreen()+pixel.getBlue())/3;
      if(avg < 128)
        {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(avg*2);
        }
      else
        {
          pixel.setRed(avg*2 - 255);
          pixel.setGreen(avg*2 - 255);
          pixel.setBlue(255);
        }
    }
}

function rainbowcolor(){
  if(imageIsLoaded(rainbowimage))
    {
      filterRainbow();
      rainbowimage.drawTo(caninput);
    }
} 
function filterRainbow() {
  var img_Y = rainbowimage.getHeight();
   for (var pixel of rainbowimage.values()) {
    var pix_Y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 7;

    if ((pix_Y < img_Y / 7) && (avg < 128)) {
      pixel.setRed(avg * 2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else if ((pix_Y < img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(avg * 2 - 255);
    }
    if ((pix_Y < 2 * img_Y / 7) && (pix_Y > img_Y / 7) && (avg < 128)) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0.8 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 2 * img_Y / 7) && (pix_Y > img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(1.2 * avg - 51);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 3 * img_Y / 7) && (pix_Y > 2 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(2 * avg);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 3 * img_Y / 7) && (pix_Y > 2 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 4 * img_Y / 7) && (pix_Y > 3 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 4 * img_Y / 7) && (pix_Y > 3 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 5 * img_Y / 7) && (pix_Y > 4 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    } else if ((pix_Y <= 5 * img_Y / 7) && (pix_Y > 4 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }

    if ((pix_Y <= 6 * img_Y / 7) && (pix_Y > 5 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0.8 * avg);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    } else if ((pix_Y <= 6 * img_Y / 7) && (pix_Y > 5 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(1.2 * avg - 51);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    } else if ((pix_Y >= 6 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(1.6 * avg);
      pixel.setGreen(0);
      pixel.setBlue(1.6 * avg);
    } else if ((pix_Y >= 6 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(0.4 * avg + 153);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(0.4 * avg + 153);
    }
  }
}

function resetimage(){
  image.drawTo(caninput);  
}

function clearImage() {
  var imgTemp = document.getElementById("canv");
  var clearImg = imgTemp.getContext("2d");
  clearImg.clearRect(0, 0, imgTemp.width, imgTemp.height);
  return;
}

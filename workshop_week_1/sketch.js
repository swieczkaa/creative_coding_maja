function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  backgroundColour = color(248, 245, 229)
  colours = [color(228, 19, 17, 175), color(246, 215, 13, 175), color(0, 133, 86, 175), color(21, 43, 153, 175)]
  //noLoop()
  frameRate(10)
  saveGif("workshop", 3)
  
}

var backgroundColour


function draw() {
  //background(backgroundColour);
  noStroke()
  
  for(var i=0; i < width; i += 15){
    for(var j=0; j < height; j += 15){
      fill(random(colours))
      rect(i, j + random()*30, 10, random()*40, 2)
    }
  }
}
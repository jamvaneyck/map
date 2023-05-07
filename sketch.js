var base;
var top;
var dress;

function preload() {
  base= loadImage('base.png');
  top= loadImage('top.png');
  dress= loadImage('dress.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  image(base,0,0);
  image(dress,0,0);
  image(top,0,0);
  if (mouseIsPressed) {
    top.show();
    dress.hide();
  } else {
    top.hide();
  }

}

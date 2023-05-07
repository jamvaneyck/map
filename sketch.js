let base;
let top;
let dress;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  base= loadImage('base.png');
  top= loadImage('top.png');
  dress= loadImage('dress.png');
}

let value = 0;
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

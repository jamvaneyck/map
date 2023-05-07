var base;
var top;
var dress;

function setup() {
  createCanvas(3900, 3787);
  base= loadImage('base.png');
  top= loadImage('top.png');
  dress= loadImage('dress.png');
}

let value = 0;
function draw() {
  image(base,0,0);
  if (value === 0) {
    image(dress,0,0);
  } else {
    image(top,0,0);
  }

function mouseClicked() {
  if (value === 0) {
    value = 1;
  } else {
    value = 0
  }
}
}

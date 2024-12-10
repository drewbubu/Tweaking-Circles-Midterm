    // global variables
let xPos = [];
let yPos = [];
let colors = [];
let numCircles = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(173, 216, 230); // light blue background
  for (let i = 0; i < numCircles; i++) {
    xPos.push(random(width));
    yPos.push(random(height));
    
    // random colors
    colors.push(color(random(255), random(255), random(255))); 
  }
}

function draw() {
  background(173, 216, 230); // light blue background again
  noStroke();

  for (let i = 0; i < numCircles; i++) 
  {
    fill(colors[i]);
            // variables for circle sizes 
    let size = i * 10 + 20;
    if (size > 100) {
      size = 100;
    }

    ellipse(xPos[i], yPos[i], size, size);
    moveCircle(i);
  }
}

function moveCircle(index) {
         // variables and loops for circle movement
  let speed = 2;
  xPos[index] += random(-speed, speed);
  yPos[index] += random(-speed, speed);

        // keeping the circles within the canvas
  if (xPos[index] > width) xPos[index] = width;
  if (xPos[index] < 0) xPos[index] = 0;
  if (yPos[index] > height) yPos[index] = height;
  if (yPos[index] < 0) yPos[index] = 0;
}



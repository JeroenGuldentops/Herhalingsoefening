
let colorText = 'red';
let shapeText = 'square';

function setup() {
      createCanvas(400, 400);
      background(220);
}

function draw() {
      colorButton = createButton(colorText);
      colorButton.size(55);
      colorButton.position(15, 15);
      shapeButton = createButton(shapeText);
      shapeButton.size(55);
      shapeButton.position(15 + colorButton.width + 10, 15);

      shapeButton.mousePressed(changeShape);
      colorButton.mousePressed(changeColor);

      if(mousePressed){
            if(shapeText === 'square'){
                  drawRect();
            } else {
                  drawCircle();
            }
      }
}

function changeColor(){

      switch (colorText) {
            case 'red':
                  colorText = 'black';
                  fill(black);
                  break;
            case 'black':
                  colorText = 'yellow';
                  fill(yellow);
                  break;
            case 'yellow':
                  colorText = 'red';
                  fill(red);
                  break;
      
            default:
                  break;
      }
}

function changeShape() {
      switch (shapeText) {
            case 'square':
                  shapeText = 'circle';
                  break;
            case 'circle':
                  shapeText = 'square';
                  break;

            default:
                  break;
      }
}

function drawCircle(){
      ellipse(mouseX, mouseY, 30);
}

function drawRect(){
      rect(mouseX, mouseY, 30);
}

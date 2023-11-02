
let color = 'red';
let shape = 'square';

function setup() {
      createCanvas(400, 400);
      background(220);
}

function draw() {
      colorButton = createButton(color);
      colorButton.size(55);
      colorButton.position(15, 15);
      shapeButton = createButton(shape);
      shapeButton.size(55);
      shapeButton.position(15 + colorButton.width + 10, 15);
      clearButton = createButton('clear');
      clearButton.size(55);
      clearButton.position(15 + colorButton.width + 10 + shapeButton.width + 10, 15);

      shapeButton.mousePressed(changeShape);
      colorButton.mousePressed(changeColor);
      clearButton.mousePressed(clearCanvas);
}

function changeColor(){

      switch (color) {
            case 'red':
                  color = 'black';
                  break;
            case 'black':
                  color = 'yellow';
                  break;
            case 'yellow':
                  color = 'red';
                  break;
      
            default:
                  break;
      }
}

function changeShape() {
      switch (shape) {
            case 'square':
                  shape = 'circle';
                  break;
            case 'circle':
                  shape = 'square';
                  break;

            default:
                  break;
      }
}

function clearCanvas() {
      background(220);
}

function drawCircle(){
      fill(color);
      ellipse(mouseX, mouseY, 50);
}

function drawRect(){
      fill(color);
      rect(mouseX, mouseY, 50);
}

function mousePressed(){
      if(shape === 'square'){
            drawRect();
      } else {
            drawCircle();
      }
}

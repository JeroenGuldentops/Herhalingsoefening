
let colorText = 'red';
let color = color('red');
let shapeText = 'square';

function setup() {
    createCanvas(400, 400);
    background(220);
    colorButton = createButton(colorText);
    //color.size(55);
    colorButton.position(15, 15);
    colorButton.mousePressed(changeColor());
    shapeButton = createButton(shapeText);
    //shape.size(55);
    shapeButton.position(15 + colorButton.width + 10, 15);
    shapeButton.mousePressed(changeShape());
  }
  
  function draw() {

  }

  function changeColor(){
        if()
  }

  function changeShape(){

  }
  
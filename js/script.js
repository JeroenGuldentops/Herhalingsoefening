
let colorText = 'red';
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
        if(colorText === 'red') {
            colorText = 'black';
            fill(black);
        } else if(colorText === 'black' ) {
            colorText = 'yellow';
            fill(yellow);
        } else if (colorText === 'yellow') {
            colorText = 'red';
            fill(red);
        }
  }

  function changeShape(){
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
  
const container = document.querySelector('.container');
const pixelBtn = document.getElementById('pixel-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const resetBtn = document.getElementById('reset-btn');

// Allows user to change # of pixels in grid
pixelBtn.addEventListener('click', function() {
  let pixels = parseInt(prompt("Enter how many pixels per side you'd like between 10 - 100"));
  if(isNaN(pixels) || pixels > 100) {
    prompt('Please enter a number lower than 100')
  } 
  console.log(pixels)
    //Set grid to user input
    container.style.setProperty('--grid-rows', `${pixels}`)
    container.style.setProperty('--grid-cols', `${pixels}`)
    //Populate grid with divs
    for(let i = 0; i < pixels * pixels; i++) {
      let newDiv = document.createElement('div')
      container.appendChild(newDiv).classList.add('new-div' + i);
      newDiv.classList.add('reset')
    }
    }
);

// Allows user to paint with 7 colours of the rainbow at random
function changeColor() {
    const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    container.addEventListener('mouseover', function(e) {
    let color = rainbow[Math.floor(Math.random() * rainbow.length)]
        e.target.style.backgroundColor = `${color}`;
    })
}

rainbowBtn.addEventListener('click', changeColor)

//Reset button
resetBtn.addEventListener('click', reset)

function reset() {
  const divs = document.querySelectorAll('.reset')

  divs.forEach(div => {
    div.remove();
  })
}

//Pick a color from the palette 

let x = document.getElementById('color-picker');

x.addEventListener('click', function(e){
   container.addEventListener('mouseover', function(e){
     e.target.style.backgroundColor = `${x.value}`;
   })
 })
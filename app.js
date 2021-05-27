document.addEventListener('DOMContentLoaded', function(){  
  
  const gameContainer = document.querySelector(".game");
  let pickedColors = [];
  const foundColors = [];

  const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow"
  ];


  // randomly sort the array
  COLORS.sort(() => 0.5 - Math.random())

  // create a function to check if two color match or not
  function checkColorMatch(){
    
  }
 

  // create a function to build div element for each color
  function buildColors(){
    for (let color of COLORS){
      const newDiv = document.createElement('div')
      newDiv.setAttribute('data-color', color)
      colorId = color
      newDiv.addEventListener('click', function(event){
        const divs = event.target.setAttribute('id', event.target.getAttribute('data-color'))
        pickedColors.push(event.target.getAttribute('data-color'))
        if (pickedColors.length === 2){
          setTimeout(function(){
            if (pickedColors[0] === pickedColors[1]){
              // alert('Good Job! You Found Two Similar Colors')
              foundColors.push(newDiv)
            }

            else{
              event.target.removeAttribute('id')
                  
            }
            pickedColors = [] 
            const p = document.getElementById('p')
            p.innerText = foundColors.length

          }, 500)

        }
      })
      gameContainer.append(newDiv)

    }
  }

  buildColors()

})
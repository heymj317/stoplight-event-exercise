(function() {
//stopLight
let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');
let controls = document.getElementById('controls');

let stoplightOn = false; 

stopButton.addEventListener("click", () => {
 /* if (stopLight.style.backgroundColor === "red") {
    stopLight.style.backgroundColor = "black"
    stoplightOn = false;
  } else {
    stopLight.style.backgroundColor = "red"
    stoplightOn = true;
  }
  */
  stopLight.classList.toggle('stop');
})

stopButton.addEventListener('mouseenter', () => {
  console.log('Entered Stop Button')
})
stopButton.addEventListener('mouseleave', () => {
  console.log('Left Stop Button');
})

//slowLight
let slowButton = document.getElementById('slowButton');
let slowLight = document.getElementById('slowLight');
let slowlightOn = false;

slowButton.addEventListener('click', () => {
 /* if (slowLight.style.backgroundColor === "yellow") {
    slowlightOn = false;
    slowLight.style.backgroundColor = "black"
  } else {
    slowlightOn = true;
    slowLight.style.backgroundColor = "yellow"
  }
  */

  slowLight.classList.toggle('slow');
})

slowButton.addEventListener('mouseenter', () => {
  console.log('Entered Slow Button')
})
slowButton.addEventListener('mouseleave', () => {
  console.log('Left Slow Button');
})

//goLight
let goButton = document.getElementById('goButton');
let goLight = document.getElementById('goLight');
let golightOn = false;

goButton.addEventListener('click', () => {
 
/*  if (goLight.style.backgroundColor === "green") {
    goLight.style.backgroundColor = "black"
    golightOn = false;
  } else {
    goLight.style.backgroundColor = "green"
    golightOn = true;
  }
  */
 goLight.classList.toggle('go');
  
})

goButton.addEventListener('mouseenter', () => {
  console.log('Entered Go button');
})

goButton.addEventListener('mouseleave', () => {
  console.log('Left Go button');
})



//Bonus listener
function logBulbOn(event) {
   let nameOfBulb = event.target.innerText;
   //console.log(nameOfBulb + ' bulb on')

   switch (false) {
    case (event.target.classList.contains("go")): 
    console.log(nameOfBulb + ' bulb on')
    break;
    
    case (event.target.classList.contains("go")) :
      console.log(nameOfBulb + ' bulb on')
      break;

    case (event.target.classList.contains("go")) : 
    console.log(nameOfBulb + ' bulb on')
    break;

    default :
    console.log(stopLight.classList);
    console.log(nameOfBulb + ' bulb off')
   }
   
}



controls.addEventListener('click', logBulbOn)
})();








const btn = document.querySelector("#start-typing-btn");

//Type area
const typeArea = document.querySelector("#text-type");

const type = (str, speed) => {
    if (str === "") {
      //If we have typed everything then stop typing
      //By stopping the timer
      clearTimeout(interval);
    } else {
      //Keep typing each character
      var interval = setTimeout(() => {
        //Add the next character to the type area
        typeArea.innerHTML += str.substr(0, 1);
  
        //Call the function recursively
        //With the remaining text to be typed
        type(str.substr(1, str.length), speed);
  
      }, 1000 - speed);
    }
  };

function recurse(){
    const str = document.querySelector("#text").value;
    typeArea.innerHTML = str;
    setTimeout(recurse, 5);
}

recurse();

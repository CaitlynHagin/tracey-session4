console.log ("linked")
  

function flipCoin () {
let number = Math.floor(Math.random() * 3);
let output =document.getElementById("heading")

switch (number) {
    case 1: 
        console.log("heads");
        output.append("heads"+" ")
         break;

    case 2:
        console.log("tails");
        output.append("tails"+" ")
        break;

    case 0:
        console.log("the coin flew out the window");
        output.append("the coin flew out the window"+" ")
        break;
}
}


function turns(x) {
    for (let i=0; i<x; i++) {
        flipCoin()
    }
}

turns(7)



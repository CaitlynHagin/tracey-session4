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



// build a function that takes 3 paraments (of Numbers) if the parameter numbers are between 50 and 100 console.log parameter and true
//comment above the code is what it's doing

//declaring function with 3 parameters (a,b,c), they represent possible numbers the user would put in
function Checker(a,b,c) {

// for loop, declared index numbers, i equal 50, i being less than 100, i++ is adding on
 for (let i=50; i<100; i++) {
    //console logging the index 
//  console.log (i)
// asking the if statement to be equal to the index, or statement
  if  (a === i || b === i || c === i) {
    console.log ("you win", i)
    //displaying in the console instead if it fits the i statments, using the i statement
}
else {
    //this is an else statement
    console.log ("wrong number")
}
}
}
//this is calling the function
Checker (25,67,89)
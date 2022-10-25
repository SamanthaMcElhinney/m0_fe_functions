// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function printNameQuestion() {
  console.log("Hello, what is your name?");
}

printNameQuestion()
// I included print for the name because the function should describe what the function does and use a verb for the action.
// I also added a ; after console.log for formatting

// EX 2:
function add(num1, num2, num3) {
var sum = num1 + num2 + num3
console.log (sum);
}

add(1, 2, 3);
add(4, 2, 7);

// I name changes to shorten the name for a more clear definition of the function. addThreeNumbers in the original is verboise.
// I also changed the spacing for the {} brackets.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();

// I changed the name. From my understanding you can't abbreviate functions to func. 
// I changed the formatting so it would work. The bracket after running the function and 
// entering the arguments isn't necessary. Functions was redundant with listing makeFreshPesto twice.
// I know you used this as an example for not being concise, but I'm honestly not sure how to write the code better.

//  EX 4:
//function average(num1, num2) {
  //var sum = num1 + num2;
   // var avg = sum / 2;

  //console.log(`the average is: ${avg}`.)
 // }
 function average(num1, num2) {
  var avg = num1 + num2/ 2;
  console.log(`the average is: ${avg}.`);
  
}

  average(4,8);

 
  // The original code syntax didn't work to run the code. I changed the bracket formatting so it would run.
  // It was also redundant to have the the var for sum when you can put it with average and divide by 2. 
  // At the end I added two arguments to run the function for average to make sure it calculated what I wanted.
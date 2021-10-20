//*********DAY 0 ******/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)
}
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + (+secondInteger))
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
    }
    
    console.log((firstDecimal+ (+secondDecimal)).toFixed(countDecimals(+secondDecimal)))
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString)
    
}
//*********DAY 1 ******/

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width
    return area;
}


function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    const r = +readLine()
    
    // Print the area of the circle:
    console.log(PI*(r*r))
    // Print the perimeter of the circle:
    console.log(2*PI*r)

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// Implement a function named factorial that has one parameter n: 
// an integer, . It must return the value of  (i.e.,  factorial).
/*
 * Create the function factorial here
 */
function factorial(n){
    if(n === 0){
        return 1
    }else{
        return factorial (n-1)*n
    }
}

//*****DAY 2 *****/
/*


//*******DAY 3 ******/
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {  
    if (typeof s === "string") {   
         console.log(      
           s       
          .split("")        
          .reverse()        
          .join("")    
          );  
          } 
          else {    
              console.log("s.split is not a function" + "\n" + s);  
              }
    }
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    let message = ""
    if(a>0){
        message = "YES"
        return message;     
    }else if(a===0){
        message = "Zero Error"
        throw new Error(message)
        return
    }else{
       message = "Negative Error"
        throw new Error(message)
        return
    }

}
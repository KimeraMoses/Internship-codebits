//********DAY 1 *************//
function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString)
}

//********DAY 2 *************//
function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = (tip_percent/100)* meal_cost
    let tax = (tax_percent/100)* meal_cost
    
    let total_cost = meal_cost + tip + tax
    
    let actual_cost = Math.round(total_cost)
    console.log(actual_cost)
}

//********DAY 3 *************//
    var i = 4
    var d = 4.0
    var s = 'HackerRank '
    
    // Declare second integer, double, and String variables.
    var num_int = +(readLine())
    var num_double = +(readLine())
    var strg = readLine()
    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
    console.log(i + num_int)
    // Print the sum of the double variables on a new line.
    console.log((d + num_double).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + strg)

//Day 3: Intro to Conditional Statements
    function main() {
        const N = parseInt(readLine().trim(), 10);
        if(N%2 !==0){
            return console.log('Weird')
        }else{
            if(N>=2 && N<=5){
                return console.log('Not Weird')
            }
            else if (N>=6 && N<=20){
                return console.log('Weird')
            }
            else if(N>20){
                return console.log('Not Weird')
            }
        }
    }
    
    
//DAY 4: Classes and Instances

    function Person(initialAge){
        // Add some more code to run some checks on initialAge
      if(initialAge>0) this.age = initialAge;
      else{
          this.age = 0
          console.log('Age is not valid, setting age to 0.')
      }  
      this.amIOld=function(){
       // Do some computations in here and print out the correct statement to the console
       if(this.age<13) console.log('You are young.')
       else if(this.age>=13 && this.age<18) console.log('You are a teenager.')
       else{
           console.log('You are old.')
       }
      };
      
       this.yearPasses=function(){
              // Increment the age of the person in here
              this.age++
       };
    }
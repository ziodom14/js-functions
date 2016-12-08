/*
 * A function is a block of code (a series of instructions) designed to execute a certain task. Functions allow you to reuse code.
 
* i.e. A function to generate a greeting to specific person you designate:*/

function greeting(guest){ //takes in a parameter named 'guest' which acts like a local variable inside the function
 return "Good afternoon " + guest + ".";  //the output value after the function is invoked
}
greeting("Mr. Smith"); //invoking or calling the function to execute the code (instructions) inside the function.

var testGreeting = greeting("Mr. Smith"); //assigning the function call into a variable 
console.log(testGreeting); //printing the output value of the function.

/*Below are some specifications for Functions to be built. */
/*
 *  #1
 * Declare two variables
 *   @variable Datatype: Number `bango1`
 *   @variable Datatype: Number `bango2`
 *
 * These two variables will be used to invoke the functions #2 - #5.
*/ 


/*
 * #2
 * Function - add
 * Declare a function named `add` which will take two parameters: `num1` and `num2`.
 * 
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will add two numbers and return the sum of these two numbers.
 * Invoke the function and assign it to a variable named `sum`.
 * Console.log `sum` to test your code.
*/


/*
 * #3
 * Function - subtract
 * Declare a function named `subtract` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will subtract two numbers and return the difference of these two numbers.
 * Invoke the function and assign it to a variable named `difference`.
 * Console.log `difference` to test your code.
*/ 


/*
 * #4
 * Function - multiply
 * Declare a function named `multiply` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will multiply two numbers and return the product of these two numbers.
 * Invoke the function and assign it to a variable named `product`.
 * Console.log `product` to test your code.
*/


/*
 * #5
 * Function - divide
 * Declare a function named `divide` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will divide two numbers and return the quotient of these two numbers.
 * Invoke the function and assign it to a variable named `quotient`.
 * Console.log `quotient` to test your code.
*/


/*
 * #6
 * Function - checkSum
 * Declare a function named `checkSum` which will take a parameter: `x`.
 *
 *   @param Datatype: Number `x`
 *   @return Datatype: String
 *
 * This function will return the string "Mariah Carey has been married `x` amount of times." Where `x` is the value when you invoke the function. Invoke this function using the variable `sum`. 
 * Console.log your result.
*/


/*
 * #7
 * Function - checkDifference
 * Declare a function named `checkDifference` which will take a parameter `x`.
 *
 *    @param Datatype: Number `x`
 *    @return Datatype: String
 *
 * This function will return the string "Last night I dreamt that I ate `x` Taco Bell soft tacos."  Where `x` is the value when you invoke the function. Invoke this function using the variable `difference`.
 * Console.log your results.
*/ 


/*
 * #8
 * Function - checkProduct
 * Declare a function named `checkProduct` which does not require any parameters.
 *
 *    @return Datatype: Number
 *
 * This function will multiply the values stored in the sum and product.
 * Console.log your result.  
*/


/*
 * #9
 * Function - checkQuotient
 * Declare a function named `checkQuotient` which does not require any parameters.
 *
 *    @return Datatype: Number
 *
 * This function will multiply the values stored in the product and quotient.
 * Console.log your result.  
*/


/*
 * #10
 * Function - addThenSubtract
 * Declare three variables
 *
 *   @variable Datatype: Number `bango3`
 *   @variable Datatype: Number `bango4`
 *   @variable Datatype: Number `bango5`
 *   
 * Next, declare a function named addThenSubtract which takes three parameters: `num1`, `num2`, `num3`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @param Datatype: Number `num3`
 *    @return Datatype: Number
 *
 * This function will add the first two parameters together. Then with the sum of that operation, subtract it from the third parameter. PLEASE USE YOUR PREVIOUS FUNCTIONS FOR THIS EXERCISE. 
 * Console.log your result.
*/ 


/*
 * #11
 * Function - multiplyThenDivide
 * Declare a function named multiplyThenDivide which takes three parameters: `num1`, `num2`, `num3`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @param Datatype: Number `num3`
 *    @return Datatype: Number
 *
 * This function will multiply the first two parameters together. Then with the product of that operation, divide it from the third parameter. PLEASE USE YOUR PREVIOUS FUNCTIONS FOR THIS EXERCISE. 
 * Console.log your result.
*/ 
 *
 *    @param Datatype: Number `numX`
 *    @param Datatype: Number `numY`
 *    @param Datatype: Number `numZ`
 *    @return Datatype: Number
 *
 *  This function takes three `Number` arguments,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`.
*/


/**
 *  #10
 *  Function - createFullName
 *
 *    @param Datatype: String `firstName`
 *    @param Datatype: String `lastName`
 *    @return Datatype: String
 *
 *  This function takes two String arguments, `firstName` and `lastName`.
 *  This function `returns` back a string which represents someone's full name.
 *
 *  **Call this function and pass your first and last name into it.
 *  Store the return value to a variable named** `myFullName`.
 */


/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument, `age`.
 *  This function returns the `Boolean` value `true` or `false` depending
 *  on whether `age` is lower than the legal drinking age
 *  in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`.
 */


/**
 *  #12
 *  Function - throwParty
 *
 *  @return Datatype: Boolean
 *
 *  This function checks the value stored at the `canDrinkBeer` variable.
 *  If the value is `false`, then it should print to a message to the screen:
 *  "The Party will have tons of Cake!" 
 * If not, then it should print a different message:
 *  "This Party will have an open bar".
 */


/**
 *  #13
 *  Function - eatFood
 *
 *    @param Datatype: String `firstName`
 *    @param Datatype: String `lastName`
 *    @param Datatype: String `food`
 *    @return Datatype: String
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */


/**
 *  #14
 *  Function - repeater
 *
 *  @return Datatype: none

 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */

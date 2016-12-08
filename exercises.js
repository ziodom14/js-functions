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
 *  Declare Two Variables
 *    @variable Datatype: Number `a`
 *    @variable Datatype: Number `b`
 *
 *  These two variables will be passed as parameters to the
 *  functions that we will write. Parameters are the function's arguments.
 *  Parameters allow us to reuse a function with different values. 
 *  Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */


/**
 *  #2
 *  Function - add
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function takes two number arguments, `num1` and `num2`.
 * This function `returns` back a number that is the sum of `num1` 
 * and `num2`.
 *
 * You can test your function by invoking it with two arguments   
 * and saving its return value to a variable. Store the return value
 * in a variable named `sum`. Try invoking it with 
 * your previously declared variables!
 */


/**
 *  #3
 *  Function - subtract
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function takes two number arguments, `num1` and `num2`.
 * This function `returns` back a number that is equal to `num2`  
 * minus `num1`. Store the return value in a variable named 
 * `difference`.
 *
 * Note that you can reuse the same parameter names without issue!
 */


/**
 *  #4
 *  Function - multiply
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 *  This function returns the result of multiplying `num1` by `num2`.
 *  Store the return value in a variable named `product`.
 */


/**
 *  #5
 *  Function - checkDifference
 *
 *    @param Datatype: Number `X`
 *    @return Datatype: String
 *
 *  This function returns the string
 *  "My football team lost X times this week", where `X` is the
 *  value of the parameter.
 *  Invoke this function using the variable `difference` as 
 *  the parameter.
 */


/**
 *  #6
 *  Function - checkSum
 *
 *    @param Datatype: Number `X`
 *    @return Datatype: String
 *
 *  This function returns the string
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  of the parameter.
 *  Invoke this function using the variable `sum` as 
 *  the parameter.
 */


/**
 *  #7
 *  Function - checkProduct
 *
 *    @return Datatype: Number
 *
 *  This function does not require any parameters.
 *  This function checks the value stored at `product` and
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 *
 *  Can you see how to use a previously-created function to help?
 */


/**
 *  #8
 *  Function - addThenSubtract
 *
 *    @param Datatype: Number `numA`
 *    @param Datatype: Number `numB`
 *    @param Datatype: Number `numC`
 *    @return Datatype: Number
 *
 *  This function takes three `Number` arguments,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */


/**
 *  #9
 *  Function - addThenMultiply
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

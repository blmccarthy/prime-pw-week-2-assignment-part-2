// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Variable "name" is created and assigned a string value: "Dane"
// Conditional is requested to see if "name" variable (Dane) exactly matches "Mary"
// The first action is skipped as the condition is not met, nothing is logged
// The "else" condition is executed, resulting in the log "How do you do?" to display

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Variable "secret" created with no value
// Variable "code" is assigned value: 123
// Conditional is created to see if code matches exactly "123". Since it matches, the code block is executed
// Variable "secret" is assigned string value: "super"
// Variable "code" also assigned new value: 246
// Conditional checks to see if "code" is greater than 250
// Condition is not met since 246 is not greater than 250, code block is not executed
// Console log displays "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Variables 'isStudent', 'age', and 'zip' are assigned values
// 1st condition checks if you are a student AND if zip is greater than 80000
// both conditions are not met so we move down the stack
// 2nd condition checks if we are not a student OR under 30
// Neither condition is met so we move down the stack
// 3rd condition checks only if we are a isStudent
// Condition is met and console logs "Welcome to Prime"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - values colorOne and colorTwo are reversed
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorTwo should also be assigned value 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
// FIX - I believe "time" should be a variable, not a constant
let temp = 40;
const time = 4;

// FIX - condition should be an 'and' statement (&&), not or (||) since we only
// want the code block to execute if both conditions are met
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - Condition is incorrect. The current condition will display "no entry" if age >= minAge.
// We only want to display "no entry" if age < minAge. The if and else logs should be swapped.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

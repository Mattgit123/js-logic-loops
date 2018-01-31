console.log('JS LOGIC LOOPS');

if ('foo'==='foo') {
  console.log('Of course these strings are equal!');
  // alert ( 'hello there !')
}

if (5>10) {
console.log('You will NEVER see this.');
}else {
  console.log('You will always see this!');
}
//-------------------------------------------------------
//Write a new if statement
//that checks if a number stored in a var
// is greater than 100.
var num = 10;

if (num > 100) {
  console.log('It is true!');
} else {
  console.log( num + ' is not greater than 100');
}
//---------------------------------------------------------------

//If the var is NOT > 100, let the user know wkat it was.
var num1 = 50;
if (!(num1 > 100)) {
  console.log('It is less!');
} else {
  console.log('It is greater!');
}

//----------------------------------------------------------------

// is a string stored in a variable, the same as another string?
var myString = 'foo';
if (myString ==='foo') {
  console.log('Hey, here you are.');
}else {
  console.log('You are in the else.');
}

//-------------------------------------------------------------

// The else if statement.

if (5<4) {
  console.log('You will not end up here');
}else if (5>=5){
  console.log('You will end up here.');
}else {
  console.log('You will not end up here either.');
}
//----------------------------------------------------------
// Functions:
// A function that returns something.
function topSpeed() {
  return 75 + 5; // will return 80.
}

console.log(topSpeed()); // logs the number 80 to the console.

// write a fumction that accept arguments.
//This now means that we are required to provide values for those args.
// When we invoke the funtion.

function addNumbers(num1, num2) {
  return (num1 + num2); // The values of my args are now used as vars inside my function.
}
console.log(addNumbers(100, 3000));

//Returns true
if (addNumbers(50, 50) === 100) {
  console.log('Congrats !!');
}

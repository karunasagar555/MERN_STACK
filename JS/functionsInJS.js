// //Function Statement aka Function Declaration

// a();
// function a(){
//     console.log("a called");
// }


// //Function Expresions -> here we are using Anonymous function

// b(); 
// var b = function(){
//     console.log("b called");
// }


// //Anonymous Function - a function without a name -- these are used in a place where functions are used as values.
// //we can use anonymous functions and assign it/them to a variable

// function () {

// }


// Named Function Expressions - we don't use an Anonymous function here instead we use function with a name

var b = function xyz() {
    console.log("called");
}
b();



// Difference between Function Parameters & Function Arguments

var b = function xyz(Param1, Param2) {
    console.log(" b called");
}
b(Arg1,Arg2);

// First Class Functions - the ability to use functions as values is what is called First class Functions (functions can be passed as arguments inside another function, functions can be returned from another function)
















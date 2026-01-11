// TOPIC 2: FUNCTIONS 
//Q.1. A function to greetuser
function greetUser (name) {
    return "Hello " + name + "! Welcome to JavaScript.";

}
console.log (greetUser (" Nirjala"));

//Q.2. Function to calculate area of rectangle 
function calculateArea (length, width) {
let area= length* width;
return area;
}
let result= calculateArea (5,8);
console.log ("Area of rectangle is",result);

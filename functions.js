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

// Q.3. Checking odd or even 
function isEven(num) {
    return num %2 ===0;
}
console.log ("Is 13 even?", isEven (13));

//Q.4. Convert Celsius to Fahrenheit
function celsiusToFahrenheit (celsius) {
    return (celsius*9/5) +32;
}
console.log ("5 degree C in Fahrenheit is", celsiusToFahrenheit(5));

// Q.5. Find maximum in array 
function findMax (numbers) {
    let max= numbers[0];
    for (let i=1; i<numbers.length; i++) {
        if (numbers[i] > max) {
            max=numbers[i];
        }
    }
    return max;
}
console.log ("maximum value:", findMax([3, 7, 2, 9, 1]));

// Q.6. Reverse a string 
function reverseString(text) {
    let reversed="";
    for (let i= text.length - 1; i>=0; i--) {
        reversed+=text[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

//Q.7. Create a username
function createUsername (firstname, lastname="user") {
    return (firstname + "_" + lastname). toLowerCase();
}

console.log (createUsername("Nirjala", "Tripathi"));




// TOPIC 1: ADVANCED LOOPS
// Q.1 Prime or  not 
let num=5;
let isPrime = true;
if (num <= 1) {
    isPrime= false;
}
else{
    for (let i=2; i<=Math.sqrt(num); i++) {
    if (num % i===0) {
        isPrime= false;
        break;
    }
    }
}
console.log (num+"is Prime:",isPrime);

// Q.2. Write a program that takes a number and reverses it using loop.
let originalNumber= 9876;
let reversedNumber=0;
while (originalNumber >0) {
    let digit =originalNumber % 10;
    reversedNumber= reversedNumber *10 + digit;
    originalNumber=Math.floor(originalNumber/10);

}
console.log ("Reversed number is", reversedNumber);

//Write a program to count how many digits are in a number using a loop 
 let digitNum= 1001;
 let count =0;
 while(digitNum > 0) {
    count++;
    digitNum= Math.floor (digitNum /10);
 }
 console.log ("Total digits are",count);
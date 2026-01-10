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

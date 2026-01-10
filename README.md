# Topic 1: Advanced Loops 
## Explanation of programs using loop:
### 1. Prime or not 
 Take any one number to check. If the number is lesser or equals 1 then it is not a prime, but for the condition other than 1 and less we use loop from 2 up to the sqr root of the number. 
 In this condition we use loop and check if the number is divisible or not. If the number cannot be divided by other any numbers it is prime. Then print the result. 
 ### 2. Reverse a Number
 We use a loop that takes the last digit using % 10 and adds it to a new number after multiplying the new number by 10. Then we remove the last digit from the original number using Math.floor(). This repeats until the original number becomes 0, and the reversed number is printed.
### 3. Count Number of Digits
We start with a number and a variable count to keep track of how many digits there are. Each time, we remove the last digit from the number and add 1 to count. When the number becomes 0, count has the total number of digits, and we print it.
### 4. Fibonacci Series
Decide how many numbers to print. We start with two numbers, and in each step, we print the first number and then find the next number by adding the two numbers together. Then, we move the second number to the first place and the new number to the second place. We keep repeating this until all the numbers are printed.
### 5. Square Star Pattern
 The outer loop goes through each row so we can make multiple rows. For each row, we start with an empty string called row. The inner loop adds one star at a time to the row until it has 5 stars.After a row is complete, we print it and repeat the process until the pattern is compete.
### 6. Star Pattern
This code prints a triangle of stars. For each row, we start with an empty line and add stars equal to the row number. After finishing the row, we print it. We repeat this for all rows, so the stars form a right-angled triangle.

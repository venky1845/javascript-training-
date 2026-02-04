// Q1: Check whether a number is between 10 and 50 using logical AND.
// Input: let num = 25
// Output: "Valid Number" or "Invalid Number"

let num=25
console.log((num>10 && num<50) ? "Valid number":"Invalid Number"); //output:Valid Number

// Q2: Check if a user is eligible to log in.
// Condition:
// username must be "admin"
// password must be "1234"
// Use logical AND.
let username=prompt("enter the username");
let password=prompt("enter the password");
if(username=="admin" && password=="1234"){
     console.log(`welcome ${username}!!`)
 }
 else{
     console.log("unable to sign in")
 }

//  Q3: Using ternary operator:
// Check if a number is even or odd.
let n=15;
console.log(n%2==0 ? `${n} is  a even number`:`${n} is a odd number`)

// Q4: What is the output?
// console.log((10 === "10") || (5 > 2) && !(3 < 1));
// Explain step by step.

console.log((10==="10")||(5>2)&&!(3<1));//output=true
/*
(10==="10")->false
checks both value and datatype
10 is a number, "10" is a string
So the result is false
*/

// (10==="10") -> false
/*
5 is greater than 2
So the result is true
*/

// (5>2) ->true
/*
3 is not less than 1
So the result is false
*/
// (3<1) -> false
/*
NOT false becomes true
*/
// !(3<1) → true
/*
true && true = true
*/
// (5>2)&&!(3<1) -> true
/*
Step 6: Evaluate OR (||)
false || true = true
*/


// Part 2 – Type Conversion


// Q5: Find the output and explain

console.log("5"+2);
/*
"5" is a string
+ operator with a string performs STRING CONCATENATION
So number 2 is converted to string "2"
"5"+"2"="52"
*/
// Output: "52"


console.log("5"-2);
/*
- operator works only with numbers
JavaScript converts string "5" into number 5
5-2=3
*/
// Output: 3

console.log("5"*2);
/*
* operator also works only with numbers
String "5" is converted to number 5
5*2=10
*/
// Output: 10

console.log("5"/2);
/*
/ operator works with numbers
String "5" is converted to number 5
5/2 =2.5
*/
// Output: 2.5

// Q6: Convert the following using explicit conversion:
// let value = "100";
// - Convert to Number
// - Convert to Boolean

let value=100;
let numvalue=Number(value);
console.log(numvalue);
console.log(typeof(numvalue));
let boolvalue=Boolean(value);
console.log(boolvalue)
console.log(typeof(boolvalue));


// Q7: Boolean conversion examples
console.log(Boolean(""));
/*
"" is an EMPTY string
Empty string is a falsy value
So Boolean("") becomes false
*/
// Output: false
console.log(Boolean(" "));
/*
" " contains a space character
It is NOT empty
Any non-empty string is truthy
So Boolean(" ") becomes true
*/
// Output: true
console.log(Boolean(0));
/*
0 is a falsy value in JavaScript
So Boolean(0) becomes false
*/
// Output: false
console.log(Boolean([]));
/*
[] is an empty array
But arrays are objects in JavaScript
All objects are truthy, even empty ones
So Boolean([]) becomes true
*/
// Output: true

// Part 3 – Conditional Statements
// Q8: Write a program:
// If marks >= 90 → Grade A
// If marks >= 75 → Grade B
// If marks >= 50 → Grade C
// Else → Fail
// Use if else if.

let marks=45;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=75 && marks<90){
    console.log("Grade B");
}
else if(marks>=50 && marks<75){
    console.log("Grade C")
}
else{
    console.log("Fail")
}

// Q9: Traffic Signal Program using switch case:
// "red" → Stop
// "yellow" → Ready
// "green" → Go
// Default → Invalid Signal
let color="default";
switch(color){
    case ("red"):
        console.log("STOP")
        break;
    case ("yellow"):
        console.log("Ready");
        break;
    case ("green"):
        console.log("Go");
        break;
    default :
        console.log("Invalid signal");
        break;
}

// Q10 (Nested If): Check eligibility:
// Age >= 18
// Height >= 160
// Weight >= 50
// If all true → "Selected"
// Else → show which condition failed.

let age=19;
let height=160;
let weight=40;
if(age>=18){
    if(height>=160){
        if(weight>=50){
            console.log("Selected");
        }
        else{
            console.log("minimum weight is above 50")
        }
    }
    else{
        console.log("minimum height is 160");
        
    }
}
else{
    console.log("minimum age is 18");
    
}

// Part 4 – Loops
// Q11: Print numbers from 1 to 20 using for loop.
console.log("Numbers 1 t0 20")
for(let i=1;i<=20;i++){
    console.log(i);
}
console.log(" OddNumbers 1 t0 20")
// Q12: Print only odd numbers from 1 to 20.
for(let i=1;i<=20;i++){
    if(i%2==1){
        console.log(i);
    }
}
// Q13: Using while loop:
// Print numbers from 10 to 1.
console.log("Numbers 10 t0 1 using while")
let maxnumber=10;
while(maxnumber>0){
    console.log(maxnumber);
    maxnumber--;
}

// Q14: Using do-while loop:
// Print numbers from 1 to 5.
// Q14: Print numbers from 1 to 5 using do-while loop
console.log("Numbers 1 t0 5 using Do while")
let i=1;
do{
    console.log(i); // prints the current value of i
    i++;            // increments i by 1
} 
while(i<=5);   // condition is checked after the loop runs

// Q15: Using for-of loop:
// Print each character from:
// let word = "STACKLY"
console.log("printing each character in stackly")
let word="STACKLY";
for(let i=0;i<word.length;i++){
    console.log(word[i]);
}

// Q16: Using for-in loop:
// Print both key and value from:
// let student = {
// name: "Arun",
// course: "MERN",
// duration: "6 months"
// }

let student={
    name:"Arun",
    course:"MERN",
    duration:"6 months"
}

for (let key in student) {
    console.log(`${key} : ${student[key]}`);
}

// Real-Time Questions
// RT-1: Login System
// If username = "admin" AND password = "1234" → "Login Success"
// Else → "Invalid Credentials"
// Use logical operator + ternary.
console.log((username=="admin"&&password=="1234") ? "Login Success":"Invalid Credentials");

// RT-2: Salary Bonus System
// If employee salary > 50000 AND experience > 3 years
// → Eligible for bonus
// Else → Not eligible

let empsalary=70000;
let experience=2;
if(empsalary>50000 && experience>3){
    console.log("Eligible for bonus")
}
else{
    console.log('Not eligible')
}

// RT-3: Shopping Discount
// If cart amount:
// >= 5000 → 20% discount
// >= 2000 → 10% discount
// < 2000 → No discount
// Use if-else if.

let cartamount=10000;
if(cartamount>=5000){
        console.log("20% Discount");
    }
else if(cartamount>=2000 ){
    console.log("10% Discount")
}
else if(cartamount<2000){
    console.log("No Discount")
}

// RT-4: Even/Odd Counter
// Count how many even numbers between 1 to 50.
let evencount=0;
let oddcount=0;
for(let i=1;i<=50;i++){
    if(i%2==0){
        evencount=evencount+1;
    }
    else{
        oddcount=oddcount+1;
    }
}
console.log(`The count of odd numbers between 1 to 50 is ${oddcount}`)
console.log(`The count of even numbers between 1 to 50 is ${evencount}`)

// RT-5: Dynamic Greeting System
// If hour between:
// 1–6 → Good Morning
// 7–12 → Morning
// 13–16 → Good Afternoon
// 17–19 → Good Evening
// Else → Good Night
let hour=23;
if(hour>=1 && hour<=6){
    console.log("Good Morning")
}
else if(hour>=7 && hour<=12){
    console.log("Morning");
}
else if(hour>=13 && hour<=16){
    console.log("Good Afternoon");
}
else if(hour>=17 && hour<=19){
    console.log("Good Evening");
}
else{
    console.log("Good night");
    
}

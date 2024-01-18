// exercise number 1
//Write a program that determines whether a person is eligible to vote 
//based on their age. If the person is 18 or older, 
//print "You are eligible to vote." Otherwise,
// print "You are not eligible to vote yet."

// let age = 20

// if(age >= 18){
// console.log("you are eligable to vote")
// }
// else {
//     console.log ("you're not eligible to vote")
// }

//exercise number2 
//Create a program that checks whether a given 
//string is empty or not. Print different messages based on the result.

let  Mystring = "";

if(Mystring !== ""){
    console.log("my string is not empty")
}
else {
    console.log ("my string is empty")
}

let number = 4;

if (number % 2 === 0) {
    console.log("number is even");
} else {
    console.log("number is odd");
}


//exercise
//Write a program to determine the greater of two numbers.
// let num1 = 5
// let num2 = 10
// if (num1  < num2){
//     console.log( ` ${num2} is greater than ${num1}`)
// }else if( num1 < num2) {
//     console.log(` ${num1} is greater than ${num2}`)
// }
// else {
//     console.log("number is even")
// }

//execricse
//Write a program that calculates the ticket price
// based on age with the following conditions: 
//age below 12 pay a ticket price of 5, 
//age below 18 pay a ticket price of 10,
// age below 60 pay a ticket price of 20,
// age over 60 play a ticket price of 15.
 let age = prompt("Enter your age:");
if (age < 12 ){
    console.log("pay a ticket price of 5")
}
else if(age < 18){
    console.log("pay a ticket price of 10")
}
else if (age < 60){
    console.log("pay ticket price of 20")
}
else if (age > 60){
    console.log("pay a ticket price of 15")
}
else{console.log("error !")}


//execrise
//Write a program that greets the user based on the time of day.
// Display good morning, good afternnon or good evening based on the time of day
// when you run the code.

let currentTime = new Date();
let hours = currentTime.getHours();
  


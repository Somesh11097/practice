// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
let admin, name; 
name = "John";
admin = name;
console.log( admin ); // "John"


//Create a variable with the name of our planet. How would you name such a variable?
const planet = "Earth";
console.log(planet)

//Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUserName = "Somesh";
console.log(currentUserName)

//data-Types
//Easy Questions
// 1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const num1 =5, num2=13, num3=7, num4=21, num5=48;
sum = num1+num2+num3+num4+num5;
console.log(sum);

// Write a program to take a number input from user and determine whether the number is odd or even.

prompt("Enter a Number");
var number;
if(number%2 ==0){
    console.log("Even Number");
}
else{
    console.log("Odd")
}


// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const n1 = 129;
const n2 = 251;
if(n1< n2){
    console.log("n2 is greater")

}
else{

    console.log("n1 is greater")
}

// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const m1 = parseFloat(prompt("Enter first number: "));
const m2 = parseFloat(prompt("Enter second number: "));
const m3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(m1 >= m2 && m1 >= m3) {
    largest = m1;
}
else if (m2 >= m1 && m2 >= m3) {
    largest = m2;
}
else {
    largest = m3;
}
console.log(largest);100

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.
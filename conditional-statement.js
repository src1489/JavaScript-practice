//conditional statement

//if statement
// let a = 16;
// if (a >=18){
//     console.log("You are eligible to vote");
// }

// if (a < 18){
//     console.log("You are not eligible to vote");
// }


// let mode = "dark";
// if(mode === "dark"){
//     color ="black";
// }

// if(mode === "light"){
//     color ="white";
// }

// console.log(color);


//if else statement
// let mode = "dark";
// if(mode === "dark"){
//     color ="black"; 
// }else{
//     color ="white";
// }

// console.log(color);


//q1) find the odd number or even number from the given number
// let num =9;
// if(num%2 === 0)
// {
//     console.log("The number is even");
// }
// else
// {
//     console.log("The number is odd");
// }


//3) if else if statement
let mode = "blue";
let color;
if (mode === "dark"){
    color = "black"; 
}else if (mode === "blue"){
    color = "blue";
}else if (mode === "green"){
    color = "green";
}else{
    color = "white";
}
console.log(color);

//q2)
let num = prompt("Enter a Number");
if(num%5==0){
    console.log("The number is divisible by 5");
    alert("The number is divisible by 5");
}
else{
    console.log("The number is not divisible by 5");
    alert("The number is not divisible by 5");
}

//prompt is used to take input from the user
//alert is used to display the message to the user

//q3)WAP which can give grade of the student based on the marks obtained by the student 
//A: 90–100, B: 70–89, C: 60–69, D: 50–59 and F: 0–49.

let score = prompt("Enter your score");
if(score >=90 && score <=100){
    console.log("Grade A");
}else if(score>=70 && score <=89){
    console.log("Grade B");
}else if(score>=60 && score <=69){
    console.log("Grade C");
}else if(score>=50 && score <=59){
    console.log("Grade D"); 
}   else{
    console.log("Grade F");
}   
alert("Your grade is: " + (score >=90 && score <=100 ? "A" : score>=70 && score <=89 ? "B" : score>=60 && score <=69 ? "C" : score>=50 && score <=59 ? "D" : "F"));


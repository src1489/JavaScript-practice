//Loops in JS
//loops r used to execute 1 piece of code again n again

//1) for loop
for (let i = 1; i<=5;i++){
    console.log("HII, Sneha"); //this will print 5 times
}
console.log("loop has ended");

//q1)calculate sum of 1 to n numbers
let n = prompt("Enter the number");
let sum = 0;
for(let i=1;i<=n;i++){
    sum=sum+i;
    console.log(sum);
}

//print 1 to 10 numbers
for(let i=1;i<=10;i++){
    console.log("i = ",i);
}

//2) while loop
let i=1;
while(i<=5){
    console.log("i = ",i);
    i++;
}

//3) do while loop
let j=1;
do{
    console.log("j = ",j);
    j++;
}while(j<=5);

//4) for of loop - used to iterate over arrays
let str ="SNEHA";
for(let char of str){
    console.log(char);
}
//output: S N E H A

//5) for in loop - used to iterate over objects
let student = {
    name: "Sneha",
    age: 20,
    cgpa: 7.5,
    passed: true
};

// for (let key in student) {
//     console.log(key);
// }
//output: name age cgpa passed

for (let key in student) {
    console.log(key, student[key]);
}
//output: name Sneha age 20 cgpa 7.5 passed true

//QS) print all the even numbers from 1 to 100
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//q3)guess the number game
let gameNumber = 25;

let userNumber = Number(prompt("Guess the game number"));

while (userNumber !== gameNumber) {
    userNumber = Number(
        prompt("Wrong number. Guess again")
    );
}

console.log("Congratulations! You entered the right number.");



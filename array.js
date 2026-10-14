//Arrays in js

//creating an array
let marks =[9,5,7,8,4];
console.log(marks); //output: [9,5,7,8,4]
console.log(marks.length); //output: 5 --Property of array to get the length of the array

//in JS arrays can hold different types of data 
let arr = [1, "hello", true, null, undefined, {name: "Sneha"}, [1,2,3]];
console.log(arr); //output: [1, "hello", true, null, undefined, {name: "Sneha"}, [1,2,3]]

//array Indices - arrays are zero indexed
console.log(marks[0]); //output: 9
console.log(marks[1]); //output: 5
console.log(marks[2]); //output: 7
console.log(marks[3]); //output: 8
console.log(marks[4]); //output: 4
console.log(marks[5]); //output: undefined -- as there is no index 5 in the array

//changing the value of an array
marks[0] = 10;
console.log(marks); //output: [10,5,7,8,4]

//Print all the elements of an array
let marks1 = [9,5,7,8,4];
for(let idx=0;idx<marks1.length;idx++){
    console.log(marks[idx]);
}
//output: 9 5 7 8 4

//for of loop
for(let ele of marks1){
    console.log(ele);
}
//output: 9 5 7 8 4

let cities = ["Mumbai", "Delhi", "Kolkata", "Chennai", "Hyderabad"];
for(let city of cities){
    console.log(city);
}
//output: Mumbai Delhi Kolkata Chennai Hyderabad

//Find the average of the following marks.
let mrks = [85,97,44,37,76,60];
let sum =0;
for(let ele of mrks){
    sum = sum + ele;
}
console.log(sum); //output: 413 
let avg = sum/mrks.length;
console.log(avg); //output: 83.6

//: Apply a 10% discount 
// Problem: Reduce every price in the original array by 10%. prices = [250, 645, 300, 900, 50];
let prices = [250, 645, 300, 900, 50]; 
for(let i = 0; i<prices.length;i++){
    let offer = prices[i]/10;
    prices[i]=prices[i]-offer;
}
console.log(`the new price is ${prices} after 10% discount`);
//output: the new price is 225,594.5,270,810,45 after 10% discount

//methods of array
//1) push() - used to add one or more elements to the end of an array
let fruits = ["apple", "banana", "orange"];
fruits.push("grapes");
console.log(fruits); //output: ["apple", "banana", "orange", "grapes"]

//2) pop() - used to remove the last element from an array

fruits.pop();
console.log(fruits); //output: ["apple", "banana", "orange"]

//3) toString() - used to convert an array to a string
let arr3 = [1,2,3,4,5];
arr3.toString();
console.log(arr3); //output: 1,2,3,4,5

//4) concat() - used to merge two or more arrays
let arr4 = [1,2,3,4,5];
let arr5 = [6,7,8,9,10];
let arr6 = arr4.concat(arr5);
console.log(arr6); //output: [1,2,3,4,5,6,7,8,9,10]

//5)unshift() - used to add one or more elements to the beginning of an array
let arr7 = [1,2,3,4,5];
arr7.unshift(0);
console.log(arr7); //output: [0,1,2,3,4,5]

//6) shift() - used to remove the first element from an array
arr7.shift();
console.log(arr7); //output: [1,2,3,4,5]    

//7) slice() - used to extract a part of an array and return it as a new array
//slice syntax: array.slice(start, end)
let arr8 = [1,2,3,4,5];
let arr9 = arr8.slice(1,3);
console.log(arr9); //output: [2,3]

//8) splice() - used to add or remove elements from an array
//splice syntax: array.splice(start, deleteCount, item1, item2, ...)
let arr10 = [1,2,3,4,5];
arr10.splice(2, 0, 'a', 'b');

//practice questions
//1)
let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
//task 1 : Remove the first company.
console.log(companies.shift());
console.log(companies); //output: ["Microsoft","Uber","Google","IBM","Netflix"]

//task 2: Replace "Uber" with "Ola".
console.log(companies.splice(1 , 1 ,"ola"));
console.log(companies); //output: ["Microsoft","ola","Google","IBM","Netflix"]

//task 3: Add "Amazon" to the end of the array.
console.log(companies.push("Amazon"));
console.log(companies); //output: ["Microsoft","ola","Google","IBM","Netflix","Amazon"]


console.log("Hello, World!");

console.log("hello, sneha !!!")

console.log("I am learning JavaScript and it's fun!");

//variables in JavaScript
// name = "Sneha";
// console.log(name);

let age = 25;
console.log("age"); //this will print the variable name not the value of the variable age.
console.log(age);

//variable Rules in JavaScript
//1. Variable names can only contain letters, digits, underscores, and dollar signs.

//2. Variable names must begin with a letter, underscore, or dollar sign.
//3. Variable names are case-sensitive (y and Y are different variables).
     fullname ="sneha";
     fullName = "Sneha";
     FULLNAME = "SNEHA"; //these are two different variables
     console.log(fullname);
     console.log(FULLNAME);
     console.log(fullName);

//4. Reserved words (like JavaScript keywords) cannot be used as variable names.

//variable Declaration in JavaScript
//1. var
//var is function scoped and can be redeclared and updated.
var city = "New York";
console.log(city);

var city = "Los Angeles"; //redeclaring the variable
console.log(city);

city = "Chicago"; //updating the variable
console.log(city);

//2. let - block scoped and can be updated but cannot be redeclared.
let country = "USA";
console.log(country);
//let country = "Canada"; //cannot redeclare the variable
//console.log(country);


country = "Canada"; //can update the variable
console.log(country);


//3. const - block scoped and cannot be updated or redeclared.
const pi = 3.14;
console.log(pi);

//pi = 3.14159; //cannot update the variable
//console.log(pi);
//const pi = 3.14159; //cannot redeclare the variable
//console.log(pi);

//Data Types in JavaScript

//1. Number - any number, positive or negative, integer or floating point.
let ag = 25;
let price = 19.99;
typeof ag; //number
typeof price; //number
console.log(typeof ag);
console.log(typeof price);

//2. String - any text, enclosed in quotes.
let name = "John Doe";
console.log(typeof name); //string

//3. Boolean - true or false.
let isStudent = true;
console.log(typeof isStudent); //boolean

//4. Undefined - a variable that has not been assigned a value. by default, a variable is undefined.
let email; //undefined
console.log(email); //undefined
console.log(typeof email); //undefined

//5. Null - a variable that has been explicitly assigned a null value.
let address = null;
console.log(address); //null
console.log(typeof address); //object (this is a known bug in JavaScript, null is not an object) 

//BigInt - a special numeric type that can represent integers with arbitrary precision.
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); //bigint
console.log(bigNumber); //1234567890123456789012345678901234567890n

//Symbol - a unique and immutable primitive value that can be used as the key of an object property.
let sym = Symbol("id");
console.log(typeof sym); //symbol
console.log(sym); //Symbol(id)

// what is immutable primitive value? - An immutable primitive value is a value that cannot be changed once it is created. In JavaScript, strings, numbers, booleans, null, undefined, and symbols are all immutable primitive values. This means that when you create a variable with one of these types, you cannot change the value of that variable directly. Instead, you can create a new variable with a new value.

//Non-primitive data types in JavaScript

//1. Object - a collection of key-value pairs.
const student ={
    name:"Sneha",
    age:22,
    gender:"female",
    cgpa:8.9,
    isPass:true,
}

console.log(student); //{ name: 'Sneha', age: 22, gender: 'female', cgpa: 8.9, isPass: true }   
console.log(student["name"]); //Sneha
console.log(student.name); //Sneha

console.log(student.name = "Riya"); //Riya
//const objject key value pair ko update kar sakte hai but object ko reassign nahi kar sakte hai.
//student = {name:"Riya", age:23, gender:"female", cgpa:9.1, isPass:true}; //cannot reassign the object
//console.log(student); //error

//practice question 
//Create a product object
//Store a product name, rating, price, and discount in an object. Print each property

const product ={
    name:'parker ball pen',
    rating:4,
    offer:'20% off',
    price:100,
}

console.log(product);

//q2
const profile ={
    username:'sneha',
    followers: 1000,
    following:600,
    isfollowing:true,
    numberofposts: 100,
    bio:'I am a software engineer',
}

console.log(profile);



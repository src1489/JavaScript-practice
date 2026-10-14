//Strings in JavaScript
//Strings are used for storing and manipulating text. In JavaScript, strings can be defined using single quotes (' '), double quotes (" "), or backticks (` `).
let str1 = "Hello";
let str2 = 'World';
let str3 = `Welcome to JavaScript`;
 //string length
console.log(str1.length); // Output: 5

//uppercase and lowercase
console.log(str1.toUpperCase()); // Output: HELLO
console.log(str1.toLowerCase()); // Output: hello

//indexing and accessing characters
console.log(str1[0]); // Output: H
console.log(str1[1]); // Output: e
console.log(str1[2]); // Output: l
console.log(str1[3]); // Output: l
console.log(str1[4]); // Output: o

//Template literals - used to embed expressions inside strings
let specialString =`This is a template literal `;
console.log(specialString); // Output: This is a template literal

let obj={
    item:"pen",
    price: 10
};

let output = `The  cost of ${obj.item} is $(obj.price) rupees`;
console.log(output); // Output: The cost of pen is 10 rupees

console.log(`The answer is ${1 + 2 + 3}`);
// Output: The answer is 6

//String methods
//1) concat() - used to concatenate two or more strings
let str4 = "Hello";
let str5 = "World";
let str6 = str4.concat(" ", str5);
console.log(str6); // Output: Hello World

//2) includes() - used to check if a string contains a specified substring
let str7 = "JavaScript is awesome";
console.log(str7.includes("awesome")); // Output: true
console.log(str7.includes("Java")); // Output: true
console.log(str7.includes("Java", 5)); // Output: false

//3) indexOf() - used to find the index of the first occurrence of a specified substring
let str8 = "Hello World";
console.log(str8.indexOf("World")); // Output: 6
console.log(str8.indexOf("Hello")); // Output: 0
console.log(str8.indexOf("Hello", 5)); // Output: -1

//4) lastIndexOf() - used to find the index of the last occurrence of a specified substring
let str9 = "Hello World";
console.log(str9.lastIndexOf("World")); // Output: 6
console.log(str9.lastIndexOf("Hello")); // Output: 0
console.log(str9.lastIndexOf("Hello", 5)); // Output: -1

//5) replace() - used to replace a specified substring with another substring
let str10 = "Hello World";
console.log(str10.replace("World", "JavaScript")); // Output: Hello JavaScript

//6) search() - used to search for a specified substring and returns the index of the first match   
let str11 = "Hello World";
console.log(str11.search("World")); // Output: 6
console.log(str11.search("Hello")); // Output: 0
console.log(str11.search("Hello", 5)); // Output: -1

//7) slice() - used to extract a part of a string and return it as a new string
let str12 = "Hello World";
console.log(str12.slice(0, 5)); // Output: Hello
console.log(str12.slice(6)); // Output: World

//8) split() - used to split a string into an array of substrings based on a specified separator
let str13 = "Hello World";
console.log(str13.split(" ")); // Output: ["Hello", "World"]
console.log(str13.split("")); // Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

//9) substring() - used to extract a part of a string and return it as a new string
let str14 = "Hello World";
console.log(str14.substring(0, 5)); // Output: Hello
console.log(str14.substring(6)); // Output: World

//10)trim() - used to remove whitespace from both ends of a string
let str15 = "   Hello World   ";
console.log(str15.trim()); // Output: "Hello World"

let str16 = "01234567";
console.log(str16.slice(3,6)); // Output: 345


// Generate a username
// The final practice problem asks you to take a full name from the user and create a username in this format:
// @ + full name + full name's length
// For example, if the entered name is Sneha, the result is @Sneha5.

let fullName = prompt("Enter the Full Name ");

let username = "@" + fullName + fukkName.length;
console.log(username);
// Output: @Sneha5
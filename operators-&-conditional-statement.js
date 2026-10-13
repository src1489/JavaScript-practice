//4) Logical Operators
//Logical operators are used to combine multiple conditions and return a boolean value (true or false).

//AND (&&) operator returns true if both conditions are true.
let x = 5;
let y = 10;
console.log(x < y && y > x); // true    
console.log(x < y && y < x); // false

//OR (||) operator returns true if at least one condition is true.
console.log(x < y || y < x); // true
console.log(x > y || y < x); // false

//NOT (!) operator returns the opposite of the condition.
console.log(!(x < y)); // false
console.log(!(x > y)); // true



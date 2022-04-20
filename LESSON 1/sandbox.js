// // alert('Hello Huzain, Welcome to the world of javascript')

// let age = 25;
// let year = 2000;
// console.log (age, year);

// age = 30;
// console.log(age);

// const points= 1002;

// console.log (points);

//string concatenation 
email = ("tinuoshohuzain@yahoo.com")
firstName = ("romaneo");
lastName = ("anderson");
fullName = (firstName + " " + lastName);
console.log(fullName);

//getting characters
console.log(fullName[0]);
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());

let index = email.indexOf("@");
console.log(index);

//slice method
let result = email.slice(0,10);
console.log(result);

//making a substring
let result2 = email.substr(4,10);
console.log(result2);

//replace method 
let result3 = email.replace("t" , "w");
console.log(result3);

//replace method2 
let result4 = email.replace("o" , "m");
console.log(result4);

//Datatypes in javascript
/////mathematical operators
let radius = 10;
let pi = 3.14;

console.log (radius % 3);

//another 
let result5 = pi * radius **2;
console.log (result5)

//NAN - not a number 

//template strings 
const title = "Best reads of 2019";
const author = "mario";
const likes = 30;

//concatenation way 
let result6 = "the blog titled " + title + " by " + author + " has " + likes + " likes";
console.log (result6);

//template string way 
let result7 = `the blog titled ${title} by ${author} has ${likes} likes`;
console.log (result7);

//array 
let ninja = ["mike" , "enoch", "ade"];
console.log (ninja[1]);

//overriding values 
let naija = ["mike" , "enoch", "ade"];
naija[1]= "adeleke";
console.log (naija);

//counting elements in an array
console.log(ninja.length)

//array methods 
//join method 
let result9= ninja.join(",");
console.log(result9);
//getting the index 
let result10 = ninja.indexOf("enoch");
console.log(result10);

//using concat to join two arrays together
let result11 = ninja.concat(["bimpe" , "ademide ", "tola"]);
console.log (result11);

//push method - pushes a new value onto the array ('also called a destructive method')
let result12 = ninja.push("kenny");
console.log (result12); 

//pop method - takes off the end value 
let result13= ninja.push("haleemat");
console.log(ninja);
result13 = ninja.pop();
console.log(result13);
console.log(ninja)
//booleans and comparism
console.log (true , false , "true" , "fal")

//methods and booleans 
let mail = "tinuoshohuzaink@gmail.com";
let newresult = mail.includes("!");
console.log (newresult);
//works for array also
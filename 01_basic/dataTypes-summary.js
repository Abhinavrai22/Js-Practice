// Data types 
// 2 Types of data types 
// Primitive and non-primitive

// Primitive

// number => number
// string => object
// bigInt => number
// boolean => boolean
// null => object
// undefined => undefined
// symbol => symbol


// non-Primitive

// object => object
// array => object
// Function => object Function


const isLoggedIn = false
const outsidetemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);

console.log(id===anotherId);



// ----------------------------------------------Memory-----------------------------------------------


// There are two type of memory in the javascript 
// Stack and Heap 


// Stack(Primitive); Heap(Non-Primitive)


let name = "Abhinav RAi"

let nickName = name

nickName = "Abhi"



console.log(name); // here all the data which is stored in the stack used copy of original data to make changes
console.log(nickName);// so the value of original is not changed 

let userOne ={
    email: "abhinavrai2014@gmail.com",
    age: 24
}

let userTwo = userOne

userTwo.email = "abhi022rai@gmail.com"

console.log(userOne.email);// while in heap the memory gives the original data to change the value
console.log(userTwo.email);// so here both value is changed because of original data is manipulated 







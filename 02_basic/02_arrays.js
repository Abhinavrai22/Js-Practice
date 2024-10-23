const twoDArr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const oneDArr = twoDArr.flat(Infinity)

console.log(oneDArr);


console.log(Array.isArray("Abhinav Rai"));
console.log(Array.from("Abhinav Rai"));
console.log(Array.from({name:"Abhinav Rai"}));


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));

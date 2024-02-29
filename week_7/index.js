"use strict";
function greet(person) {
    return "Hi mr " + person.name + " age : " + person.age;
}
console.log(greet({
    name: "rohan",
    age: 24
}));
// console.log(greet({
//     name:'rohan',
//     age: 24,
//     genderProps : {
//         gender : "MALE",
//         orientation : "straight",
//         pronous : "he/him",
//     }
// }))
// class Person implements PersonInterface{
//     name : string;
//     age : number;
//     constructor(name:string, age:number){ 
//         this.name = "rohan";
//         this.age = 21;
//     }
//     greet(){
//         return "h1 mr "+this.name;
//     }
// }
// const personObj = new Person("rohan", 24);
// console.log(personObj.greet());
// function greet(person : PersonInterface) : string{
//     return "Hello Mr "+person.name+" of age : "+person.age
// }
// function greet(person : {
//     name : string;
//     age : number
// }) : string{
//     return "Hello Mr "+person.name+" of age : "+person.age
// }
// console.log(greet({
//     name : "rohan",
//     age : 21
// }))
// console.log(greet({
//     name : "rohan",
//     age : 21
// }))
// function calculate(
//     a : number, 
//     b : number, 
//     type : "sum" | "sub" | "mul" | "div"
// ) : number{
//     if(type === 'sum'){
//         return a+b;
//     }
//     else if(type === 'sub'){
//         return a-b;
//     }
//     else if(type === 'mul'){
//         return a*b;
//     }
//     else
//         return a/b;
// }
// console.log(calculate(1,4,"sum"));

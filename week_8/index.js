// type NumberArr = (string | number)[];
// function getFirstElement(arr : (string | number)[]) : (string | number){
//     return arr[0];
// }
// let ans1 = getFirstElement([1,2,4]);
// let ans2 = getFirstElement(["one", "two", "three"]);
// console.log(ans1);
// console.log(ans2);
// type User = {
//     name : string,
//     age : number
// }
// function getFirstElement<T>(arr : T[]){
//     return arr[0];
// }
// let ans1 = getFirstElement<number>([1,2,4]);
// let ans2 = getFirstElement<string>(["one", "two", "three"]);
// let ans3 = getFirstElement<User>([{
//     name : "rohan",
//     age : 24
// }, {
//     name : "akash",
//     age : 26
// }]);
// console.log(ans1);
// console.log(ans2.toUpperCase());
// console.log(ans3);
function swap(a, b) {
    return [b, a];
}
var ans1 = swap(2, "one");
var ans2 = swap("two", 1);
console.log(ans1);
console.log(ans2);

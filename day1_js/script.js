// let x="15";
// console.log(x);
// console.log(typeof x);
// console.log(typeof typeof x);

// let y = true;
// console.log(y);

// let a = null;
// console.log(a);
// console.log(b);

// console.log(null == undefined);
// console.log(null === undefined);

// something();
// function something(){
//     var a = 10;
//     console.log(a);
// }
// var a = 20;
// console.log(a);

// let x = 2;
// console.log(x>5? "True":"False");


// let grade = 80
// if (grade >= 90) {
//     console.log("Your grade is A");
// }
// else if (grade >= 80) {
//     console.log("Your grade is B");
// }
// else if (grade >= 70) {
//     console.log("Your grade is C");
// }
// else{
//     console.log("Your grade is D");
// }

// console.log(grade>80? "A":"B");

//switch case
// grade = 90;
// switch (grade) {
//     case 90:
//         console.log("Your grade is A");
//         break;
//     case 80:
//         console.log("Your grade is B");
//         break;
//     case 70:
//         console.log("Your grade is C");
//         break;
//     default:
//         console.log("You didn't pass");
// }

//loop
// let x = 15;
// while(x <= 22){
//     console.log(x);
//     x++;
// }

// x = 15;
// do{
//     console.log(x);
//     x++;
// }while(x <= 22);

//function
// function something(){
//     console.log("Am doing work");
// }
// something();

// function multiply(a, b){
//     return a*b;
// }
// y = "The multiply is " + multiply(2, 3);
// console.log(y);

// var x = () => {
//     console.log("Am doing work in wlit");
// }
// x();

//task 1
// function checkNumber(num){
//     if (num > 0){
//         console.log("The number is positive");
//     }
//     else{
//         console.log("The number is negative");
//     }
// }
// checkNumber(-5);

//task 2
// let a = [10, 2, 30, 5, 6];
// var findlargest = (a) => {
//     let max = a[0];
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] > max) {
//             max = a[i];
//         }
//     }
//     return max;
// }
// //console.log(Math.max(...a)); spread operator, hoisting
// console.log(findlargest(a));

//objects
// let person = {
//     name: "Aarya",
//     age: 20,
//     address: "ktm",
// }
// console.log(person);
// person.semester = 6;
// console.log(person);

//task 3
let area = {
    length: 10,
    breadth: 5,
    rectangleArea: function(){
        console.log("The area of rectangle is:" + this.length * this.breadth);
    },
    squareArea: function(){
                console.log("The area of rectangle is:" + this.length * this.length);
    }
}
area.rectangleArea();
area.squareArea();

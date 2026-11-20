//Task 1 
//Write a JavaScript function that accepts a number as a parameter and checks whether the number is positive or not.
function checkNumber(num){
    if(num > 0){
        console.log(num + " is a positive number.");
    }
    else if(num < 0){
        console.log(num + " is a negative number.");
    }
    else{
        console.log(num + " is zero.");
    }
}
checkNumber(5);


//Task 2
//Write a JavaScript function to find the largest number in an array given as the parameter. (Use arrow function).
let arr = [50, 20, 5, 100, 60];
const findlargest = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max + " is the largest number in the array.");
}
findlargest(arr);


//Task 3
//Write a program to find the area of a cylinder using JavaScript objects (radius, height and the area function should be in the object). (Area of a Cylinder= pi*r^2*h)
let cylinder = {
    radius: 5,
    height: 10,
    area: function(){
        const pi = 3.14159;
        let area = pi*this.radius^2*this.height;
        console.log("The area of the cylinder is " + area);
    }
}
cylinder.area();

//Task 4
//Write a program to find the area of a square and a rectangle using JavaScript objects with a common area function. (Use this keyword). (Area of a Rectangle/Square = length * breadth)
let area = {
    length: 10,
    breadth: 5,
    rectangleArea: function(){
        console.log("The area of rectangle is: " + this.length * this.breadth);
    },
    squareArea: function(){
        console.log("The area of square is: " + this.length * this.length);
    },
}
area.rectangleArea();
area.squareArea();


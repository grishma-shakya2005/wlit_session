//DOM Manipulation
// updating Elements

const title = document.querySelector("#heading");
// console.log(title);

title.style.color = "red";
title.textContent = "Things WE like to do";
// console.log(title);

const items = document.querySelectorAll(".item-list");
console.log(items);

// for (let i = 0; i < items.length; i++) {
//    items[i].style.fontWeight = "bold";
//     // items[i].style.color = "red";
// }

//approach 2
items.forEach((item) => {
    item.style.fontweight = "bold";
})
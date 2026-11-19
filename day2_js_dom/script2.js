//DOM Manipulation

//Creating elements
const ul = document.querySelector("ul");
console.log(ul);
const li = document.createElement("li");
console.log(li);


//Appending elements
ul.append(li);


//Modifying Texts
li.innerHTML = "Texting";

li.setAttribute("id", "heading");

li.remove();
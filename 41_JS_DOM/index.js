console.log("hello World");

// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.children);
// console.log(document.body.firstElementChild.children[1].nextElementSibling);
// console.log(document.body.firstElementChild.children[1].previousElementSibling );


//  selecting by id classname....
let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="red";
 

let green=document.getElementById("green");
green.style.backgroundColor="green"


//query selector

document.querySelector(".box").style.backgroundColor="blue";// its select first match elements

// document.querySelectorAll(".box").style.backgroundColor="yellow";// it will not work as it return list nodes 

let b=document.querySelectorAll(".box")
b.forEach(element => {
    element.style.color="yellow";
});

// document.getElementsByTagName("div");
console.log(document.getElementsByTagName("div"));

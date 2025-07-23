let text=document.querySelector(".box").innerHTML;
console.log(text);

let Innertext=document.querySelector(".box").innerText="Vikas";
console.log(Innertext);



let Ouutertext=document.querySelector(".box").outerHTML;
console.log(Ouutertext);

console.log(document.querySelector(".box").nodeName);
console.log(document.querySelector(".box").tagName);

let value=document.querySelector(".box").hasAttribute("Style");
console.log(value);

let value2=document.querySelector(".box").getAttribute("style");
console.log(value2);

document.querySelector(".box").setAttribute("style","color:green");
console.log(document.querySelector(".box").attributes);


document.querySelector(".box").removeAttribute("style");

// Design Mode
// document.designMode="on"// to edit entire webpage
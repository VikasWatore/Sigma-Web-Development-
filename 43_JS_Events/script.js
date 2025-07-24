let button = document.getElementById("btn");

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b> you have clicked</b>"
});

button.addEventListener("contextmenu",()=>{
    alert("dont try to click right button");
})

document.addEventListener("keydown",(e)=>{
    console.log(e);
    
})
console.log("Avenge Asssemble");

console.log("why so serious!!!!!!");

setTimeout(()=>{
console.log("with great power great responsiblity comes.");

},1000)
console.log("tata bye bye khatam!!!");


const callback=(arg)=>{
    console.log(arg);
    
}

const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Vikas");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
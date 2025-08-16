// import {a,b,c,} from "./mymodules.js"
// console.log(a);
// console.log(b);
// console.log(c);
// import obj  from "./mymodules.js";
// console.log(obj);//default Export

// function(exports, require, module,__filename,__dirname) {
//     // module code actually live here
// }

const a=require("./mymodules2.js");
console.log(a);
console.log(a,__filename,__dirname);

import fs from "fs/promises"

let a=await fs.readFile("Vikas.txt");
console.log(a.toString());

let b=await fs.appendFile("Vikas.txt","This promise ")
console.log(b);

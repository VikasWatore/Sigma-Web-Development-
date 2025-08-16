const fs = require("fs");
const path = require("path");
// console.log(fs);

console.log("Start");
// fs.writeFileSync("vikas.txt","Vikas is good boy");
fs.writeFile("Vikas.txt", "Vikas is Great Coder", () => {
    console.log("done")
    fs.readFile("Vikas.text", (error, data) => {
        console.log(error, data.toString());

    })
})



fs.appendFile("Vikas.txt", "and intelligent", (e, d) => {
    console.log(d);

})
console.log("End");

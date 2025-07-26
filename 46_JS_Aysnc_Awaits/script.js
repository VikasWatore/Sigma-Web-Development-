function getData() {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(455)
        }, 3500);
    })
}

console.log("Loading Module");
console.log("Do something else");

console.log("load data");
// frist appraoch as the function return the promise we can use then() 
let data= getData()
data.then(()=>{

    console.log(data );
    
    console.log("process data");
})



// approach 2
async function getData2(params) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(455);
        }, 3500);
    })
}

async function main(params) {
    // always use await in async functions.......
    let data2=await getData2();
    console.log(data2);
    
}

main();

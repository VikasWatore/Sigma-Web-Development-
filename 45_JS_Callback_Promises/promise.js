console.log("This is Promise");

let porm=new Promise((res,rej)=>{
    let a=Math.random();
    if(a<0.5){
        rej("No Random was supporting you")
    }else{

        setTimeout(()=>{
            console.log("yes i am done");
            res("vikas");
        },3000)
    }
})

// porm.then((e)=>{
//     console.log(e);
// }).catch((e)=>{
//     console.log(e);
// })


let porm2=new Promise((res,rej)=>{
    let a=Math.random();
    if(a<0.5){
        rej("No Random was supporting you 2")
    }else{

        setTimeout(()=>{
            console.log("yes i am done 2");
            res("vikas 2");
        },1000)
    }
})


//promise all :waits for both to reslove.
// let p3=Promise.all([porm,porm2])
// p3.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

//all Settled: it give the satuts of both promises..
// let p3=Promise.allSettled([porm,porm2])
// p3.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
// })


// race:waits for he first promise to settle and its res/req become the outcome
let p3=Promise.race([porm,porm2])
p3.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
})
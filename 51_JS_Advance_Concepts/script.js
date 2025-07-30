async function sleep() {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(45);
        }, 1000);
    })
}

function sum(a,b,c) {
    return a+b+c;
}

//IIFE
(async function main() {
    
    // let a=await sleep();
    // console.log(a);
    
    // let b=await sleep();
    // console.log(b);

    //rest Operator
    let [x,y,...rest]=[1,5,7]
    console.log(x,y,rest);
    
    //destructuring
    let obj={
        a:1,
        b:2,
        C:3
    }

    let {a,b}=obj
    console.log(a,b)

    let arr=[1,4,5];
    console.log(sum(arr[0],arr[1],arr[2]));
    //spread operator
    console.log(sum(...arr));
    })();





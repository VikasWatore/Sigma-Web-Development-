// Map filter Reduce
let a=[1,3,7,11];
// let newarr=[];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];

//     newarr.push(element)
    
// }
// console.log(newarr);
//map
let newarr=a.map((e)=>{
    return e**2;
})
console.log(newarr);

console.log(newarr.filter((e)=>{
    if (e>7) {
        return true
    }
    return false
}));


// reduce method reduce to single  value element

let arr2=[1,2,3,4,5,6]

const red=(a,b)=>{
return a*b;
}

console.log(arr2.reduce(red));

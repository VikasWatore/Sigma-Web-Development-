let a=[1,335,4,5,6];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }

// for each loop
// a.forEach((value,index,arr) => {
//     console.log(value,index,arr);
    
// });

// for in loop
// let obj={
//    name :"vikas",
//    job  :"developer",
//    salary:10000000
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
        
//     }
// }

for (const element of a) {
    console.log(element);
    
}
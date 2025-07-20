function greet(name) {
    console.log("hey " + name + "your are good!");
    console.log("hey " + name + "your Looks are great!");
    console.log("hey " + name + "your are nice guy!");
}

greet("vikas");


function sum(a,b,c=1){
    // console.log(a+b);
    return a+b+c
}

// add(5,6);

res1=sum(1,2);
res2=sum(3,4);
res3=sum(5,6,2);

console.log("The sum of these number is : "+res1);
console.log("The sum of these number is : "+res2);
console.log("The sum of these number is : "+res3);

const func1=(x)=>{
    console.log("I am an Arrow Function",x);   
}
func1(41);
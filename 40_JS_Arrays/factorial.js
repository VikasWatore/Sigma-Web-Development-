
let num = 6

function Facfor(number) {
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1).reduce((a, b) => a * b )
    return c;
}

function fac(num) {

    let fac = 1;
    for (let index = 1; index <= num; index++) {
        fac = fac * index;

    } return fac;
}

console.log(
    
    Facfor(num)
);

console.log(

    fac(num)
);

let arr=[1,2,3,4,5,6]
// index 0 1 2 3 4 5
// arrays are mutable 
arr[5]=7;
console.log(arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[4]);
console.log(arr.toString());//1,2,3,4,5,7
console.log(arr.join(" And ")); //1 And 2 And 3 And 4 And 5 And 7


console.log(arr.pop());

arr.push(7)
console.log(arr);


console.log(arr.shift());// remove the first element
console.log(arr.unshift('A'));// add element at starting index
console.log(arr);

delete arr[5];//it deletes the item but its allocated space remains in array and type becames undifined.
console.log(arr);


let a1=[1,2,3,4];
let a2=[11,12,13,14];

console.log(a1.concat(a2))// it does not existing array it return new array


splice
let numbers=[1,2,3,4,5,6];
numbers.splice(1,2); // it will delete the items it form index 1 and number of items i.e 2 
console.log(numbers);//[1,4,5,6]

numbers.splice(0,2,22,11)// after number f items , it will add i.e 22 11
console.log(numbers);

slice

const num=[1,2,3,4,5,6]; 
console.log(num.slice(2));
console.log(num.slice(1,3));
console.log(num);

console.log(num.reverse());


// 2. The Double Trouble:  You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
let arr=[1,2,3,4,5,5,6];

function double_Trouble(arr) {
    let prev=null;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===prev){
            continue;
        }
        prev=arr[i]
        arr[i]=arr[i]*2;
    }
}
double_Trouble(arr)
console.log(arr);

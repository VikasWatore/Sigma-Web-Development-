console.log("hello World")
//settle means reslove or reject
//reslove means promise has settled succesfully 
//reject means promise has not be settled succesfully 



// async function getdata() {
//  let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//  let data=await x.json()
//    return data; 
// }

// post method of fetch
async function getdata(params) {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data=await x.json();
    return data;
}


async function main(params) {

    console.log("first process 1");
    console.log("second process 2");
    let data = await getdata()
    console.log(data);
    console.log("end");

}
main();



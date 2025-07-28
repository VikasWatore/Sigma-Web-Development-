let a =prompt("Enter a first number");
let b=prompt("Enter a second Number");
// let sum=a+b; //it will append no doing addition 
let sum=parseInt(a)+parseInt(b); // parseInt is function use to convert in number integer

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}

try {
    
    console.log("the sum is ",sum*x)
} catch (err) {
    console.log("hello bhai mein apka error");
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack); 
    
}


//  The finally block is helpful in functions where a return statement is used inside try or catch, as any code after the return won't be executed. However, if the function involves resources like a database connection or a network call, it's important to close them properly. In such cases, the finally block is useful because it always executes — even after a return

function fetchData() {
    try {
        console.log("Trying to fetch data...");
        return "Data fetched";
    } catch (error) {
        console.log("Error occurred:", error);
        return "Fetch failed";
    } finally {
        console.log("Cleaning up: Closing connection");
    }
}

let data=fetchData();
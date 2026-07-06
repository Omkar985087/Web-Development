let a = prompt("enter first number");

let b = prompt("enter second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed");
}

let sum = parseInt(a) + parseInt(b);


// try{
//     console.log("the sum is",sum*x);
// }
// catch(error){
//     console.log("error aa gaya bhai");
// }

// finally{
//     console.log("files are being closed and db connection is being closed")
// }

let x=1;
function main() {
    try {
        console.log("the sum is", sum * x);
        return true;
    }
    catch (error) {
        console.log("error aa gaya bhai");
        return false;
    }

    finally {
        console.log("files are being closed and db connection is being closed")
    }
}

let c = main();
console.log(c);
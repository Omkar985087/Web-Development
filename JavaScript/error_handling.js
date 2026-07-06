let a=prompt("enter first number");

let b=prompt("enter second number");

if(isNaN(a) || isNaN(b))
{
    throw SyntaxError("sorry this is not allowed");
}

let sum=parseInt(a)+parseInt(b);


try{
    console.log("the sum is",sum*x);
}
catch(error){
    console.log("error aa gaya bhai");
}
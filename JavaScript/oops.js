console.log("OOPS tutorial");

// let obj={
//     a:1,
//     b:"Omkar"
// }

// console.log(obj);

// let animal={
//     eats:true
// };

// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal

class animal{
    constructor(){
        console.log("object is created")
    }

    eats()
    {
        console.log("kha raha hoon")
    }
    jumps()
    {
        console.log("khud raha hoon");
    }
}

let a=new animal()
console.log(a);
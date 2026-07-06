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
    constructor(name){
        this.name=name
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

let a=new animal("Bunny")
console.log(a);

class lion extends animal
{
     constructor(name){
        super(name)
        console.log("object is created and he is lion")
    }
    eats()
    {
        super.eats();
        console.log("kha raha hoon roar")
    }
}

let l=new lion("sher")
console.log(l)
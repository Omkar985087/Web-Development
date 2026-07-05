console.log('Promise tutorial'); 

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5)
        reject("No it was not supporting")
    else
        setTimeout(() => {
        console.log("Yes i am done");
        resolve("omkar");
    }, 3000);
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
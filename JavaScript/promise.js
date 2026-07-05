console.log('Promise tutorial'); 

let prom1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Yes i am done");
        resolve("omkar");
    }, 3000);
})

prom1.then((a)=>{
    console.log(a);
})
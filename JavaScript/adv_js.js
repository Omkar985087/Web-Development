console.log("advanced javascript")

async function sleep()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455);
        }, 1000);
    })
}

(async function main()
{
    // let a=await sleep();
    // console.log(a);
    // let b=await sleep();
    // console.log(b);

    // let [x,y,...rest]=[1,5,5,3,65,73];
    // console.log(x,y,rest);

    let obj={
        a:1,
        b:2,
        c:3
    }

    let {a,b}=obj;
    console.log(a,b)
})()
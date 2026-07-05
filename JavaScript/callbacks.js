console.log("callbacks and promises tutorial");

setTimeout(()=>{
    console.log("i am inside settimeout");
},2000);

console.log("the end");

const callback=(arg)=>{
    console.log(arg);
}
const loadscript=(src,callback) => {
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Omkar");
    document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);

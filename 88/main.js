const fs=require("fs")

// console.log(fs)

console.log("starting")

// fs.writeFileSync("omkar.txt","omkar is a good boy")

fs.writeFile("omkar2.txt","omkar is good boy",()=>{
    console.log("done")
    fs.readFile("omkar2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("omkar.txt","omkarrobo",(e,d)=>{
    console.log(d);
})

console.log("ending")
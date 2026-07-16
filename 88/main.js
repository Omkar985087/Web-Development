const fs=require("fs")

// console.log(fs)

console.log("starting")

// fs.writeFileSync("omkar.txt","omkar is a good boy")

fs.writeFile("omkar2.txt","omkar is good boy",()=>{
    console.log("done")
})

console.log("ending")
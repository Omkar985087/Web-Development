const express=require("express")
const app =express()
const port=3000
const fs=require("fs")

// app.use(express.static("public"))

//middleware 2
app.use((req,res,next)=>{
    console.log(req.headers)
    req.omkar="I am omkar";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

//middleware 2
app.use((req,res,next)=>{
    console.log("M2")
    next()
})

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/about',(req,res)=>{
    res.send('Hello about '+req.omkar)
})

app.get('/contact',(req,res)=>{
    res.send('Hello contact!')
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
const express=require("express")
const app =express()
const port=3000

app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/about',(req,res)=>{
    res.send('Hello contact')
})

app.get('/contact',(req,res)=>{
    res.send('Hello contact!')
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
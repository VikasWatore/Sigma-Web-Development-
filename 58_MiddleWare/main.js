const express=require(`express`)
const fs=require("fs");
const app=express();
const port=3000;

app.use(express.static("public"))
//middle ware 1
app.use((req, res, next)=> {
        console.log(req.headers);
        req.vikas="Hello i am vikas";
        fs.appendFileSync("log.txt",`${Date.now()} is  a ${req.method}\n`)
        console.log(`${Date.now()} is a ${req.method}`);
        
    console.log('M1')
  next()
})

//middleware 2
app.use((req,res,next)=>{
    console.log(`m2`);
    next()
    
})

app.get('/',(req,res)=>{
    res.send("hello!!!!" +req.vikas)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
    
})
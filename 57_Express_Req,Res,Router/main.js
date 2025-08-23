const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
app.use('/blog', blog)
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   console.log("hey this is post request");
//   res.send(`hello world post`)
// })

// chaining of request
 app.get('/', (req, res) => {
  res.send('Hello World!')
}).post('/',(req,res)=>{
  console.log("hello post ");
  res.send(`hello from post`)
}).put('/',(req,res)=>{
  console.log("put");
  res.send(`hello from put`)
})


app.get('/index',(req,res)=>{
  res.sendFile(`templates/index.html`,{root:__dirname})
})

app.get('/api',(req,res)=>{
  res.json({a:1, b:2, c:3})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

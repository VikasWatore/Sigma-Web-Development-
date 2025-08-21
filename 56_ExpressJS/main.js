const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.static('public'))

// app.get('/Home', (req, res) => {
//   res.send('Hello Home')
// })

// app.get('/About', (req, res) => {
//   res.send('Hello About')
// })

// app.get('/ Contact-Us', (req, res) => {
//   res.send('Hello  Contact-Us')
// })
// instead of wrting many endpoints we can use :slug
app.get('/:slug', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    
    
  res.send(`Hello ${req.params.slug }`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

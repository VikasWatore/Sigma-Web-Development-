const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  name="adidas"
  res.render("index",{name});

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

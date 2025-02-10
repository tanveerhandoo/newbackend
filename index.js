 require ('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ab',( req, res)=>{
    res.send('itsme')
})
app.get('/myurl',(req,res)=>{
    res.send('welcome to our page')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

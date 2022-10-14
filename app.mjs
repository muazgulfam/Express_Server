console.log('Working on Node Js')

import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('someone is requesting', new Date())
  res.send('Hello World! from MUAZ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3002


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/index.html')
})

app.post('/signin', (req, res) => {
    res.send('Вика вошла домой!')
})

app.post('/signup', (req, res) => {
  res.send('Вика дома!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
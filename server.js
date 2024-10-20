const express = require('express')
const app = express()
const port = 3000

app.get('/sami', (req, res) => {
    res.send('Hello Sami!')
})
app.get('/david', (req, res) => {
    res.send('Hello David!')
})
app.use(express.static('client'))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
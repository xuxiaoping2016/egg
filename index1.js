const express = require('express')
const path = require("path")
var router = express.Router();
const app = express();



// app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/render',(req, res) => {
    res.render('<div><p>标题</p><p>content</p></div>')
})
app.get('/users/:userId/books/:bookId',(req, res) => {
    console.log(req.params,req.query)
    res.send(`params are: ${req.params.userId},${req.params.bookId}`)
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
var birds = require('./birds')
const express = require('express')
const app = express();


app.set('view engine', 'pug');
app.set('views', './src/views');

var logTime = function(req, res, next){
    req.requestTime = Date.now();
    next();
}
app.use(logTime);

app.get('/',function(req,res){
    res.render('index', { title: 'Hey', message: 'Hello there!' })
//     var responseText = 'Hello World!<br>'
//   responseText += '<small>Requested at: ' + req.requestTime + '</small>'
//   res.send(responseText)
})


app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
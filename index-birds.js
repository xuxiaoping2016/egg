var birds = require('./birds')
const express = require('express')
const app = express();


app.use('/birds', birds)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
const templating = require('./templating')
let staticFiles = require('./static-files');
const controller = require('./controller');

const Koa = require('koa');

const app = new Koa();


app.use(staticFiles('/static/', __dirname + '/static'))

const isProduction = process.env.NODE_ENV === 'production';

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

app.use(controller())

app.listen(3001)

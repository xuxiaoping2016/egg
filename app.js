const nunjucks = require('nunjucks');
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'))

const isProduction = process.env.NODE_ENV === 'production';

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

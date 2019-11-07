// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});
router.get('/params', async (ctx, next) => {
    ctx.response.body = ctx;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

app.use(bodyParser());
// add router middleware:
app.use(router.routes());

// 在端口3000监听:
app.listen(3001);
console.log('app started at port 3001...');


const ctx = {
    "request": {
        "method": "GET",
        "url": "/params",
        "header": {
            "host": "localhost:3001",
            "connection": "keep-alive",
            "pragma": "no-cache",
            "cache-control": "no-cache",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
            "sec-fetch-mode": "navigate",
            "sec-fetch-user": "?1",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "sec-fetch-site": "none",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "cookie": "rprm_cuid=156764366868445; saas.console.session=s%3AJHsWeqCc4g_3EQwpXx9Br2w20zI3Ds61.LofC1yKlR91APFqATPFw9TotvRxItbv8wTGH6RAr4KI; io=eo51s7FNyxCvpQBdAAAS; csrfToken=SZ_zexsTVkWswUd09CrSdcQo"
        }
    },
    "response": {
        "status": 200,
        "message": "OK",
        "header": {
            "content-type": "application/json; charset=utf-8"
        }
    },
    "app": {
        "subdomainOffset": 2,
        "proxy": false,
        "env": "development"
    },
    "originalUrl": "/params",
    "req": "<original node req>",
    "res": "<original node res>",
    "socket": "<original node socket>"
}
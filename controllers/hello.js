var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    // ctx.response.body = `<h1>Hello, ${name}!</h1>`;
    ctx.render('hello.html',{name})
};

module.exports = {
    'GET /hello/:name': fn_hello
};
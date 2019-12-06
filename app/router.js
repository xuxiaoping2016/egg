module.exports = app => {
    const { router, controller } = app;
    router.get('/',controller.home.index);
    // router.get('/home/:id/:name', controller.home.info);
    router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/, controller.home.package);
    router.get('/news',controller.news.list);
    router.post('/form', controller.form.post);
}
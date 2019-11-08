module.exports = app => {
    const { router, controller } = app;
    console.log("app",app)
    router.get('/', controller.common.home.index);
    router.get('/menu', controller.menu.index);
    router.get('/news', controller.news.list);
    router.get("/news/:id",controller.news.detail)
};
module.exports = app => {
    const { router, controller } = app;
    console.log("app",app)
    router.get('/', controller.home.index);
};
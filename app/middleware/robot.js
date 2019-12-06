// options === app.config.robot
module.exports = (options, app) => {
    return async function robotMiddleware(ctx, next) {
      const source = ctx.get('user-agent') || '';
      console.log('options....',source)
      // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36
      const match = options.ua.some(ua => ua.test(source));
      if (match) {
        ctx.status = 403;
        ctx.message = 'Go away, robot.';
      } else {
        await next();
      }
    }
};
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    // const dataList = {
    //   list: [
    //     { id: 1, title: 'this is news 1', url: '/news/1' },
    //     { id: 2, title: 'this is news 2', url: '/news/2' }
    //   ]
    // };
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render('news/list.tpl', { list: newsList });
  }

  async detail() {
    const detail = {
      id:this.ctx.params.id,
      title:"我和我的祖国",
      author:"xiaoping.xu",
      date:"1573202185070",
      content:'<p>在实际应用中，Controller 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service</p>'
    };
    await this.ctx.render('news/detail.tpl', detail);
  }
}

module.exports = NewsController;
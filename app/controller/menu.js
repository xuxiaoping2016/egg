const Controller = require('egg').Controller;

class MenuController extends Controller {
  async index() {
    this.ctx.body = 'menu';
  }
}

module.exports = MenuController;
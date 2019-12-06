// import { Controller } form 'egg'
const Controller = require("egg").Controller;

class HomeController extends Controller{
    async index(){
        const { ctx } = this;
        ctx.body = `hello word!--${ctx.query.name || ''}`
    }
    async info(){
        const { ctx } = this;
        ctx.body = `hello word!--${ctx.params.id}, ${ctx.params.name}`
    }

    async package(){
        const { ctx } = this;
        console.log('ctx.params',ctx.params) //{ '0': '677/xuxi' }
        ctx.body = `hello word!--${ctx.params[0]}`
    }
}

module.exports = HomeController;
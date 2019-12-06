const Controller = require("egg").Controller;

class FormController extends Controller{
    async post(){
        this.ctx.body = `body: ${JSON.stringify(this.ctx.request.body)}`;
    }
}

module.exports = FormController
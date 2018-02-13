'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    this.ctx.body = `search: ${this.ctx.params.id}, ${this.ctx.params.name}`;
  }
}

module.exports = UserController;

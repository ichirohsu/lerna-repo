'use strict';

function appApi2Server() {
  const Koa = require('koa')
  const app = new Koa()

  app.use(async (ctx) => {
    ctx.body = 'Hello World 2'
  })

  app.listen(4000)
}

const server2 = appApi2Server()

module.exports = server2

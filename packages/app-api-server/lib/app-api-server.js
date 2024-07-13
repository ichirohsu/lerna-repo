'use strict';

function appApiServer() {
  const Koa = require('koa')
  const app = new Koa()

  app.use(async (ctx) => {
    ctx.body = 'Package One'
  })

  app.listen(3000)
}

const server = appApiServer()

module.exports = server

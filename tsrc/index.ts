import * as Koa from 'koa'

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = { message: err.message }
    ctx.status = err.status || 500
  }
})

app.use(async ctx => {
  ctx.body = 'Hello World!'
})

const port = global.process.env.PORT || 5000;
app.listen(port);
import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'i like guitar :guitar:'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(':spider_web: HTTP server running on https://localhost:3333 ')
  })

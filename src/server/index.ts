import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'

const fastify = Fastify({ logger: true })
const __dirname = path.resolve()

fastify.register(fastifyStatic, { root: path.join(__dirname, 'public'), prefix: '/public/' })
fastify.get('/', function (req, reply) { reply.sendFile('index.html') })
fastify.listen({ port: 3000 }, (err, address) => { if (err) throw err })
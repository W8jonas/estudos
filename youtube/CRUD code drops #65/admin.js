
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const adminBro = new AdminBro({
    database: [],
    rootPath: '/admin'
})


const router = AdminBroExpress.buildRouter(adminBro)


const express = require('express')
const server = express()

server
    .use(adminBro.options.rootPath, router)
    .listen(3333, ()=> console.log('Server started'))





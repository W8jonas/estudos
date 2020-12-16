
const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: String,
    completed: Boolean,
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

const Project = mongoose.model("Project", ProjectSchema)


const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

AdminBro.registerAdapter(AdminBroMongoose)


const adminBroOptions = new AdminBro({
	resources: [
    { resource: Project, options: {
      properties: {
        description: { type: 'richtext' },
        created_at: {
          isVisible: { edit: false, list: true, show: true, filter: true }
        }
      }
   }},
  ],
  locale: {
    translations: {
      labels: {
        Project: 'Meus projetos'
      }
    }
  },
  rootPath: '/admin'
})


const router = AdminBroExpress.buildRouter(adminBroOptions)



const express = require('express')
const server = express()

server.use(adminBroOptions.options.rootPath, router)


const run = async () => {
    await mongoose.connect("mongodb://localhost/adminbroapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    await server.listen(3333, () => console.log('Server started'))
}

run()

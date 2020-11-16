import express from 'express'
import middleware from '../middlewares/index.js'


import authentication from './authentication.js'
const routes = express.Router()

routes.use(middleware.cors)
routes.use("/", authentication)

export default routes
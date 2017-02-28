
// Include dependencies
import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from './ioc/ioc'

import * as express from 'express'
import * as path from 'path'
import * as logger from 'morgan'
import * as favicon from 'serve-favicon'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'

// load all injectable entities.
// the @provide() annotation will then automatically register them.
import './ioc/loader'

// Error handler service
import { registerErrorHandlers } from './services/errorHandler'

// Main app
let server = new InversifyExpressServer(container)

server.setConfig( (app) => {
  app.use(favicon(path.join(__dirname, './public/favicon.ico')))
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
})
// app.use(express.static(path.join(__dirname, 'public'))) //serve public files

server.setErrorConfig( (app) => {
  registerErrorHandlers(app)
})

export const app = server.build()
export default app

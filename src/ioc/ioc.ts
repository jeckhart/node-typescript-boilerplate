
import '../polyfill'

import { Container, inject } from 'inversify'
import { autoProvide, makeProvideDecorator, makeFluentProvideDecorator } from 'inversify-binding-decorators'
import { makeLoggerMiddleware } from 'inversify-logger-middleware'

const container = new Container()

if (process.env.NODE_ENV === 'development') {
  let logger = makeLoggerMiddleware()
  container.applyMiddleware(logger)
}

const provide = makeProvideDecorator(container)
const fluentProvider = makeFluentProvideDecorator(container)

let provideNamed = (identifier, name) => {
  return fluentProvider(identifier)
         .whenTargetNamed(name)
         .done()
}

export { container, autoProvide, provide, provideNamed, inject }

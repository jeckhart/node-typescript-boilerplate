
import { Application, Request, Response } from 'express'

/**
 * Generate an error response
 */
function handler (err: Error, req: Request, res: Response, next: Function, includeStackTrace: boolean) {
  res.status(res.statusCode || 500) // default to 500 status for errors
  res.json({
    message: err.message,
    error:   includeStackTrace ? err : {}
  })
}

export function registerErrorHandlers(app: Application) {
  app.use(NotFound)

  if (app.get('env') === 'development') {
    app.use((err: Error, req: Request, res: Response, next: Function) => handler(err, req, res, next, true))
  } else {
    app.use((err: Error, req: Request, res: Response, next: Function) => handler(err, req, res, next, false))
  }
}

function NotFound (req: Request, res: Response, next: Function) {
    let err = new Error('Not Found')
    res.status(404)
    return next(err)
}

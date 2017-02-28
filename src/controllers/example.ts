
import { Request, Response } from 'express'
import { Controller, Get, TYPE, interfaces } from 'inversify-express-utils'
import { provideNamed } from '../ioc/ioc'

@provideNamed(TYPE.Controller, 'ExampleController')
@Controller('/')
export class ExampleController implements interfaces.Controller {
  /*
   * Return an empty 200 response
   */
  @Get('health')
  public health (req: Request, res: Response) {
    res.json({status: 'ok'}).end()
  }

  @Get('ping')
  public ping (): string {
    return 'pong'
  }

}

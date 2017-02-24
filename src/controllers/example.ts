'use strict';

import { Request, Response } from 'express';

/*
  * Return an empty 200 response
  */
export function health (req: Request, res: Response) {
  res.json({status: 'ok'}).end();
}

export function ping (req: Request, res: Response) {
  res.send('pong').end();
}
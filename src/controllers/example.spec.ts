import * as chai from 'chai'
import * as mocha from 'mocha'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import { Response } from 'express'

import {health, ping} from './example'

chai.use(sinonChai)
const expect = chai.expect

describe('health', () => {

  const res: Response = {
    send: sinon.stub().returnsThis(),
    json: sinon.stub().returnsThis(),
    end: sinon.stub()
  } as any as Response

  it('should return ok', () => {
    health(null, res)
    chai.expect(res.json).calledWithExactly({status: 'ok'})
    chai.expect(res.end).to.have.been.called
  })

})

describe('ping', () => {

  const res: Response = {
    send: sinon.stub().returnsThis(),
    json: sinon.stub().returnsThis(),
    end: sinon.stub()
  } as any as Response

  it('should return pong', () => {
    ping(null, res)
    chai.expect(res.send).calledWithExactly('pong')
  })

})

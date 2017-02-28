import * as mocha from 'mocha'
import {expect} from 'chai'
import * as chai from 'chai'

import app from './app'

// tslint:disable-next-line:no-var-requires
chai.use(require('chai-http'))

describe('health', () => {

  it('should be json', () => {
    return chai.request(app).get('/health')
    .then((res) => {
      expect(res.type).to.eql('application/json')
    })
  })

  it('should return a status of ok', () => {
    return chai.request(app).get('/health')
    .then((res) => {
      expect(res.body.status).to.eql('ok')
    })
  })

})

describe('ping', () => {

  it('should be text', () => {
    return chai.request(app).get('/ping')
    .then((res) => {
      expect(res.type).to.eql('text/html')
    })
  })

  it('should return pong', () => {
    return chai.request(app).get('/ping')
    .then((res) => {
      expect((res as any).text).to.eql('pong')
    })
  })

})

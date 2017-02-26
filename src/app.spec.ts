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

  it('should have a message prop', () => {
    return chai.request(app).get('/health')
    .then((res) => {
      expect(res.body.status).to.eql('ok')
    })
  })

})

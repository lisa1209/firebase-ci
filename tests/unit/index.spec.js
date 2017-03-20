/* global describe, it, expect, beforeEach */
import deployToFirebase from '../../src'

describe('firebase-ci Library', () => {
  describe('deployToFirebase function', () => {
    it('exports a function', () => {
      expect(deployToFirebase).to.be.a.function
    })
  })
  describe('deploy option', () => {
    beforeEach(() => {
      process.env.TRAVIS_BRANCH = undefined
    })
    it('exits with message if not in a CI environment', () => {
      deployToFirebase(null, (err, msg) => {
        expect(msg).to.exist
        expect(msg).to.equal('Skipping Firebase Deploy - Not a supported CI environment')
        expect(err).to.be.null
      })
    })
    it('accepts project option', () => {
      deployToFirebase({ project: 'test' }, (err, msg) => {
        expect(msg).to.exist
        expect(msg).to.equal('Skipping Firebase Deploy - Build is a not a Build Branch - Branch: undefined')
        expect(err).to.be.null
      })
    })
  })
})

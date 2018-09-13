const kdd = require('../kdd')

describe('kdd', function() {
  describe('has', function() {
    it('has(abcdef, cde)', function(done) {
      kdd.has('abcdef', 'cde')
      done()
    })
    it('has(aabbbcc, /bb+/)', function(done) {
      kdd.has('aabbbcc', /bb+/)
      done()
    })
    it('has([5,7,9], 7)', function(done) {
      kdd.has([5,7,9], 7)
      done()
    })
  })
  describe('none', function() {
    it('none(abcdef, ccc)', function(done) {
      kdd.none('abcdef', 'ccc')
      done()
    })
    it('none(aabcc, /bb+/)', function(done) {
      kdd.none('aabcc', /bb+/)
      done()
    })
    it('none([5,7,9], 6)', function(done) {
      kdd.none([5,7,9], 6)
      done()
    })
  })
  describe('ok', function() {
    it('ok(true)', function(done) {
      kdd.ok(true)
      done()
    })
  })
})

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
    it('has({name:ccc}, name)', function(done) {
      kdd.has({name:'ccc'}, 'name')
      done()
    })
  })
  describe('without', function() {
    it('without(abcdef, ccc)', function(done) {
      kdd.without('abcdef', 'ccc')
      done()
    })
    it('without(aabcc, /bb+/)', function(done) {
      kdd.without('aabcc', /bb+/)
      done()
    })
    it('without([5,7,9], 6)', function(done) {
      kdd.without([5,7,9], 6)
      done()
    })
    it('without({name:ccc}, age)', function(done) {
      kdd.without({name:'ccc'}, 'age')
      done()
    })
  })
  describe('yes', function() {
    it('yes(true)', function(done) {
      kdd.yes(true)
      done()
    })
  })
  describe('no', function() {
    it('no(1===0)', function(done) {
      kdd.no(1===0)
      done()
    })
  })
})

# kdd -- A simple test framework

## Install

```
$ npm install kdd
```

## Usage

kdd has only 3 test functions

1. ok   -- ex: ok(1===1)
2. has  -- ex: has([5,7,9], 7) , has('abcdef', 'cde'), has('aabbcc', /b+/)
3. none -- ex: none([5,7,9], 6), none('abcdef', 'bb'), none('aacc', /b+/)

## Example

```js
const kdd = require('kdd')

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
```

Mocha Testing Result

```
$ mocha

  kdd
    has
      √ has(abcdef, cde)
      √ has(aabbbcc, /bb+/)
      √ has([5,7,9], 7)
    none
      √ none(abcdef, ccc)
      √ none(aabcc, /bb+/)
      √ none([5,7,9], 6)
    ok
      √ ok(true)
```



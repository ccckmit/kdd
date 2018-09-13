const M = module.exports = {}

let ok = M.ok = require('assert').ok

M.contain = function (whole, part) {
  if (typeof part === 'string') {
    return whole.indexOf(part) >=0
  } else if (part instanceof RegExp) {
    return (part.test(whole))
  } else if (whole instanceof Array) {
    return whole.indexOf(part) > 0
  } else {
    return false
  }
}

M.has = function (whole, part) {
  ok(M.contain(whole, part))
}

M.none = function (whole, part) {
  ok(!M.contain(whole, part))
}

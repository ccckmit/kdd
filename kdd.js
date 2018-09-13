const kdd = module.exports = require('assert')

let ok = kdd.ok

kdd.yes = kdd.ok

kdd.no = function (cond) {
  kdd.ok(!cond)
}

kdd.contain = function (whole, part) {
  if (typeof whole === 'string') {
    if (typeof part === 'string') {
      return whole.indexOf(part) >=0
    } else {
      return part.test(whole)
    }
  } else if (whole instanceof Array) {
    return whole.indexOf(part) >= 0
  } else {
    return whole[part] != null
  }
}

kdd.has = function (whole, part) {
  ok(kdd.contain(whole, part))
}

kdd.not = {}

kdd.not.has = kdd.without = function (whole, part) {
  ok(!kdd.contain(whole, part))
}

const assert = require('assert')
const horner_rule = require('../../src/chapter_1/horner_rule')
const horner_rule_naive = require('../../src/chapter_1/horner_rule_naive')

describe('Horner Rule Test', () => {
  it('Make sure horner_rule and its naive implementation give same results', done => {
    let x = 15
    let A = [3,12,-7,6]
    assert(horner_rule(A,x) === horner_rule_naive(A,x))
    done()
  })
})

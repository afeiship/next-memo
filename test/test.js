var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-memoize');


var fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

describe('next/memoize', function () {

  it('nx.memoize', function () {
    var start, end;
    var dur1, dur2;
    var number = 38;
    var memoized = nx.memoize(
      fibonacci
    );

    console.log('calcatiing, wait...');

    // Calc first time:
    start = Date.now();
    var rs1 = memoized(number);
    dur1 = Date.now() - start;

    //From Cache
    end = Date.now();
    var rs2 = memoized(number);
    dur2 = Date.now() - end;

    // console.log(rs1);
    // console.log(rs2);
    // console.log(dur1);
    // console.log(dur2);

    assert.equal(rs1, rs2);
    assert.equal(dur1 > dur2, true);
  });

});

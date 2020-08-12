const nx = require('@feizheng/next-js-core2');
require('../src/next-memoize');

var fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

describe('next/memoize', function () {
  test('nx.memoize', function () {
    var start, end;
    var dur1, dur2;
    var number = 38;
    var memoized = nx.memoize(fibonacci);

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

    expect(rs1).toBe(rs2);
    expect(dur1 > dur2).toBe(true);
  });

  test('nx.get when memory changed.', () => {
    /*
    {
      '{"0":{"name":"fei","age":100,"github":"https://github.com/marketplace?type=actions"},"1":"github"}': 'https://github.com/marketplace?type=actions',
      '{"0":{"name":"fei","age":100,"github":"aaa"},"1":"github"}': 'aaa'
    }
    */
    var fei = {
      name: 'fei',
      age: 100,
      github: 'https://github.com/marketplace?type=actions'
    };

    var getter = nx.memoize(nx.get);

    var rs1 = getter(fei, 'github');
    var rs11 = nx.get(fei, 'github');
    console.log(rs1, rs11);
    fei.github = 'aaa';

    var rs2 = getter(fei, 'github');
    var rs22 = nx.get(fei, 'github');
    console.log(rs2, rs22);
    console.log(nx.cc);
  });

  test('nx.get test', () => {
    var fei = {
      name: 'fei',
      age: 100,
      github: 'https://github.com/marketplace?type=actions'
    };

    var getter = (obj, path) => {
      var str = 'aaa';
      for (let i = 0; i < 1000; i++) {
        str += i;
      }
      return {
        res: nx.get(obj, path),
        str
      };
    };

    var memoized_get = nx.memoize(getter);
    var times = 10000;

    console.time('normal');
    for (let i = 0; i < times; i++) {
      getter(fei, 'github');
    }
    console.timeEnd('normal');

    console.time('memo');
    for (let i = 0; i < times; i++) {
      memoized_get(fei, 'github');
    }
    console.timeEnd('memo');
  });
});

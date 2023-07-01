import nx from '@jswork/next';

nx.memo = function (inCallback, inKeyGen) {
  var cache = {};
  var keyGen = inKeyGen || JSON.stringify;
  return function () {
    var key = keyGen(arguments);
    if (cache.hasOwnProperty(key)) return cache[key];

    const result = inCallback.apply(null, arguments);
    cache[key] = result;
    return result;
  };
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.memo;
}

export default nx.memo;

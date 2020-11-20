/*!
 * name: @jswork/next-memoize
 * description: Memoize for next.
 * homepage: https://github.com/afeiship/next-memoize
 * version: 1.0.0
 * date: 2020-11-20 17:04:58
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var hasOwnProp = Object.prototype.hasOwnProperty;

  nx.memoize = function (inCallback, inKeyGen) {
    var cache = {};
    var keyGen = inKeyGen || JSON.stringify;
    return function () {
      var key = keyGen(arguments);
      return hasOwnProp.call(cache, key)
        ? cache[key]
        : (cache[key] = inCallback.apply(null, arguments));
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.memoize;
  }
})();

/*!
 * name: @feizheng/next-memoize
 * description: Memoize for next.
 * homepage: https://github.com/afeiship/next-memoize
 * version: 1.0.2
 * date: 2020-08-12T15:04:18.322Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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

/*!
 * name: @feizheng/next-memoize
 * description: Memoize for next.
 * url: https://github.com/afeiship/next-memoize
 * version: 1.0.0
 * date: 2019-12-17 12:39:00
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var hasOwnProp = Object.prototype.hasOwnProperty;

  nx.memoize = function(inCallback, inKeyGen) {
    var cache = {};
    var keyGen = inKeyGen || JSON.stringify;
    return function() {
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

//# sourceMappingURL=next-memoize.js.map

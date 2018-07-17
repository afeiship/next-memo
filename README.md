# next-memoize
> Memoize for next

## install:
```bash
npm install -S afeiship/next-memoize --registry=https://registry.npm.taobao.org
```

## usage:
```js
var fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
var memoized = nx.memoize(
  fibonacci
);

// First time: calc
var rs1 = memoized(number);
// Next time: From Cache
var rs2 = memoized(number);

```

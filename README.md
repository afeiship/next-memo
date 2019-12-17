# next-memoize
> Memoize for next.

## installation
```bash
npm install -S @feizheng/next-memoize
```

## usage
```js
import '@feizheng/next-memoize';

const fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
const memoized = nx.memoize(
  fibonacci
);

// First time: calc
const rs1 = memoized(number);
// Next time: From Cache
const rs2 = memoized(number);
```

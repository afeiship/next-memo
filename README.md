# next-memo
> Memoize for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-memo
```

## usage
```js
import '@jswork/next-memo';

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

## license
Code released under [the MIT license](https://github.com/afeiship/next-memo/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-memo
[version-url]: https://npmjs.org/package/@jswork/next-memo

[license-image]: https://img.shields.io/npm/l/@jswork/next-memo
[license-url]: https://github.com/afeiship/next-memo/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-memo
[size-url]: https://github.com/afeiship/next-memo/blob/master/dist/next-memo.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-memo
[download-url]: https://www.npmjs.com/package/@jswork/next-memo

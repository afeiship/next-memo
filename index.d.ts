type KeyGenerator = (...args: any[]) => string | number;

interface NxStatic {
  memo: (fn: Function, keyGenerator?: KeyGenerator) => Function;
}

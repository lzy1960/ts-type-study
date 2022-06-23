// Implement the type version of lodash's _.flip.
// Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.

type FlipArguments<T extends Function> = T extends (
  ...K: infer V
) => infer ReturnType
  ? (...K: Reverse<V>) => ReturnType
  : T

// 不需要递归
// 利用之前做的Reverse

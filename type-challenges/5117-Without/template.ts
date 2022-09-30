// 实现一个像 Lodash.without 函数一样的泛型 Without<T, U> ，它接收数组类型的 T 和数字或数组类型的 U 为参数，会返回一个去除 U 中元素的数组 T 。

type Without<T, U> = T extends [infer F, ...infer Rest]
  ? F extends T[number] & (U extends unknown[] ? U[number] : U)
    ? Without<Rest, U>
    : [F, ...Without<Rest, U>]
  : []

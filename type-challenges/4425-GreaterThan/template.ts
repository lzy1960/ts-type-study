// In This Challenge, You should implement a type GreaterThan<T, U> like T > U
// Negative numbers do not need to be considered.

type GreaterThan<
  T extends number,
  U extends number,
  K extends 1[] = []
> = K['length'] extends T
  ? false
  : K['length'] extends U
  ? true
  : GreaterThan<T, U, [1, ...K]>

// 借助一个数组，每次加一
// 每次对比左侧和右侧的数量
// 左侧符合，则相等或小于，返回 false
// 否则，右侧符合，则大于，返回 true
// 否则，都不符合，数组 +1 ，递归

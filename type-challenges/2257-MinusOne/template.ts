// 给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。

type MinusOne<T extends number, U extends any[] = []> = [
  ...U,
  any,
  any
]['length'] extends T
  ? [...U, any]['length']
  : [...U, any]['length'] extends T
  ? U['length']
  : MinusOne<T, [...U, any, any]>

// 觉得是要用元组的长度来实现
// 直接看答案

// 总结：
// 1. 借助另一个泛型 U，默认值空数组 []
// 2. 每次递增两个元素，检测是否符合
// 3. 符合 -> 输出 长度-1
// 4. 不符合 -> 判断 长度-1 是否符合T
// 5. 符合 -> 输出 长度再-1
// 6. 不符合 -> 递归，U中再加两个元素

// -------------------------------------------

// 为什么要用两个元素呢？用一个会有什么效果？
// 试一下：

// type MinusOne<T extends number, U extends any[] = []> = [
//   ...U,
//   any
// ]['length'] extends T
//   ? U['length']
//   : MinusOne<T, [...U, any]>

// 报错：类型实例化过深，且可能无限
// ts对递归次数做了限制
// 经测试，最多1000次

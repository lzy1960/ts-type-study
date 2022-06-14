type Flatten<T extends any[], U extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends any[]
    ? Flatten<[...First, ...Rest], U>
    : Flatten<Rest, [...U, First]>
  : U

type DD = Flatten<[1, 2, 3, 4]>

// type Flatten<T extends any[], U extends any[] = []> = T extends [
//   infer First,
//   ...infer Rest
// ]
//   ? First extends any[]
//     ? [Flatten<[...First, ...Rest]>]
//     : Flatten<Rest, [...U, First]>
//   : U
// 上面这样写，不能展开数组，两个用例无法通过
// 结果发现，是第一次判断多了中括号……

// 第一次的思路
// 1. 递归
// 2. 取出第一个元素，检查是不是数组
// 3. 是，则展开
// 4. 不是，则存到另一个泛型里

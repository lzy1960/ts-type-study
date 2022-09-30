// 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false 。

import { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

// type L = ['Kars', 'Esidisi', 'Wamuu', 'Santana']

// type Includes<T extends readonly any[], U> = T extends U ? true : false
// 上面这样写，结果为 true 的案例全都无法通过

// T 和 U 换位置也是有部分案例无法通过

// function includes (list, key) {
//   function _ (list, key) {
//     if (list.length === 0) {
//       return false
//     }
//     const [first, ...rest] = list
//     if (first === key) {
//       return true
//     } else {
//       return _(rest, key)
//     }
//   }
//   return _(list, key)
// }

// 1. 用递归实现遍历数组
// 2. ts 模块规范
// - 如果有 export/import 的话，就是模块
// - 没有的话就是全局，可以直接在别的模块引用
// 这里必须用 import 和 export ，因为引入了内置的 Equal

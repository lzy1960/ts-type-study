// 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : []

type D<T> = T extends never ? string : number
type C = D<never> // never

type E = Permutation<'A' | 'B' | 'C'>

// never是空的联合类型
// 泛型传入never，则不会执行，就是never
// 要用中括号包起来

// 泛型U的作用：保存T之前的内容
// 递归排除

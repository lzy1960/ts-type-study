// 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。

declare function PromiseAll<T extends any[]>(
  values: readonly [...T] // TODO:这行还不知道是什么意思
): Promise<{
  [P in keyof T]: T[P] extends Promise<infer C> ? C : T[P]
}>

// const ccc = Promise.resolve(3) // Promise<number>
type d<T extends string[]> = T
const a: d<['123', '456']> = ['123', '456']

// 第一次用递归没写出来
// 把PromiseAll([])转换为 Promise<[]>
// 遍历，看看是不是 Promise

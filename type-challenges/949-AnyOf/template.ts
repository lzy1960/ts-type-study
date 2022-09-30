// 在类型系统中实现类似于 Python 中 any 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 true ，否则返回 false 。如果数组为空，返回 false 。

type AnyOf<
  T extends readonly unknown[],
  E = 0 | '' | [] | false | Record<string, never>
> = T extends [infer First, ...infer Rest]
  ? First extends E
    ? AnyOf<Rest>
    : true
  : false

type AA = AnyOf<[1, '', false, [], {}]>
type N = Record<string, never>

// 递归
// 注意点：
// 空对象类型必须用 Record<string, never>
// 或者 具体的实现方式 { [x: string]: never }
// 原因参考： https://github.com/typescript-eslint/typescript-eslint/issues/2063
// {} 代表任何非空值，而不是空数组
// 空数组的表示方法： {} 中的所有 key 都为 never

type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never

type CCC = never | 'a' | never // 'a'
type DDD = never | 'b' | never // 'b'

// type IsUnion<T> = T extends infer L | infer R
//   ? [L] extends [never]
//     ? [R] extends [never]
//       ? IsUnion<R>
//       : true
//     : false
//   : IsUnion<R>
// 上面这种写法，为true的用例过不去

// type IsUnion<T> = T extends infer L | infer R
//   ? [L] extends [never]
//     ? false
//     : [R] extends [never]
//     ? false
//     : true
//   : false
// 上面这种写法，为false的用例过不去

// 不会了，看答案
// type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never
// T extends U 导致T被分发，所以在[U] extends [T] 这里，U 是联合类型，而T 是分发类型，二者如果不等，那么表示T就是联合类型

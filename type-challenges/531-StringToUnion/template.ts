type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never

type EE = StringToUnion<'hello'>

// 另一种方式
// type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
//   ? [First, StringToUnion<Rest>][number]
//   : never

// 实现 StartsWith<T, U>, 接收两个 string 类型参数 , 然后判断 T 是否以 U 开头 , 根据结果返回 true 或 false

type StartsWith<
  T extends string,
  U extends string
> = T extends `${U}${infer Rest}` ? true : false

type AA2 = StartsWith<'abc', 'ac'>

// type StartsWith<
//   T extends string,
//   U extends string
// > = T extends `${infer L}${infer R}` ? (L extends U ? true : false) : false
// 上面这样写，为 true 的用例都过不去

// 看了答案，不需要这么麻烦

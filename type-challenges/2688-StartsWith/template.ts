// 实现StartsWith<T, U>,接收两个string类型参数,然后判断T是否以U开头,根据结果返回true或false

type StartsWith<
  T extends string,
  U extends string
> = T extends `${U}${infer Rest}` ? true : false

type AA = StartsWith<'abc', 'ac'>

// type StartsWith<
//   T extends string,
//   U extends string
// > = T extends `${infer L}${infer R}` ? (L extends U ? true : false) : false
// 上面这样写，为true的用例都过不去

// 看了答案，不需要这么麻烦

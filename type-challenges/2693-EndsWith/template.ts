// 实现 EndsWith<T, U>, 接收两个 string 类型参数 , 然后判断 T 是否以 U 结尾 , 根据结果返回 true 或 false

type EndsWith<T extends string, U extends string> = T extends `${infer L}${U}`
  ? true
  : false

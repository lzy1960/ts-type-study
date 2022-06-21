// 实现EndsWith<T, U>,接收两个string类型参数,然后判断T是否以U结尾,根据结果返回true或false

type EndsWith<T extends string, U extends string> = T extends `${infer L}${U}`
  ? true
  : false

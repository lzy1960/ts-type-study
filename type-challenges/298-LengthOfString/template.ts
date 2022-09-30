// 计算字符串的长度，类似于 String#length

type LengthOfString<
  S extends string,
  U extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...U, First]>
  : U['length']

// 字符串没有长度，要转换成元组
// 1. S 中取第一个
// 2. 放到数组最后
// 3. 直到 S 为空
// 4. 最后获取元组的长度

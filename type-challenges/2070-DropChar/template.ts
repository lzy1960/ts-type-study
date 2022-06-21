// 从字符串中剔除指定字符。

type DropChar<S, C> = S extends `${infer L}${infer R}`
  ? L extends C
    ? DropChar<R, C>
    : `${L}${DropChar<R, C>}`
  : S

type AB = DropChar<'butter fly!', ' '>

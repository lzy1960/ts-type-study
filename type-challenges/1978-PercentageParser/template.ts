// 实现类型 PercentageParser。根据规则 /^(\+|\-)?(\d*)?(\%)?$/ 匹配类型 T 。
// 匹配的结果由三部分组成，分别是： [ 正负号 , 数字 , 单位 ] ，如果没有匹配，则默认是空字符串。

type GetPrefix<A extends string> = A extends `+${string}`
  ? '+'
  : A extends `-${string}`
  ? '-'
  : ''

type GetSubFix<A extends string> = A extends `${string}%` ? '%' : ''

type GetCount<A extends string> =
  A extends `${GetPrefix<A>}${infer R}${GetSubFix<A>}` ? R : never

type PercentageParser<A extends string> = [
  GetPrefix<A>,
  GetCount<A>,
  GetSubFix<A>
]

// 分别获取三个部分的内容：符号、数字、百分号

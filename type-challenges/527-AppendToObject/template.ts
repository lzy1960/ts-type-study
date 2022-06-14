// 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}

// 思路
// 1. 原来的key和新的key组成联合类型
// 2. 然后条件判断

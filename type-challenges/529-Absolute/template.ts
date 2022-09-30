type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer P}`
  ? P
  : `${T}`

// 第一次答案， number 的用例都没通过
// type Absolute<T extends number | string | bigint> =
//   T extends `${infer First}${infer Rest}` ? (First extends '-' ? Rest : T) : any

// 应该先把泛型转换为字符串，再去判断，删掉负号
// 最后一行， bigInt 会自动删除中间的下划线
// 但普通的 number 不会

// Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments

type ReplaceKeys<U, T extends string, Y> = {
  [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P]
}

type NodeA = {
  type: 'A'
  name: string
  flag: number
}
type DDDD = ReplaceKeys<NodeA, 'name' | 'flag', { name: boolean; aa: string }>

// 下面这样，可以通过第一个用例，但是没有的 key 应该变成 never
// type ReplaceKeys<U, T extends string, Y> = {
//   [P in keyof U]: P extends keyof Y ? Y[P] : U[P]
// }

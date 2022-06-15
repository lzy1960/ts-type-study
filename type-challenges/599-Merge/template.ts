// 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键

type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S
    ? S[P]
    : P extends keyof F
    ? F[P]
    : never
}

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}
type FF = Merge<Foo, Bar>

// 下面这样不严谨
// type Merge<F, S> = {
//   [P in keyof F | keyof S]: P extends keyof S ? S[P] : number
// }

// 下面这样可以，但是感觉有点长
// 但是看了答案确实是这样写的
// type Merge<F, S> = {
//   [P in keyof F | keyof S]: P extends keyof S
//     ? S[P]
//     : P extends keyof F
//     ? F[P]
//     : never
// }

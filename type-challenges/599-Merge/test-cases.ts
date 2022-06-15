import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >,
  Expect<
    Equal<
      Merge<Bar, Foo>,
      {
        a: number
        b: string
        c: boolean
      }
    >
  >
]

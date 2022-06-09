import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >,
  Expect<
    Equal<
      TupleToObject<typeof tupleNumber>,
      {
        1: 1
        2: 2
        3: 3
        4: 4
      }
    >
  >
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// 1. const 字面量类型
// 2. typeof 取类型
// 3. @ts-expect-error 期望报错

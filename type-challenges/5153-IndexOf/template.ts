import { Equal } from '@type-challenges/utils'

export type IndexOf<T extends unknown[], U, Arr extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? Equal<F, U> extends true
    ? Arr['length']
    : IndexOf<Rest, U, [...Arr, unknown]>
  : -1

// From T, pick a set of properties whose type are assignable to U.

type PickByType<T, U> = {
  [P in keyof T as U extends T[P] ? P : never]: T[P]
}

// 要检测 key 的类型，需要在中括号里做断言 + 判断

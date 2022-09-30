// 实现一个通用的类型 Mutable<T> ，使类型 T 的全部属性可变（非只读）。

type Mutable<T extends object> = {
  -readonly [P in keyof T]: T[P]
}

interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }

// type Mutable<T> = {
//   -readonly [P in keyof T]: T[P]
// }
// 这样写，下面的报错无法通过

// 泛型要写成 T extends object
// 而不是 T extends {}

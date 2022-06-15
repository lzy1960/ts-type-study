// 获取两个接口类型中的差值属性

type Diff<
  O,
  O1,
  T = Pick<O, keyof Omit<O, keyof O1>> & Pick<O1, keyof Omit<O1, keyof O>>
> = {
  [P in keyof T]: T[P]
}

type Foo = {
  a: string
  b: number
}
type Bar = {
  a: string
  c: boolean
}
type ccc = keyof (Foo | Bar)

type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar, Foo> // { b: number, c: boolean }

// 借助Pick和Omit或Exclude，和第三个泛型

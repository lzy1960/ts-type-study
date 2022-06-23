// Given a tuple type T that only contains string type, and a type U, build an object recursively.

type TupleToNestedObject<T, U> = T extends [infer F, ...infer Rest]
  ? { [K in F]: TupleToNestedObject<Rest, U> }
  : U

// F 报错
// 不能将类型“F”分配给类型“string | number | symbol”。ts(2322)
// TODO:目前还不知道怎么解决

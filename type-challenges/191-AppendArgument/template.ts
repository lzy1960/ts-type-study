// 实现一个泛型 AppendArgument<Fn, A>，对于给定的函数类型 Fn，以及一个任意类型 A，返回一个新的函数 G。G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数

type AppendArgument<Fn, A> = Fn extends (...args: infer S) => infer R
  ? (...args: [...S, A]) => R
  : Fn

  // 追加一个参数，用infer的时候，要先把原来的参数名也写出来
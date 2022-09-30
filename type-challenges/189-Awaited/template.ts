// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P> ? Awaited<P> : never

type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T1 = MyAwaited<Z1> // Promise<string | boolean>

// type MyAwaited<T> = T extends Promise<infer P> ? P : never
// 上面这种做法，最后一个测试用例不能通过，并且下面的 @ts-expect-error 会报错

// ** 传入的是 Promise ，所以还需要递归

// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P> ? (P extends Promise<infer S> ? S : P) : never
// 上面这种写法，用例都能通过，但是感觉有点繁琐
// 而且如果有三层 Promise 就无法通过了

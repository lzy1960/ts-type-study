// 在 JavaScript 中我们很常会使用可串联（ Chainable/Pipeline ）的函数构造一个对象，但在 TypeScript 中，你能合理的给他附上类型吗？
// 在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 option(key, value) 和 get() 。在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。

type Chainable<Prev = {}> = {
  option<T extends string, K = unknown>(
    key: T extends keyof Prev ? never : T, // 检测是否有重复 key
    value: K
  ): Chainable<
    Prev & {
      [P in T]: K
    }
  >
  get(): Prev
}

// 链式，所以必须用递归
// Chainable 可以加泛型，内部的方法也可以用泛型

// option 里有重复的 key 就报错
// T extends keyof Prev ? never : T

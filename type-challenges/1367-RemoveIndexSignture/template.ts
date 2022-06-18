// Implement RemoveIndexSignature<T> , exclude the index signature from object types.

type RemoveIndexSignature<T> = {
  [Key in keyof T as Key extends `${infer K}` ? Key : never]: T[Key]
}

// example
type Foo1 = {
  [key: string]: any
  foo(): void
}

type A = RemoveIndexSignature<Foo1> // expected { foo(): void }

// 思考
// 怎么排除 key 在 [] 里面的？
// 需要在 [] 里面断言检测Key的类型，是否属于字符串
// TODO:infer K没有用，不知道为什么要这样写

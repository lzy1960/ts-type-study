// 实现一个通用的PartialByKeys<T, K>，它接收两个类型参数T和K。
// K指定应设置为可选的T的属性集。当没有提供K时，它就和普通的Partial<T>一样使所有属性都是可选的。

type Copy<T> = {
  [P in keyof T]: T[P]
}
type OO<T, K> = Omit<T, K extends keyof T ? K : never>
type PP<T, K> = Partial<Pick<T, K extends keyof T ? K : never>>
type PartialByKeys<T, K = keyof T> = Copy<OO<T, K> & PP<T, K>>

interface User {
  name: string
  age: number
  address: string
}

type AA = OO<User, 'name'> // {age: number;address: string;}
type B = Pick<User, 'name'>
type BB = Partial<B> // {name?: string | undefined;}
type AAA = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

// 需要用Copy生成一个新的类型
// type OO<T, K> = Omit<T, K extends keyof T ? K : never>
// type PP<T, K> = Partial<Pick<T, K extends keyof T ? K : never>>
// type PartialByKeys<T, K> = Copy<OO<T, K & keyof T> & PP<T, K & keyof T>>
// 但是上面这样，最后一个用例会报错
// 检查发现，name的类型变了，多了undefined
// 因为 Partial 的时候，类型会多undefined

// 先给K一个默认值为 keyof T
// 每次都给第二个泛型传入 keyof T，以确保处理的 key 在 T 中

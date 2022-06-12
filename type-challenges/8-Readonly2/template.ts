// 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
// K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。

type MyReadonly2<T, K extends keyof T = keyof T> = MyReadonly<MyPick<T, K>> &
  MyOmit<T, K>

type R = MyReadonly2<Todo1, 'title' | 'description'>
type T = keyof Todo1

const s: T = 'title'
interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

// 需要同时满足两个条件，用 & 连接
// <T, K extends keyof T = keyof T>
// TODO:上面这句是什么意思?默认值类型?

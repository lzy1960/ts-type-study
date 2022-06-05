
// 1. 返回一个对象
// 2. 遍历
// 3. todo[key]取值
// 4. 看看key在不在todo里
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 1. 返回一个对象
// 2. 遍历
// 3. todo[key] 取值
// 4. 看看 key 在不在 todo 里
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

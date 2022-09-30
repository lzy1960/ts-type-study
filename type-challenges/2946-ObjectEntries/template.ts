// Implement the type version of Object.entries

type ObjectEntries<T> = {
  [P in keyof T]-?: [P, T[P] extends infer R | undefined ? R : T[P]]
}[keyof T]

// 应该是要用递归，每次都把处理完的 key 排除
// 但是看了答案，并不需要递归

// 这个方法是：
// 把每一项都转化 key: [key, value] 的格式，然后根据 key 取出全部的 value

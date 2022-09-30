// Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.

type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly unknown[]
  ? number extends T['length']
    ? false
    : true
  : false

// 如何检测是否是元组？
// 根据长度来检测
// number extends T['length'] 解释如下：
// 数组的长度是 number 类型，元组的长度是一个具体的 number

// Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.

type IsNever<T> = [T] extends [never] ? true : false

type I = IsNever<never>

// 如果用 T extends never ，会直接返回never
// never 的判断，必须用数组包裹，判断条件会把数组看成一个整体

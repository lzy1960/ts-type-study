// 实现一个通用 Pop<T> ，它接受一个数组 T 并返回一个没有最后一个元素的数组

type Pop<T extends any[]> = T extends [...infer R, infer L] ? R : never

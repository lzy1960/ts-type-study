// 实现一个通用 Last<T>，它接受一个数组 T 并返回其最后一个元素的类型。

type Last<T extends any[]> = T extends [...infer F, infer L] ? L : never

// 这个跟 First Of Array 有点像

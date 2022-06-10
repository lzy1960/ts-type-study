// 实现类型版本的 Array.unshift

type Unshift<T extends unknown[], U> = [U, ...T]

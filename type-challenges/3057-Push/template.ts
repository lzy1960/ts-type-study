// 在类型系统里实现通用的 Array.push

type Push<T extends unknown[], U> = [...T, U]

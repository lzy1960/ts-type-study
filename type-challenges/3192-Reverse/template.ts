// 实现类型版本的数组反转 Array.reverse

type Reverse<T> = T extends [infer F, ...infer Rest] ? [...Reverse<Rest>, F] : T
// 或者
// type Reverse<T> = T extends [...infer Rest, infer L] ? [L, ...Reverse<Rest>] : T

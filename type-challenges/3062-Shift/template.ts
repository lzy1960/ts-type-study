type Shift<T> = T extends [infer F, ...infer Rest] ? [...Rest] : T

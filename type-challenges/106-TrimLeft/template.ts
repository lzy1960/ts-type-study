type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}`
  ? TrimLeft<Rest>
  : S

// 用递归
// 第一次是想着用数组拼出字符串
// 但其实用字符串 +infer 就可以了

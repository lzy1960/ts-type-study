type MyCapitalize<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Uppercase<F>}${Rest}`
  : S

// 首字母大写
// 需要借助 Uppercase<>
// 其中， intrinsic 关键字是 ts 内部用的，不对外提供

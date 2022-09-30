// 实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${Right}`
  : S

// 1.
// type Replace<
//   S extends string,
//   From extends string,
//   To extends string
// > = S extends `${From}${infer Rest}` | `${infer Rest}${From}`
//   ? `${To}${Rest}`
//   : S

// 上面这种方法，会有一个测试用例过不去

// 2.
// S extends `${infer Left}${From}${infer Right}` ? `${Left}${To}${Right}` : S

// 上面这个方法，也是有一个过不去，需要排除 From 为空字符串的情况

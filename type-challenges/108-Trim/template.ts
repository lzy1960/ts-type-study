type Space = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends
  | `${Space}${infer Rest}`
  | `${infer Rest}${Space}`
  ? Trim<Rest>
  : S

// type Trim<S extends string> = S extends `${Space}${infer Rest}${Space}`
// ? Trim<Rest>
// : S
// 上面这种方式，只能是首尾有空格或首尾都每空格
// 任意一边没空格就无法通过

// 所以两种情况要分开

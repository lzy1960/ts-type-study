type Flip<T extends { [key: string]: any }> = {
  [K in keyof T as K extends keyof T ? `${T[K]}` : never]: K
}

type CCC = Flip<{ pi: 3.14; bool: true }>

// type Flip<T> = {
//   [K in keyof T as T[K]]: K
// }
// 这样写，上面CCC的用例过不去，true类型不见了

// type Flip<T extends object> = {
//   [K in keyof T as `${T[K]}`]: K
// }
// 这样写，用例能过，但是会报错
// 需要指定 T 的类型中，key 的类型为 string

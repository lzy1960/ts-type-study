// 实现内置的 Parameters 类型
// https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

// const foo = (arg1: string, arg2: number): void => { }
// type T2 = MyParameters<typeof foo>
// 元组

// infer
// type ReturnType1<T> = T extends (...args: infer R) => string ? R : any;
// type T1 = ReturnType1<(a: string, b: number) => string>
// 元组

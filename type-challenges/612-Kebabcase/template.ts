// FooBarBaz -> foo-bar-baz

// 把第一个字母转换为小写
type FirstLowerCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Lowercase<First>}${Rest}`
  : S
type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? Rest extends FirstLowerCase<Rest>
    ? `${FirstLowerCase<First>}${KebabCase<Rest>}`
    : `${FirstLowerCase<First>}-${KebabCase<Rest>}`
  : S

type GG = FirstLowerCase<'CCc'>
type A = KebabCase<'cFFf'>

// 这样写，一半的用例过不去，大小写转换有问题
// type IsUpperCase<S extends string> = S extends Uppercase<S> ? true : false
// type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
//   ? IsUpperCase<Rest> extends true
//     ? `${Lowercase<First>}-${KebabCase<Rest>}`
//     : S
//   : S

// 第一次思路
// 递归
// 检测大写的方法？需要自己写
// 1. 先把所有的大写都该小写前面加杠
// 2. 然后在排除第一个

// 答案解读
// 右侧递归
// 1. 右侧的首字母大写，则改为小写前面加杠，否则右侧继续递归
// 2. 并且把左侧的字母变成小写

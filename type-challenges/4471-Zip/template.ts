// In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple

type Zip<T, U> = T extends [infer TF, ...infer TRest]
  ? U extends [infer UF, ...infer URest]
    ? [[TF, UF], ...Zip<TRest, URest>]
    : []
  : []

type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
type BBB = Zip<[1, 2], [true, false]>

// type Zip<T, U> = T extends [infer TF, ...infer TRest]
//   ? U extends [infer UF, ...infer URest]
//     ? [[TF, UF], Zip<TRest, URest>]
//     : []
//   : []
// 第一次写成这样了，不知道为啥报错
// Zip 生成的元组是多层的，类似 [[1, true], [2, false]]
// 需要通过展开的方式，清除里面的空数组

type Chunk<
  T extends unknown[],
  N extends number,
  U extends unknown[] = []
> = T extends [infer First, ...infer Rest]
  ? U['length'] extends N
    ? [U, ...Chunk<Rest, N, [First]>]
    : Chunk<Rest, N, [...U, First]>
  : U extends []
  ? []
  : [U]

// 用第三个泛型记录每次递归生成的元素组成的数组
// 第三个泛型的流程
// 1. 如果长度等于N，那么就返回数组，第一个元素是这个泛型，第二个元素是递归Chunk
//    为什么要传入[First]? 因为直接从1个元素的数组开始计算
// 2. 否则，继续执行，并把第一个元素传入

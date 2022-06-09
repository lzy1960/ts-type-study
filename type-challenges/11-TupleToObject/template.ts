type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const

type r = TupleToObject<typeof tupleNumber>
// r = readonly ["0", "1", "2", "3"]
// 得出结论：keyof array -> 索引

// js
// function tupleToObject (array) {
//   const obj: any = {}
//   array.forEach((val) => {
//     obj[val] = val
//   });
//   return obj
// }

// 1. 返回一个对象
// 2. 遍历 array

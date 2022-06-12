type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

type r = DeepReadonly<X>
type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        }
      ]
    }
  }
}

// 错误写法
// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends object ? T[P] : DeepReadonly<T[P]>
// }

// 检测是否有key
// 用keyof xxx
// 如果有key，那么他就是大括号包裹的

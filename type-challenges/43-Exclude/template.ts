type MyExclude<T, U> = T extends U ? never : T

// type r = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
// c

// let a: 'a' | 'b' | 'c'
// let b: 'a' | 'b'

// a = b

// extends表示可以被赋值

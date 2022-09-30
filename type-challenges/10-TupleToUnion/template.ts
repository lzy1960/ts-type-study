// 实现泛型 TupleToUnion<T>，它返回元组所有值的合集。

type TupleToUnion<T extends any[]> = T[number]

type c = TupleToUnion<[123, '456', true]>

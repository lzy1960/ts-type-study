// 有时，您可能希望根据其属性在并集中查找类型。
// 在此挑战中，我们想通过在联合 Cat | Dog 中搜索公共 type 字段来获取相应的类型。换句话说，在以下示例中，我们期望 LookUp<Dog | Cat, 'dog'> 获得 Dog，LookUp<Dog | Cat, 'cat'> 获得 Cat。

type LookUp<U, T> = U extends { type: T } ? U : never

// 第一次没注意有公共字段 type
// 以为是遍历每个字段找

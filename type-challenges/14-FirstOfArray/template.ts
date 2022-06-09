type First<T extends any[]> = T extends [] ? never : T[0]

type f1 = First<[]>

type c = [1, 'a']

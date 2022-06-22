// From T, pick a set of properties whose type are not assignable to U.

type OmitByType<T, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P]
}

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type M = OmitByType<Model, boolean>

export interface IUser {
  email: string
  name: string
  lastName: string
  phone: string | null
  imgSrc: string | null
  discountPoints: number | null
  basketId: string
}

export interface IUserAndBasketId {
  userId?: string,
  basketId?: string
}

export type TKeys = 'name' | 'lastName' | 'phone' | 'email'
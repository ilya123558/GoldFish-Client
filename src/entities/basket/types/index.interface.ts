export interface IBasket {
  id: string,
  quantity: number
  basketId: string
  productId: number
}

export interface IUpdateBasket {
  productId: number
  basketId: string
}

export interface IResetBasket {
  basketId: string
}
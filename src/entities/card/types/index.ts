export * from './cardSlice.interface';
export interface ICard {
  id: number,
  ageLimit: number,
  imgSrcList: string[],
  playersFrom: number,
  playersTo: number,
  price: number,
  timeFrom: number,
  timeTo: number,
  title: string,
  categoryUrl: string,
  cotalogUrl: string,
  description: string,
  characteristics: string,
  rules: string,
  count: number,
  url: string,
  availability: 'available' | 'forOrdering' | 'unavailable',
  faq: {
    question: string,
    answer: string
  }[]

  discount?: number,
}

export type ICardList = ICard[]
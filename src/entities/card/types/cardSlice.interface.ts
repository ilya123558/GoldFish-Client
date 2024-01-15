import { INavList } from "@/shared/ui/product-sorter-by-category";
import { ICardList } from ".";

export interface ISortItem {
  title: string,
  toggle: boolean,
  componentKey: string
}

export interface ISort {
  price: {
    from: number,
    to: number,
    maxPrice: number,
    discount: boolean
  },
  age: {
    from: number
    to: number,
    toggle: boolean
  }[],
  availability: {
    title: string,
    value: 'available' | 'forOrdering' | 'unavailable',
    toggle: boolean
  }[],
  categoryUrl: string,
  players: {
    from: number
    to: number
    list: (string | number)[]
  }
}

export interface IInitialState {
  cardList: ICardList,
  sortList: ISortList,
  navList: INavList,
  sort: ISort
}


export type ISortList = ISortItem[]
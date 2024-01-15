import { IInitialState, ISort } from "../types";

export const sortState: ISort = {
  price: { from: 0, to: 22780, maxPrice: 22780, discount: false },
  age: [
    { from: 3, to: 5, toggle: false },
    { from: 6, to: 7, toggle: false },
    { from: 8, to: 12, toggle: false },
    { from: 13, to: 15, toggle: false },
    { from: 16, to: 17, toggle: false },
    { from: 18, to: Infinity, toggle: false }
  ],
  availability: [
    { title: 'в наличии', value: 'available', toggle: false },
    { title: 'под заказ', value: 'forOrdering', toggle: false },
    { title: 'нет в наличии', value: 'unavailable', toggle: false }
  ],
  categoryUrl: '',
  players: {
    from: 0,
    to: 7,
    list: ['Любой', 1, 2, 3, 4, 5, 6, 'Более']
  }
}

export const cardListInitialState: IInitialState = {
  cardList: [],
  sortList: [
    { title: 'Все категории', toggle: true, componentKey: 'ProductSorterByCategory' },
    { title: 'Цена', toggle: true, componentKey: 'ProductSorterByPrice' },
    { title: 'Возрасты', toggle: true, componentKey: 'ProductSorterByAge' },
    { title: 'Наличие', toggle: true, componentKey: 'ProductSorterByAvailability' },
    { title: 'Количество игроков', toggle: true, componentKey: 'ProductSorterByPlayers' },
  ],
  navList: [],
  sort: sortState
};
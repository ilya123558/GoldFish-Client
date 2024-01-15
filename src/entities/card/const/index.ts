export * from "./initialState";

export const cardInfoList: [[string, { question: string; answer: string; }[]], [string, string]] = [
  [
    'Доставка', [
      { question: 'Самовывоз из магазина', answer: 'сегодня' },
      { question: 'Самовывоз из 761 пункта', answer: '1-3 дня' },
      { question: 'Курьерская доставка', answer: '1-3 дня' },
      { question: 'Доставка почтой', answer: 'от 3 дней' },
    ]
  ],
  ['Оплата', 'информация об оплате']
]
import { IInfoAboutProfileList } from "../types";

export const infoAboutProfileList: IInfoAboutProfileList = [
  {
    key: 'name', title: 'Ваше имя',
    registerOptions: {
      minLength: {
        value: 2,
        message: 'Имя должено быть не меньше 2 символов'
      },
      maxLength: {
        value: 9,
        message: 'Имя должено быть не больше 9 символов'
      },
      pattern: {
        value: /^[A-Za-zА-Яа-яЁё\s]+$/u,
        message: 'Неверное имя'
      }
    }
  },
  {
    key: 'lastName', title: 'Ваша фамилия',
    registerOptions: {
      minLength: {
        value: 1,
        message: 'Фамилия должена быть не меньше 1 символа'
      },
      maxLength: {
        value: 10,
        message: 'Фамилия должена быть не больше 10 символов'
      },
      pattern: {
        value: /^[A-Za-zА-Яа-яЁё\s]+$/u,
        message: 'Неверная фамилия'
      }
    }
  },
  {
    key: 'phone', title: 'Телефон',
    registerOptions: {
      minLength: {
        value: 10,
        message: 'Телефон должен быть не меньше 10 символов'
      },
      maxLength: {
        value: 12,
        message: 'Телефон должен быть не больше 12 символов'
      },
      pattern: {
        value: /^[0-9]+$/,
        message: 'Неверный телефон'
      }
    }
  },
  {
    key: 'email', title: 'E-mail',
    registerOptions: {
      pattern: {
        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        message: 'Неверный email'
      }
    },
  }
]
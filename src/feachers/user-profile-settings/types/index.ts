export interface IInfoAboutProfileItem {
  key: 'name' | 'lastName' | 'phone' | 'email';
  title: string;
  registerOptions: any
}

export interface IInfoAboutProfileDataList {
  'email'?: string,
  'lastName'?: string,
  'name'?: string,
  'phone'?: string | undefined,
}

export type IInfoAboutProfileList = IInfoAboutProfileItem[]

export enum Keys {
  NAME = 'name',
  LASTNAME = 'lastName',
  PHONE = 'phone',
  EMAIL = 'email',
}
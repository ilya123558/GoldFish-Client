import { ICategoryList } from "@/entities/category"

export interface INavItem {
  cotalogTitle: string,
  categoryList: ICategoryList,
  toggle: boolean
}
export type INavList = INavItem[]
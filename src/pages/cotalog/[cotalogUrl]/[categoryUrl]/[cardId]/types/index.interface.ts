import { ICard } from "@/entities/card";
import { ICategory } from "@/entities/category";
import { ICotalog } from "@/entities/cotalog";

export interface ICardPage {
  cotalogItem: ICotalog | null,
  categoryItem: ICategory | null,
  card: ICard | null
}

export interface ICardPageDetails {
  cotalogItem: ICotalog,
  categoryItem: ICategory,
  card: ICard
}

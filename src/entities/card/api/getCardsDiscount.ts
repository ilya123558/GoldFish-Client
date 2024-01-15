import axios from "axios"
import { ICardList } from "../types"

export const getCardsDiscount = async () => {
  try {
    const res = await axios.get<ICardList>(`${process.env.SERVER_URL}/product/all-discount`)
    const data = res.data
    return data
  } catch {
    return
  }
}
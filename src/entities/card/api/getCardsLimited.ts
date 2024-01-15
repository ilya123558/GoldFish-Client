import axios from "axios"
import { ICardList } from "../types"

export const getCardsLimited = async () => {
  try {
    const res = await axios.get<ICardList>(`${process.env.SERVER_URL}/product/all-limited`)
    const data = res.data
    return data
  } catch {
    return
  }
}
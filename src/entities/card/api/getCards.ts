import axios from "axios"
import { ICardList } from "../types"

export const getCards = async () => {
  try {
    const res = await axios.get<ICardList>(`${process.env.SERVER_URL}/product/all`)
    const data = res.data 
    return data
  } catch {
    console.log('error')
    return []
  }
}
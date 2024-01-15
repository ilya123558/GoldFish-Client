import axios from "axios"
import { ICard } from "../types"

export const getCard = async (cardId: string) => {
  try {
    const res = await axios.get<ICard>(`${process.env.SERVER_URL}/product/${cardId}`)
    const data = res.data 
    return data
  } catch {
    console.log('error')
    return null
  }
}
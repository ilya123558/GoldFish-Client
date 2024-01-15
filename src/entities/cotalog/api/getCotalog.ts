import axios from "axios"
import { ICotalogList } from "../types/index.interface"

export const getCotalog = async (contactUrl: string) => {
  try {
    const res = await axios.get<ICotalogList>(`${process.env.SERVER_URL}/cotalog/all`)
    const data = res.data.find(cotalogItem => cotalogItem.url === contactUrl) || null
  
    return data
  }catch {
    return null
  }
}
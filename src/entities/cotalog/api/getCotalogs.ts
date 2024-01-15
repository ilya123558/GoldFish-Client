import axios from "axios"
import { ICotalogList } from "../types/index.interface"

export const getCotalogs = async () => {
  try {
    const res = await axios.get<ICotalogList>(`${process.env.SERVER_URL}/cotalog/all`)

    return res.data
  }catch {
    return null
  }
}
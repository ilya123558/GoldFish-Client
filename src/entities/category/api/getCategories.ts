import { ICategoryList } from "@/entities/category"
import axios from "axios"

export const getCategories = async (cotalogUrl: string) => {
  try {
    const res = await axios.get<ICategoryList>(`${process.env.SERVER_URL}/category/all-by-cotalog?cotalogUrl=${cotalogUrl}`)
  
    return res.data
  }catch {
    return null
  }
}
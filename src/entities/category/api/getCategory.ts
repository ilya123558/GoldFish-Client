import { ICategory } from "@/entities/category"
import axios from "axios"

export const getCategory = async (categoryUrl: string) => {
  try {
    const res = await axios.get<ICategory>(`${process.env.SERVER_URL}/category/${categoryUrl}`)
    const data = res.data
  
    return data 
  }catch {
    return null
  }
}
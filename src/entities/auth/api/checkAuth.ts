import axios from "axios"

export const checkAuth = async () => {
  try {
    await axios.get(`${process.env.SERVER_URL}/auth`)
    return true
  } catch(e) {
    console.error(e)
    return false
  }
}
import { useRouter } from "next/router"
import { useEffect } from "react"

const CategoryUrlPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/cotalog')
  }, [])

  return <></>
}

export default CategoryUrlPage
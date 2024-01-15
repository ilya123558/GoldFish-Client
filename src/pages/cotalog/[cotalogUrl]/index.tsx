import { useRouter } from "next/router"
import { useEffect } from "react"

const CotalogUrlPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/cotalog')
  }, [])

  return <></>
}

export default CotalogUrlPage
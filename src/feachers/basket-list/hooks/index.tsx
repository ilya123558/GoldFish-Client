import {
  IUpdateBasket,
  useIncProductInBasketMutation,
  useDecProductInBasketMutation,
  useDeleteProductInBasketMutation
} from "@/entities/basket"
import { maxQuantity, minQuantity } from "../const"
import { useEffect, useState } from "react"

interface IProps {
  quantity: number,
  data: IUpdateBasket | undefined
}

interface IUpdateBasketHandle {
  key: 'inc' | 'dec' | 'delete',
}

export const useCastomHook = ({ quantity, data }: IProps) => {
  const [incProductInBasket, { isLoading: isIncLoading }] = useIncProductInBasketMutation()
  const [decProductInBasket, { isLoading: isDecLoading }] = useDecProductInBasketMutation()
  const [deleteProductInBasket, { isLoading: isDeleteLoading }] = useDeleteProductInBasketMutation()

  const [isLoading, setIsLoading] = useState(false)


  const updateBasketHandle = async({ key }: IUpdateBasketHandle) => {
    if ((key === 'inc') && (maxQuantity - 1 !== quantity)) {
      data && await incProductInBasket(data)
    }

    if ((key === 'dec') && (minQuantity !== quantity)) {
      data && await decProductInBasket(data)
    }

    if (key === 'delete') {
      data && await deleteProductInBasket(data)
    }
  }

  useEffect(() => {
    if (isIncLoading || isDecLoading || isDeleteLoading) {
      setIsLoading(true)
    }
    else {
      setIsLoading(false)
    }
  }, [isIncLoading, isDecLoading, isDeleteLoading])

  return {
    updateBasketHandle,
    isLoading
  }
} 
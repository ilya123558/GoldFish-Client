import { Modal } from "@/app/layout/ui/Modal";
import { useAppSelector } from "@/app/store";
import { useLazyGetAllProductsInBasketQuery, useLazyGetTotalPriceFromBasketQuery } from "@/entities/basket";
import { useCreateOrderMutation } from "@/entities/order";
import { useGetUserQuery } from "@/entities/user";
import { useFindDiscountValue } from "@/shared/hooks/useFindDiscountValue";
import { useFindPriceWithDiscount } from "@/shared/hooks/useFindPriceWithDiscount";
import { Button } from "@/shared/ui/button";
import { Loader } from "@/shared/ui/loader";
import { useEffect, useState } from "react";


export const BasketOrder = () => {
  const basketId = useAppSelector(state => state.main.user.basketId) as string
  const [openErrorModal, setOpenErrorModal] = useState(false)

  const { data: user, isLoading: isUserLoading } = useGetUserQuery(null)
  const [getTotalPriceFromBasket, { data: price }] = useLazyGetTotalPriceFromBasketQuery()

  const discountValue = useFindDiscountValue({ type: 'value', discountPoints: user?.discountPoints || 1000 }) as number
  const priceWithDiscount = useFindPriceWithDiscount({ price: price || 0, discountValue })

  const [createOrder, {
    isLoading: isCreateOrderLoading,
    isError: isCreateOrderError,
    isSuccess: isCreateOrderSuccess
  }] = useCreateOrderMutation()

  const [updateBasket] = useLazyGetAllProductsInBasketQuery()

  const onClickHandle = async () => {
    await createOrder({ price: priceWithDiscount })
  }

  useEffect(() => {
    (async () => await getTotalPriceFromBasket({ basketId }))()
  }, [])

  useEffect(() => {
    (async () => {
      if (isCreateOrderError) {
        setOpenErrorModal(true)
      }

      if (isCreateOrderSuccess) {
        await updateBasket({ basketId })
        await getTotalPriceFromBasket({ basketId })
      }
    })()

  }, [isCreateOrderError, isCreateOrderSuccess])

  return (
    <div className="w-[350px] h-[290px] bg-white rounded-[9px] shadow-card p-[36px_31px_0px] text-[30px] text-primary font-bold mb-[85px]">
      {isUserLoading
        ?
        <Loader />
        :
        <>
          <p className="mb-[6px]"><span className="text-[20px] mr-[5px]">Сумма:</span>{price} ₽</p>
          <div className="flex flex-wrap items-center">
            <p className="text-[22px] mr-[5px]">Сумма со скидкой:</p>
            <p>{priceWithDiscount} ₽</p>
          </div>
          <Button disabled={!price} className="text-[22px] m-[35px_0px_15px] h-[49px] w-full" clickHandle={onClickHandle}>Оформить</Button>
        </>
      }
      <Modal isOpen={isCreateOrderLoading}><Loader /></Modal>
      <Modal isOpen={openErrorModal} setIsOpen={setOpenErrorModal}>
        <div className="text-red-600 font-bold text-[32px] flex items-center justify-center bg-white p-[10px_20px] rounded-[9px] shadow-card">
          Не получилось оформить заказ
        </div>
      </Modal>
    </div>
  );
};
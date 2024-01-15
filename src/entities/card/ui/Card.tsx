import { NextPage } from "next";
import { ICard } from "../types";
import Image, { StaticImageData } from "next/image";
import { busket, findCardImg, players, time } from "@/app/assets/images/card";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useAddProductInBasketMutation } from "@/entities/basket";
import { useAppSelector } from "@/app/store";
import { useFindPriceWithDiscount } from "@/shared/hooks/useFindPriceWithDiscount";
import { useRouter } from "next/router";
import { Loader } from "@/shared/ui/loader";
import { useCreateOrderMutation } from "@/entities/order";

export const Card: NextPage<ICard> = ({
  id,
  ageLimit,
  categoryUrl,
  cotalogUrl,
  imgSrcList,
  playersFrom,
  playersTo,
  price,
  url,
  timeFrom,
  timeTo,
  title,
  discount
}) => {
  const [addProductInBasket, { isLoading, isError, isSuccess }] = useAddProductInBasketMutation()
  const [createOrder, {
    isLoading: isOrderLoading,
    isError: isOrderError,
    isSuccess: isOrderSuccess
  }] = useCreateOrderMutation()

  // обработать случаи состояния загрузки, ошибки и успеха
  
  const router = useRouter()
  const basketId = useAppSelector(state => state.main.user.basketId)
  const [imgSrc, setImgSrc] = useState<StaticImageData | null>(null)
  const [toggle, setToggle] = useState(false)
  const priceWithDiscount = useFindPriceWithDiscount({ price, discountValue: discount || 0 })

  const addProductInBasketHandle = () => {
    if (basketId) {
      addProductInBasket({
        basketId,
        productId: id
      })
    }
  }

  const createOrderHandle = async () => {
    await createOrder({ price: priceWithDiscount })
  }

  useEffect(() => {
    (async () => {
      const imgSrc = await findCardImg(cotalogUrl, categoryUrl, url, imgSrcList[0])
      imgSrc && setImgSrc(imgSrc)
    })()
  }, [])

  useEffect(() => {
    if (isError || isSuccess) {
      setToggle(true)
      setTimeout(() => {
        setToggle(false)
      }, 2000)
    }

    if (isLoading) {
      setToggle(true)
    }
  }, [isError, isLoading, isSuccess])

  return (
    <div onClick={() => { router.push(`/cotalog/${cotalogUrl}/${categoryUrl}/${id}`) }} className="relative w-[255px] h-[400px] rounded-[9px] shadow-card p-[15px_44px_0px] flex flex-col items-center cursor-pointer">
      <div className={toggle ? 'blur-sm' : ''}>
        <div className="relative">
          {
            discount && <div className="absolute right-[-25px] rounded-[14px] w-[70px] h-[30px] flex items-center justify-center bg-gold text-white text-[16px] font-medium" >
              {discount}%
            </div>
          }
          {
            imgSrc && <Image
              alt="card"
              src={imgSrc}
              width={500}
              height={500}
              className="max-w-[190px] max-h-[168px] w-full h-auto object-contain"
            />
          }
        </div>
        <div className="flex justify-between w-full text-[11px] font-medium ">
          <div className="flex items-center">
            <Image src={players} alt="players" width={15} />
            <p className="ml-[5px]">{playersFrom}-{playersTo}</p>
          </div>
          <div className="flex items-center">
            <Image src={time} alt="time" width={11} />
            <p className="ml-[4px]">{timeFrom}-{timeTo}</p>
          </div>
          <p>{ageLimit}+</p>
        </div>
        <h3 className="text-[16px] font-bold m-[8px_0px]">{title}</h3>
        <div className={`w-full flex items-center ${discount ? 'justify-between' : 'justify-center'} mb-[14px]`}>
          {discount &&
            <p className="relative text-[18px] font-normal before:bg-primary before:w-full before:absolute before:h-[1px] before:rotate-[-15deg] before:bottom-[13px]">
              {price} ₽
            </p>
          }
          <p className="text-[21px] font-bold">{discount ? priceWithDiscount : price} ₽</p>
        </div>
        <Button title="В корзину" clickHandle={addProductInBasketHandle}>
          <Image alt="busket" src={busket} width={20} height={20} className="ml-[7px]" />
        </Button>
        <Button clickHandle={createOrderHandle} className="bg-white mt-[10px]">
          <p className="text-gold">Купить в 1 клик</p>
        </Button>
      </div>
      {isLoading && <Loader className="z-[100] absolute" />}
      {(isError && toggle) &&
        <div className="z-[100] absolute flex items-center justify-center w-full h-full">
          <p className="max-w-[70%] text-[18px] font-bold text-center text-red-600 rounded-[9px] bg-white shadow-card p-[6px_10px]">Не удалось добавить продукт в корзину</p>
        </div>
      }
      {(isSuccess && toggle) &&
        <div className="z-[100] absolute flex items-center justify-center w-full h-full">
          <p className="max-w-[70%] text-[18px] font-bold text-center text-green-600 rounded-[9px] bg-white shadow-card p-[6px_10px]">Продукт добавлен в корзину</p>
        </div>
      }
    </div>
  )
}
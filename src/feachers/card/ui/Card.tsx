import { NextPage } from "next";
import { ICard } from "../types";
import Image from "next/image";
import { busket, findImg, players, time } from "@/app/assets/images/card";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export const Card: NextPage<ICard> = ({
  ageLimit,
  category,
  cotalog,
  imgSrc,
  playersFrom,
  playersTo,
  price,
  product,
  timeFrom,
  timeTo,
  title,
  discount,
  oldPrice
}) => {
  return (
    <div className="w-[255px] h-[400px] rounded-[9px] shadow-card p-[15px_44px_0px] flex flex-col items-center">
      <div className="relative">
        {
          discount && <div className="absolute right-[-25px] rounded-[14px] w-[70px] h-[30px] flex items-center justify-center bg-gold text-white text-[16px] font-medium" >
            {discount}%
          </div>
        }
        <Image
          alt="card"
          src={findImg(imgSrc)}
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
          className="max-w-[190px] max-h-[168px]"
        />
      </div>
      <div className="flex justify-between w-full text-[11px] font-medium ">
        <div className="flex items-center">
          <Image src={players} alt="players" width={15} height={15} />
          <p className="ml-[5px]">{playersFrom}-{playersTo}</p>
        </div>
        <div className="flex items-center">
          <Image src={time} alt="time" width={11} height={11} />
          <p className="ml-[4px]">{timeFrom}-{timeTo}</p>
        </div>
        <p>{ageLimit}+</p>
      </div>
      <h3 className="text-[16px] font-bold m-[8px_0px]">{title}</h3>
      <div className={`w-full flex items-center ${oldPrice ? 'justify-between' : 'justify-center'} mb-[14px]`}>
        {oldPrice &&
          <p className="relative text-[18px] font-normal before:bg-primary before:w-full before:absolute before:h-[1px] before:rotate-[-15deg] before:bottom-[13px]">
            {oldPrice} ₽
          </p>
        }
        <p className="text-[21px] font-bold">{price} ₽</p>
      </div>
      <Button title="В корзину" clickHandle={() => { }}>
        <Image alt="busket" src={busket} width={20} height={20} className="ml-[7px]" />
      </Button>
      <Link href={`${category}/${cotalog}/${product}`}>
        <Button clickHandle={() => { }} className="bg-white mt-[10px]">
          <p className="text-gold">Купить в 1 клик</p>
        </Button>
      </Link>
    </div>
  )
}
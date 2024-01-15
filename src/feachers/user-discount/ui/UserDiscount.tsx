import { useLayoutEffect, useState } from "react"
import Image from "next/image"
import logo from "@/app/assets/images/profile/logo.png"
import { list } from "../const"
import { useFindDiscountValue } from "@/shared/hooks/useFindDiscountValue"

interface IProps {
  discountPoints: number
}

export const UserDiscount: React.FC<IProps> = ({ discountPoints }) => {
  const [{color, discountValue}] = useState({
    color: useFindDiscountValue({ type: 'color', discountPoints }),
    discountValue: useFindDiscountValue({ type: 'value', discountPoints })
  })

  return (
    <div className="mt-[29px]">

      <h3 className="text-primary text-[22px] font-bold mb-[14px]">Карта лояльности</h3>
      <div className="flex justify-between h-[252px]">
        <div className="rounded-[17px] bg-primary flex items-center justify-center min-w-[445px] h-full shadow-card">
          <div className={`rounded-[16px] ${color} flex items-center justify-center w-[calc(100%-14px)] h-[calc(100%-14px)]`}>
            <div className="rounded-[15px] bg-gradient-to-b from-[#2A2A2A]/80 to-[#2A2A2A] flex items-center justify-center w-[calc(100%-14px)] h-[calc(100%-14px)]">
              <div className="flex flex-col items-center">
                <Image src={logo} alt="logo" />
                {discountValue !== 0 &&
                  <p className={`text-transparent text-[33px] bg-clip-text font-semibold ${color}`}>-{discountValue}%</p>
                }
              </div>
            </div>
          </div>
        </div>

        <div className={'w-full h-full ml-[29px]'}>
          <ul className={`flex flex-col justify-between h-full text-[17px] font-bold text-primary`}>
            {list.map(({ imgSrc, discountValue, points, title }) => (
              <li key={title} className={`flex justify-between items-end ${discountPoints >= points ? '' : ' opacity-[0.28]'}`}>
                <div className="flex items-center">
                  <div className="rounded-[9px] w-[65px] h-[65px] bg-white shadow-card flex items-center justify-center">
                    <Image src={imgSrc} alt="discount-icon" />
                  </div>
                  <div className="ml-[30px]">
                    <p className="">{discountValue}% «{title}»</p>
                    <p className="font-normal text-black">
                      {discountPoints >= points
                        ? 'Получено'
                        : 'Закрыто'
                      }
                    </p>
                  </div>
                </div>
                <div>
                  <p>{points}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
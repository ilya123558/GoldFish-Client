import Image from "next/image"
import userDefaultIcon from '@/app/assets/images/profile/user-default-icon.png'
import { useFindDiscountValue } from "@/shared/hooks/useFindDiscountValue"

interface IProps {
  imgSrc?: string
  name: string
  lastName: string
  discountPoints?: number
}

export const UserInfo: React.FC<IProps> = ({ discountPoints = 1000, imgSrc, lastName, name }) => {
  const discountStatus = useFindDiscountValue({ type: 'status', discountPoints })

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <Image
          src={imgSrc || userDefaultIcon}
          alt="user-img"
          className="w-[74px] h-[74px] rounded-full bg-white"
        />
        <p className="ml-[28px] text-black text-[22px] font-bold">{lastName} {name}</p>
      </div>
      {discountStatus && <div className='flex items-center'>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="18.5" fill="white" stroke="#F9A43F" />
          <path d="M9.5 18.5L16.25 25.25L27.5 11.75" stroke="#F9A43F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="ml-[33px] text-primary text-[19px] font-bold">{discountStatus}</p>
      </div>
      }
    </div>
  )
} 
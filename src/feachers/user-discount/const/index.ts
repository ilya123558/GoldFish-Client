import { StaticImageData } from 'next/image'

import goldIcon from '@/app/assets/images/profile/gold-icon.png'
import silverIcon from '@/app/assets/images/profile/silver-icon.png'
import bronzeIcon from '@/app/assets/images/profile/bronze-icon.png'

export const list: {
  imgSrc: StaticImageData
  discountValue: number,
  title: 'Новичок' | 'Любитель' | 'Профессионал'
  points: number,
}[] = [
    {
      imgSrc: bronzeIcon,
      discountValue: 5,
      points: 1000,
      title: 'Новичок'
    }, {
      imgSrc: silverIcon,
      discountValue: 10,
      points: 5000,
      title: 'Любитель'
    }, {
      imgSrc: goldIcon,
      discountValue: 15,
      points: 10000,
      title: 'Профессионал'
    }
  ]
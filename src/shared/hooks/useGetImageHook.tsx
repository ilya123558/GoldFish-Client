import { findCardImg } from '@/app/assets/images/card';
import { ICard } from '@/entities/card';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

interface IProps {
  data: ICard | undefined
}

export const useGetImageHook = ({ data }: IProps) => {
  const [imgSrc, setImgSrc] = useState<StaticImageData | null>(null)

  useEffect(() => {
    (async () => {
      if (data) {
        const imgSrc = await findCardImg(data.cotalogUrl, data.categoryUrl, data.url, data.imgSrcList[0])
        imgSrc && setImgSrc(imgSrc)
      }
    })()
  }, [data])

  return [imgSrc]
};
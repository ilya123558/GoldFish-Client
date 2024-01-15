import time from './main/time.png'
import players from './main/players.png'
import busket from './main/busket.png'
import { StaticImageData } from 'next/image'

export { time, players, busket }

export const findCardImg = async (cotalogUrl: string, categoryUrl: string, cardUrl: string, imgSrc: string) => {
  try {
    // const response: StaticImageData = (await import(`./${cotalogUrl}/${categoryUrl}/${cardUrl}/${imgSrc}`)).default
    const response: StaticImageData = (await import(`./warhammer/warhammer-40k/chaos-space-marines/${imgSrc}`)).default
    return response || null;
  } catch (error) {
    console.error('Ошибка при динамическом импорте изображения:', error);
    return null;
  }
}
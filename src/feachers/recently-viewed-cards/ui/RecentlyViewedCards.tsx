import { Card, ICard, getCardsToLocalStorage, useLazyGetCardsByIdsQuery } from "@/entities/card"
import { Spinner } from "@/shared/ui/spinner"
import { Typography } from "@/shared/ui/typography"
import React, { useEffect, useState } from "react"

export const RecentlyViewedCards: React.FC<{ cardId: number }> = ({ cardId }) => {
  const [cardsIds, setCardsIds] = useState<number[]>([])
  const [getCardsByIds, { data, isLoading }] = useLazyGetCardsByIdsQuery()

  useEffect(() => {
    (async () => {
      const ids = await getCardsToLocalStorage(cardId)
      await setCardsIds(ids.map(id => Number(id)))
      await getCardsByIds(ids)
    })()
  }, [])

  return (
    <div className="mb-[40px]">
      <Typography className="m-[30px_0px]">Вы недавно смотрели</Typography>
      {isLoading
        ? <Spinner />
        : data && data.length !== 0
          ? <ul className={data.length < 4 ? "flex" : "flex justify-between"}>
            {data.map((card, index) => (
              <li key={card.id} className={data.length < 4 ? 'mr-[15px]' : ''}>
                <Card {...data.find(card => card.id === cardsIds[index]) || card} />
              </li>
            ))}
          </ul>
          : <div className="w-full h-[200px] flex items-center justify-center text-red-600">Список пуст</div>
      }
    </div>
  )
}
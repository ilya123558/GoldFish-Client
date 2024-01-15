import { useAppDispatch, useAppSelector } from "@/app/store";
import { Card, getCards, updateCardList } from "@/entities/card";
import { useEffect } from "react";

export const ProductItems = () => {
  const { activePage, productPageLimite } = useAppSelector(state => state.pagination)
  const cardList = useAppSelector(state => state.card.cardList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      const data = await getCards()
      dispatch(updateCardList(data))
    })()
  }, [])

  return (
    <div className="w-full">
      <ul className="grid grid-cols-3 gap-y-4 justify-items-end">
        {cardList.length > 0
          ? cardList.filter((_, index) => {
            const indexEnd = productPageLimite * activePage
            const IndexStart = indexEnd - productPageLimite
            return index >= IndexStart && index < indexEnd
          }).map(card => (
            <li key={card.id}>
              <Card {...card} />
            </li>
          ))
          :
          <li className="w-full font-bold text-red-700 text-[1.3rem] col-span-3 flex items-center justify-center ">
            <p>Товаров не найдено</p>
          </li>
        }
      </ul>
    </div>
  );
};

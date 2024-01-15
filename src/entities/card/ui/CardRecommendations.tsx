import { Spinner } from "@/shared/ui/spinner";
import { Card } from "./Card";
import { ICard } from "../types";
import { useGetCardsRecommendationByCategoryQuery } from "../api";

export const CardRecommendations: React.FC<ICard> = ({ categoryUrl, id }) => {
  const { data, isLoading } = useGetCardsRecommendationByCategoryQuery({ categoryUrl, cardId: id })

  return (
    <div className="w-full">
      <h4 className="text-[19px] font-bold m-[23px_0px_17px] text-center">С этим товаром покупают</h4>
      <ul className="flex flex-col items-center w-full">
        {isLoading
          ? <Spinner />
          : data
            ? data.map(card => (
              <li key={card.id} className="mb-[20px]">
                <Card {...card} />
              </li>
            ))
            : <div className="w-full h-[200px] flex items-center justify-center text-red-600">Список пуст</div>
        }
      </ul>
    </div>
  )
}
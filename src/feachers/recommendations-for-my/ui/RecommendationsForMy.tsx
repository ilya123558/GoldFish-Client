import { Card, useGetCardsRecommendationQuery } from "@/entities/card"
import { Loader } from "@/shared/ui/loader"

export const RecommendationsForMy = () => {
  const { data, isLoading, isError } = useGetCardsRecommendationQuery(6)


  return (
    <div className={''}>
      <h3 className={'font-bold text-[22px] text-primary mb-[21px]'}>Рекомендуем для вас</h3>
      <div className="w-full min-h-[100px]">
        {
          isLoading
            ? <Loader className="min-h-[100px] " />
            : (
              isError
                ?
                <div className="text-red-600 text-[30px] font-semibold flex items-center justify-between min-h-[100px]">
                  Не удалось загрузить рекомендации
                </div>
                :
                <div className="flex flex-wrap gap-y-[25px] justify-between">
                  {data && data.map(item => (
                    <Card key={item.id} {...item}/>
                  ))}
                </div>
            )
        }
      </div>
    </div>

  )
}


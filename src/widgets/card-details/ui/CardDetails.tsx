import { Container } from "@/app/layout"
import { CardSlider, ICard, CardInfo, CardRecommendations } from "@/entities/card"
import { CardContentMapping } from "@/feachers/card-content-mapping/ui/CardContentMapping"
import { RecentlyViewedCards } from "@/feachers/recently-viewed-cards"
import { Typography } from "@/shared/ui/typography"


export const CardDetails: React.FC<ICard> = (card) => {

  return (
    <Container className="">
      <Typography>{card.title}</Typography>
      <div className="flex justify-between m-[20px_0px_75px]">
        <div className="max-w-[700px] w-full">
          <CardSlider {...card}/>
          <CardContentMapping {...card}/>
        </div>
        <div className="w-[350px]">
          <CardInfo {...card} />
          <CardRecommendations {...card} />
        </div>
      </div>
      <RecentlyViewedCards cardId={card.id}/>
    </Container>
  )
}
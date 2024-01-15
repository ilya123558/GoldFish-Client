import { Layout } from "@/app/layout";
import { Carusel } from "@/widgets/carusel";
import { CotalogItems } from "@/shared/ui/cotalog-items";
import { Slider } from "@/widgets/slider";

import { slides, allEvents, nextEvents } from "./const";
import { Event } from "@/feachers/event";
import { InfoGamePlace } from "@/feachers/info-game-place";
import { InfoContact } from "@/widgets/info-contact";
import { GetStaticProps, NextPage } from "next";
import { ICardList, getCardsDiscount, getCardsLimited } from "@/entities/card";

interface IProps {
  productsLimited: ICardList | undefined,
  productsDiscount: ICardList | undefined
}

const Home: NextPage<IProps> = ({ productsLimited, productsDiscount }) => {
  return (
    <Layout title="home page" >
      <Carusel slides={slides} />
      <CotalogItems />
      <Slider title="Успей купить" slides={productsLimited || []} />
      <Slider title="Специальные предложения" slides={productsDiscount || []} />
      <Event events={nextEvents} title="Ближайшие мероприятия" url="/next-events" />
      <Event events={allEvents} title="Больше интересной информации" url="/all-events" className="mb-[85px]" />
      <InfoGamePlace />
      <InfoContact className="mt-[85px] mb-[85px]" />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const productsLimited = await getCardsLimited()
  const productsDiscount = await getCardsDiscount()

  return {
    props: {
      productsLimited,
      productsDiscount
    }
  }
}

export default Home
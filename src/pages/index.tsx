import { Layout } from "@/app/layout";
import { Carusel } from "@/widgets/carusel";
import { CotalogItems } from "@/shared/ui/cotalog-items";
import { Slider } from "@/widgets/slider";

import { limitedProducts, discountProducts, slides, allEvents, nextEvents } from "./const";
import { Event } from "@/feachers/event";
import { InfoGamePlace } from "@/feachers/info-game-place";
import { InfoContact } from "@/widgets/info-contact";

export default function Home() {
  return (
    <Layout title="home page">
      <Carusel slides={slides} />
      <CotalogItems />
      <Slider title="Успей купить" slides={limitedProducts} />
      <Slider title="Специальные предложения" slides={discountProducts} />
      <Event events={nextEvents} title="Ближайшие мероприятия" url="/next-events"/>
      <Event events={allEvents} title="Больше интересной информации" url="/all-events" className="mb-[85px]" />
      <InfoGamePlace />
      <InfoContact className="mt-[85px] mb-[85px]"/>
    </Layout>
  )
}

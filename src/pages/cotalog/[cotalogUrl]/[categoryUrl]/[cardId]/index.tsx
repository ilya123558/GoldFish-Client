import { GetServerSideProps, NextPage } from "next"
import { getCard } from "@/entities/card"
import { getCotalog } from "@/entities/cotalog"
import { ParsedUrlQuery } from "querystring"
import { ICardPage } from "./types/index.interface"
import { getCategory } from "@/entities/category"
import { CardPage } from "./ui/CardPage"


const Card: NextPage<ICardPage> = ({ cotalogItem, categoryItem, card }) => (
  !cotalogItem || !categoryItem || !card
    ? <></>
    : <CardPage
      cotalogItem={cotalogItem}
      categoryItem={categoryItem}
      card={card}
    />
)


export const getServerSideProps: GetServerSideProps<ICardPage> = async (context) => {
  const { params } = context;
  const { cotalogUrl, categoryUrl, cardId } = params as ParsedUrlQuery
  const cotalogItem = await getCotalog(cotalogUrl as string)
  const categoryItem = await getCategory(categoryUrl as string)
  const card = await getCard(cardId as string)

  return {
    props: {
      cotalogItem,
      categoryItem,
      card
    },
  };
};

export default Card
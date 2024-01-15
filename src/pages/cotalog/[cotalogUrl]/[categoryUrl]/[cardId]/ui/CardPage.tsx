import { Breadcrumbs } from "@/shared/ui/breadcrumbs"
import { ICardPageDetails } from "../types/index.interface"
import { Layout } from "@/app/layout"
import { CardDetails } from "@/widgets/card-details"
import { useEffect } from "react"
import { saveCardToLocalStorage } from "@/entities/card"


export const CardPage: React.FC<ICardPageDetails> = ({ cotalogItem, categoryItem, card }) => {
  useEffect(() => {
    saveCardToLocalStorage(card.id)
  },[])

  return (
    <Layout title={card.title}>
      <Breadcrumbs navigationItems={[
        { title: 'Каталог', url: 'cotalog' },
        { ...cotalogItem, url: `cotalog/${cotalogItem.url}` },
        { ...categoryItem, url: `cotalog/${cotalogItem.url}/${categoryItem.url}` },
        card]}
      />
      <CardDetails {...card}/>
    </Layout>
  )
}
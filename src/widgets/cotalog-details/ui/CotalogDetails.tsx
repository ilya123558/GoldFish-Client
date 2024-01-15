import { memo } from "react"
import { Container } from "@/app/layout"
import { ProductItems } from "@/feachers/product-items"
import { ProductSorter } from "@/feachers/product-sorter"
import { Typography } from "@/shared/ui/typography"

export const CotalogDetails: React.FC = memo(() => {

  return ( 
    <Container>
      <Typography className={'text-black  mb-[10px]'}>Каталог</Typography>
      <div className="flex">
        <ProductSorter/>
        <ProductItems />
      </div>
    </Container>
  )
})
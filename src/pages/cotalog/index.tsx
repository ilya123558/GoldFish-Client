import { getCotalogs } from "@/entities/cotalog"
import { GetServerSideProps, NextPage } from "next"
import { ICategoryPage } from "./types/index.interface"
import { getCategories } from "@/entities/category"
import { CotalogPage } from "./ui/CotalogPage"
import { INavList } from "@/shared/ui/product-sorter-by-category"


const Cotalog: NextPage<ICategoryPage> = ({navList}) => {
  if(navList.length === 0) return <></>

  return (
    <CotalogPage navList={navList}/>
  )
}

export const getServerSideProps: GetServerSideProps<ICategoryPage> = async () => {
  const cotalogList = await getCotalogs() || []
  const navList: INavList = []

  for (const cotalogItem of cotalogList) {
    const categoryList = await getCategories(cotalogItem.url) || []
    await navList.push({ cotalogTitle: cotalogItem.title, categoryList, toggle: false })
  }

  return {
    props: {
      navList
    },
  };
};

export default Cotalog
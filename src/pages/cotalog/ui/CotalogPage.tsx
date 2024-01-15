import { Layout } from "@/app/layout"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"
import { useEffect, useState } from "react"
import { CotalogDetails } from "@/widgets/cotalog-details"
import { INavList } from "@/shared/ui/product-sorter-by-category"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { setNavList } from "@/entities/card"
import { Pagination, setActivePage } from "@/shared/ui/pagination"


export const CotalogPage: React.FC<{ navList: INavList }> = ({ navList }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNavList(navList))
  }, [])

  return (
    <Layout title="Каталог">
      <Breadcrumbs navigationItems={[{ title: 'Каталог', url: 'cotalog' }]} />
      <CotalogDetails />
      <Pagination />
    </Layout>
  )
}
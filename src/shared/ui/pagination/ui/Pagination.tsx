import { useAppDispatch, useAppSelector } from "@/app/store"
import { useCallback } from "react"
import { setActivePage } from "../slices"

export const Pagination: React.FC = () => {

  const { activePage, productPageLimite } = useAppSelector(state => state.pagination)
  const allProduct = useAppSelector(state => state.card.cardList.length)
  const dispatch = useAppDispatch()

  const setActivePageHandle = (activePage: number) => {
    dispatch(setActivePage(activePage))
  }

  const getListItems = useCallback(() => {
    const pages = Math.ceil(allProduct / productPageLimite)
    const items: JSX.Element[] = []
    const itemJsx = <li key={'k1'} className="mb-[-1px]">...</li>

    for (let i = 0; i < pages; i++) {
      items.push(<li key={i} className="mb-[-1px]" onClick={() => setActivePageHandle(i + 1)}>
        <button className={`w-[27px] h-[27px] active:scale-95 transition-all border-[1px] ${activePage === i + 1 ? 'border-primary' : 'border-transparent'} hover:border-primary rounded-[7px]`}>
          {i + 1}
        </button>
      </li>)
    }

    if (items.length > 10) {

      if (activePage === items.length) {
        items.splice(1, items.length - 5, itemJsx)
      }

      if (activePage === items.length - 1 || activePage === items.length - 2 || activePage === items.length - 3) {
        items.splice(1, items.length - 6, itemJsx)
      }

      if (activePage === 1) {
        items.splice(4, items.length - 5, itemJsx)
      }

      if (activePage === 2 || activePage === 3 || activePage === 4) {
        items.splice(5, items.length - 6, itemJsx)
      }

      if (4 < activePage && activePage < items.length - 3) {
        items.splice(1, activePage - 4, <li key={'k1'} className="mb-[-1px]">...</li>)
        items.splice(7, items.length - 8, <li key={'k2'} className="mb-[-1px]">...</li>)
      }
    }

    return items
  }, [allProduct, activePage])



  return allProduct > productPageLimite
    ? (
      <div className="w-full flex items-center justify-center m-[63px_0px]">
        <ul className="flex items-center justify-between text-[19px] text-primary font-bold">
          <li key={-1} className="ml-[15px] ">
            <button onClick={() => setActivePageHandle(activePage === 1 ? activePage : activePage - 1)} className="w-[20px] h-[20px] flex items-center justify-center active:scale-95 transition-all">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="#2A2A2A" />
              </svg>
            </button>
          </li>
          {getListItems()}
          <li key={-2} className="mr-[15px]">
            <button onClick={() => setActivePageHandle(activePage === Math.ceil(allProduct / productPageLimite) ? activePage : activePage + 1)} className="w-[20px] h-[20px] flex items-center justify-center active:scale-95 transition-all">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#2A2A2A" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    )
    : <></>
}
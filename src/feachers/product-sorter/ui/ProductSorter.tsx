import Image from "next/image"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { arrowBlack } from "@/app/assets/images/header"
import { components } from "./const"
import { resetSort, updateCardList, updateSortListToggle, useGetCardsSortedMutation } from "@/entities/card"
import { useEffect } from "react"
import { setActivePage } from "@/shared/ui/pagination"


export const ProductSorter: React.FC = () => {
  const sortList = useAppSelector(state => state.card.sortList)
  const sort = useAppSelector(state => state.card.sort)
  const dispatch = useAppDispatch()
  const [getCardsSorted, { data }] = useGetCardsSortedMutation()

  const toggleHandle = (index: number, value: boolean) => {
    dispatch(updateSortListToggle({ index, value }))
  }

  useEffect(() => {
    if (data) {
      dispatch(updateCardList(data))
    }
  }, [data])

  const clickHandle = async () => {
    await getCardsSorted(sort)
    await dispatch(setActivePage(1))
  }

  const clickResetHandle = async () => {
    await dispatch(resetSort())
    await getCardsSorted(sort)
    await dispatch(setActivePage(1))
  }

  return (
    <div className="mb-[100px]">
      <div className="shadow-card rounded-[9px] min-w-[255px] overflow-hidden">
        <ul>
          {sortList.map(({ title, toggle, componentKey }, index) => {
            const Component = components[componentKey] || <></>
            return (
              <li
                key={index}
                className={`font-bold text-[19px] p-[24px_20px_24px_20px] ${sortList.length - 1 === index
                  ? 'border-b-[0px]'
                  : 'border-b-[2px]'
                  } border-primary border-opacity-[0.12]`}
              >
                <div className="flex justify-between items-center">
                  <p className="whitespace-nowrap max-w-[200px] overflow-hidden">{title}</p>
                  <Image
                    onClick={() => toggleHandle(index, !toggle)}
                    src={arrowBlack}
                    alt='arrow'
                    className={`swiper-button-prev-1  ${toggle ? 'rotate-[90deg]' : 'rotate-[-90deg]'} cursor-pointer transition-all hover:scale-[1.1]`}
                  />
                </div>
                {toggle && <Component />}
              </li>
            )
          })}
        </ul>
        <div className="p-[24px_20px_24px_20px]">
          <button onClick={clickResetHandle} className="w-full h-[40px] text-[12px] font-normal active:scale-95 transition-all border-[1px] border-primary rounded-[9px]">
            Сбросить фильтр
          </button>
          <button onClick={clickHandle} className="w-full h-[40px] text-[12px] font-normal active:scale-95 transition-all border-[1px] border-gold text-gold rounded-[9px] mt-[10px]">
            Отфильтровать
          </button>
        </div>
      </div>
    </div>
  )
}
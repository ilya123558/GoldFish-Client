import Image from "next/image";
import { arrowBlack } from "@/app/assets/images/header";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { updateActiveTitleCategory, updateCotalogToggle } from "@/entities/card";
import { ICategory } from "@/entities/category";
export { type INavList } from "./types/index.interface";

export const ProductSorterByCategory: React.FC = () => {
  const navList = useAppSelector(state => state.card.navList) || []
  const activeCategoryUrl = useAppSelector(state => state.card.sort.categoryUrl)

  const dispatch = useAppDispatch()

  const toggleHandle = (index: number, value: boolean) => {
    dispatch(updateCotalogToggle({ index, value }))
  }

  const categoryClickHandle = (categoryItem: ICategory) => {
    dispatch(updateActiveTitleCategory(categoryItem.url))
  }

  return (
    <ul className="ml-[12px] font-bold text-[18px]">
      {navList.map(({ categoryList, cotalogTitle, toggle }, index) => (
        <li key={index} className="mb-[5px]">
          <div className="flex justify-between items-center">
            <p className="overflow-hidden">{cotalogTitle}</p>
            <Image
              onClick={() => toggleHandle(index, !toggle)}
              src={arrowBlack}
              alt='arrow'
              className={`swiper-button-prev-1 ${toggle ? 'rotate-[-90deg]' : 'rotate-[90deg]'} cursor-pointer transition-all hover:scale-[1.1]`}
            />
          </div>

          {toggle && <ul className="ml-[15px] text-[16px] font-normal">
            {categoryList.length === 0
              ? <li key={'k'} className="inline-block font-bold opacity-[0.85] m-[4px_0px]">
                Нет категорий
              </li>
              : categoryList.map((category, index) => (
                <li key={index} className="mb-[2px] last:mb-[0px]">
                  <button
                    onClick={() => categoryClickHandle(category)}
                    className={`text-start active:scale-95 transition-all cursor-pointer  
                  ${activeCategoryUrl === category.url
                        ? 'font-bold'
                        : 'opacity-[0.85] hover:opacity-100 hover:font-bold'
                      }`
                    }>
                    {category.title}
                  </button>
                </li>
              ))
            }
          </ul>}
        </li>
      ))}
    </ul>
  )
}
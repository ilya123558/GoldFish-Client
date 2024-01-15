import { ICategoryList } from "@/entities/cotalog";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface IProps {
  categoryList: ICategoryList, 
  cotalogUrl: string
}

export const CategoryList: React.FC<PropsWithChildren<IProps>> = ({ categoryList, cotalogUrl, children }) => {
  return (
    <div className="p-[12px_30px] w-full">
      {children}
      {categoryList.length === 0
        ? <p className="h-[70%] w-full flex items-center justify-center font-bold text-[24px] text-red-800">Категорий не найдено</p>
        : <ul className="grid grid-cols-3 gap-6">
          {
            categoryList.map(({title, url}) => <li key={url}>
              <Link href={`/cotalog/${cotalogUrl}/${url}`} className="inline-block">
                <p className="hover:text-gold transition-all">{title}</p>
              </Link>
            </li>)
          }
        </ul>
      }
    </div>
  );
};
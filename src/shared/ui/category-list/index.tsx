import { ICategoryList } from "@/entities/cotalog-pop-up/types/index.interface";
import { NextPage } from "next";
import Link from "next/link";

interface IProps {
  cotalogTitle: string,
  categoryList: ICategoryList
}

export const CategoryList: NextPage<IProps> = ({ cotalogTitle, categoryList }) => {
  return (
    <div className="p-[12px_30px]">
      <h2 className="text-xl mb-[20px]">{cotalogTitle}</h2>
      <ul className="grid grid-cols-3 gap-6">
        {categoryList.map(({ url, title }) => <li key={url} className="hover:text-gold transition-all">
          <Link href={url}>{title}</Link>
        </li>)}
      </ul>
    </div>
  );
};
import React, { useEffect, useState } from 'react';
import { Container } from '@/app/layout';
import { NextPage } from 'next';
import { useGetCotalogsQuery } from '../api';
import { CotalogList } from '@/shared/ui/cotalog-list';
import { CategoryList } from '@/shared/ui/category-list';
import { Spinner } from '@/shared/ui/spinner';
import { useLazyGetCategoriesByCotalogQuery } from '@/entities/category';
import { Loader } from '@/shared/ui/loader';

interface IProps {
  className?: string,
}


export const CotalogPopUp: NextPage<IProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { data: cotalogList, isLoading: cotalogLoading } = useGetCotalogsQuery(null)
  const [getCategories, { data: categoryList, isLoading: categoriesLoading }] = useLazyGetCategoriesByCotalogQuery()

  useEffect(() => {
    (async () => {
      cotalogList && activeIndex !== null && await getCategories(cotalogList[activeIndex].url)
    })()
  }, [activeIndex])

  return (
    <Container className='relative'>
      <div className={'font-bold shadow-pop-up bg-[#255251248] w-[100%] absolute left-0 right-0 bg-white p-0 z-40 flex ' + className}>
        {cotalogLoading
          ? <Loader />
          : < CotalogList activeIndex={activeIndex} cotalogList={cotalogList || []} setActiveIndex={setActiveIndex} />
        }
        {cotalogList
          ?
          activeIndex !== null
            ? categoriesLoading
              ? <Loader className='h-[300px]' />
              : (cotalogList && categoryList &&
                <CategoryList
                  categoryList={categoryList}
                  cotalogUrl={cotalogList[activeIndex].url}
                >
                  <h2 className="text-xl mb-[20px]">{cotalogList[activeIndex].title}</h2>
                </CategoryList>
              )
            :
            <div className='h-[300px] w-[75%] flex items-center justify-center'>
              <h2 className="text-xl m-[12px_30px] text-gold opacity-80">Выберите категорию</h2>
            </div>
          : <Loader />
        }

      </div>
    </Container>
  );
};
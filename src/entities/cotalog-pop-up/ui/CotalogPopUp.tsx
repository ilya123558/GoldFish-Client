import { Container } from '@/app/layout';
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { useLazyGetCategoriesQuery, useLazyGetCotalogsQuery } from '../api';
import CategoriesList from '@/shared/ui/categories-list';
import { CategoryList } from '@/shared/ui/category-list';
import { Spinner } from '@/shared/ui/spinner';


export const CotalogPopUp: NextPage<{ className?: string }> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [getCotalogs, { data: cotalogList, isLoading: cotalogLoading }] = useLazyGetCotalogsQuery()
  const [getCategories, { data: categoryList, isLoading: categoriesLoading }] = useLazyGetCategoriesQuery()

  useEffect(() => {
    (async () => {
      await getCategories((cotalogList && cotalogList[activeIndex].url) || 'board-games')
    })()
  }, [activeIndex])

  useEffect(() => {
    (async () => {
      await getCotalogs(null)
    })()
  }, [])

  return (
    <Container className='relative'>
      <div className={'font-bold shadow-pop-up bg-[#255251248] w-[100%] absolute left-0 right-0 bg-white p-0 z-40 flex ' + className}>
        <CategoriesList activeIndex={activeIndex} categoryList={categoryList || []} setActiveIndex={setActiveIndex} />
        {cotalogLoading
          ?
          <Spinner />
          :
          categoriesLoading
            ?
            <Spinner />
            :
            (cotalogList && categoryList
              && <CategoryList categoryList={cotalogList} cotalogTitle={cotalogList[activeIndex].title} />
            )
        }
      </div>
    </Container>
  );
};
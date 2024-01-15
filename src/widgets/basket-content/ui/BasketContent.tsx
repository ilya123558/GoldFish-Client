import { useAppSelector } from "@/app/store";
import { useGetAllProductsInBasketQuery } from "@/entities/basket";
import { BasketList } from "@/feachers/basket-list";
import { BasketOrder } from "@/feachers/basket-order";
import { Loader } from "@/shared/ui/loader";

export const BasketContent = () => {
  const basketId = useAppSelector(state => state.main.user.basketId)
  const { data, isLoading, isError } = useGetAllProductsInBasketQuery({ basketId: basketId as string })

  return (
    <main className="min-h-[300px] w-full flex justify-between">
      {
        isLoading
          ?
          <Loader className="h-full" />
          :
          <>
            {isError
              ?
              <div className="opacity-60 text-[22px] text-red-500 font-bold flex items-center justify-center h-full w-full">ERROR</div>
              :
              <>
                <BasketList list={data || []} />
                <BasketOrder />
              </>
            }
          </>
      }
    </main>
  );
};
import { useGetAllOrdersQuery } from "@/entities/order";
import { Loader } from "@/shared/ui/loader";
import { ProfileOrderItem } from "./ProfileOrderItem";

export const ProfileOrdersList = () => {
  const { data, isLoading } = useGetAllOrdersQuery(null)
  return (
    <>
      {isLoading
        ? <Loader />
        :
        <ul className="">
          {(data && data.length !== 0)
            ? data.map(order => <ProfileOrderItem key={order.id} {...order} />)
            : <li className="flex items-center justify-center h-[200px] text-gold font-bold text-[26px]">У вас нет заказов</li>
          }
        </ul>
      }
    </>
  );
};
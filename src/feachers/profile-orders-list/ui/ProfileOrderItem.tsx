import { IOrder } from "@/entities/order";
import { Button } from "@/shared/ui/button";

export const ProfileOrderItem: React.FC<IOrder> = (order) => {
  return (
    <li className="h-[124px] text-[19px] font-bold rounded-[9px] shadow-card bg-white flex items-center justify-between p-[0px_47px_0px_37px] mb-[30px]">
      <p className="text-gold text-[22px]">id заказа: {order.id.split('-')[0]}</p>
      <p>{order.date}</p>
      <p>{order.price}₽</p>
      <div className="w-[120px] flex justify-center"><p className={order.paid ? 'opacity-100' : 'opacity-30'}>оплачен</p></div>
      <Button clickHandle={() => {}} className="border-gold bg-transparent h-[38px]"><p className="text-gold">Подробнее</p></Button>
    </li>
  );
};
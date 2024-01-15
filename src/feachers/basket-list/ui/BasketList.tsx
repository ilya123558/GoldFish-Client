import { IBasket } from "@/entities/basket";
import BasketListItem from "./BasketListItem";

export const BasketList: React.FC<{ list: IBasket[] }> = ({ list }) => {
  return (
    <ul className="w-[700px]">
      {list.length > 0
        ? list.map(item => <BasketListItem key={item.id} {...item} />)
        : <div className="text-gold flex items-center justify-center w-full h-[300px]">Корзина пуста</div>
      }
    </ul>
  );
};
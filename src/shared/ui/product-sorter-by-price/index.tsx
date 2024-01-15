import { Toggle } from "../toggle";
import { RangeSlider } from "../range-slider";
import { updateSortPrice } from "@/entities/card";
import { useAppDispatch, useAppSelector } from "@/app/store";

export const ProductSorterByPrice: React.FC = () => {
  const price = useAppSelector(state => state.card.sort.price)
  const dispatch = useAppDispatch()

  const setPriceHandle = (key: 'from' | 'to', value: number) => {
    dispatch(updateSortPrice({ key, value }))
  }

  const onChangeFromHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    const res = !value
      ? 0
      : value > price.to
        ? price.to
        : value

        dispatch(updateSortPrice({
      key: 'from', value: res
    }))

  }

  const onChangeToHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)

    dispatch(updateSortPrice({
      key: 'to', value: (!value || value > price.maxPrice)
        ? price.maxPrice
        : value < price.from
          ? price.from
          : value
    }))
  }

  return (
    <div className="mt-[10px]">
      <div className="flex justify-between text-[16px] font-normal">
        <div className="flex items-center">
          <p>От</p>
          <input
            value={price.from === 0 ? '' : price.from}
            onChange={onChangeFromHandle}
            placeholder="0"
            className="focus:outline-none border-[1px] border-black border-opacity-[0.38] rounded-[9px] w-[65px] h-[27px] pl-[8px]"
          />
        </div>
        <div className="flex items-center mr-[10px]">
          <p>До</p>
          <input
            value={price.to === price.maxPrice ? '' : price.to}
            onChange={onChangeToHandle}
            placeholder={price.maxPrice + ''}
            className="focus:outline-none border-[1px] border-black border-opacity-[0.38] rounded-[9px] w-[65px] h-[27px] pl-[8px]"
          />
        </div>
      </div>
      <RangeSlider
        max={price.maxPrice}
        setValue={setPriceHandle}
        to={Math.round(price.to / price.maxPrice * 100)}
        from={Math.round(price.from / price.maxPrice * 100)}
        className={'p-[15px_0px_25px]'} />
      <Toggle toggle={price.discount} setToggle={() => dispatch(updateSortPrice({ key: 'discount' }))} className={''}>Только со скидкой</Toggle>
    </div>
  );
};

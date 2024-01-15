import { RangeSlider } from "../range-slider";
import { updateSortPlayers } from "@/entities/card";
import { useAppDispatch, useAppSelector } from "@/app/store";

export const ProductSorterByPlayers: React.FC = () => {
  const state = useAppSelector(state => state.card.sort.players)
  const dispatch = useAppDispatch()

  const setValue = (key: 'from' | 'to', value: number) => {
    dispatch(updateSortPlayers({key, index: value}))
  }

  return (
    <div>
      <RangeSlider
        max={state.list.length - 1}
        from={state.from === 0 ? 0 : state.from * 100 / (state.list.length - 1)}
        to={state.to * 100 / (state.list.length - 1)}
        setValue={setValue}
        className={'p-[15px_0px_25px]'}
      />

      <ul className="flex justify-between">
        {state.list.map((item, index) => (
          <li key={index} className="text-[15px] flex justify-center items-center">
            <p
              className={"font-bold text-[#2A2A2A] text-center transition-all " + (index === state.from || index === state.to
                ? state.from === 0 ? (index === 0 ? 'text-gold' : '') : 'text-gold'
                : ''
              )}>
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>

  );
};
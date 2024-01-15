import { Toggle } from "../toggle";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { updateSortAgeToggle } from "@/entities/card";

export const ProductSorterByAge: React.FC = () => {
  const age = useAppSelector(state => state.card.sort.age)
  const dispatch = useAppDispatch()

  return (
    <div>
      <ul>
        {age.map(({ from, to, toggle }, index) => (
          <li key={index} className="mt-[7px]">
            <Toggle
              toggle={toggle}
              setToggle={(value) => dispatch(updateSortAgeToggle({ value, index }))}
            >{from === 18 ? 'более 18 лет' : `${from}-${to} лет`}</Toggle>
          </li>
        ))}
      </ul>
    </div>
  );
};
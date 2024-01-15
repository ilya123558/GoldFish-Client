import { Toggle } from "../toggle";
import { updateSortAvailabilityToggle } from "@/entities/card";
import { useAppDispatch, useAppSelector } from "@/app/store";

export const ProductSorterByAvailability: React.FC = () => {
  const availability = useAppSelector(state => state.card.sort.availability)
  const dispatch = useAppDispatch()

  return (
    <div>
      <ul>
        {availability.map(({ title, value, toggle }, index) => (
          <li key={index} className="mt-[7px]">
            <Toggle
              toggle={toggle}
              setToggle={() => dispatch(updateSortAvailabilityToggle(value))}
            >{title}</Toggle>
          </li>
        ))}
      </ul>
    </div>
  );
};

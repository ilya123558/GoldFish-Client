import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  toggle: boolean,
  setToggle: (toggle: boolean) => void,
  className?: string
}

export const Toggle: React.FC<IProps> = ({ children, toggle, setToggle, className }) => {
  return (
    <div className={"flex items-center font-normal text-[16px] " + className}>
      <div
        onClick={() => setToggle(!toggle)}
        className={"flex items-center justify-center cursor-pointer active:scale-90 transition-all border-[2px] border-primary border-opacity-[0.40] rounded-[7px] w-[21px] h-[21px]"}
      >
        <div className={"w-[60%] h-[60%] rounded-[3px] bg-gold " + (toggle ? 'opacity-100 ' : 'opacity-0')}></div>
      </div>
      {
        children && <p className="text-[#2A2A2A] ml-[15px]">{children}</p>
      }
    </div>
  );
};

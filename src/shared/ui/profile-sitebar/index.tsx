interface IProps {
  list: any,
  activeComponentKey: string,
  setActiveComponentKey: (activeComponentKey: string) => void
}

export const ProfileSitebar: React.FC<IProps> = ({ list, activeComponentKey, setActiveComponentKey }) => {
  return (
    <ul className="min-w-[255px] h-[240px] bg-white shadow-card p-[29px_0px_0px_39px] text-[22px] font-bold text-primary rounded-[9px] mb-[85px]">
      {Object.keys(list).map((key) => (
        <li
          key={key}
          className={`mb-[10px] cursor-pointer transition-all hover:opacity-100 ${activeComponentKey === key ? 'opacity-100 text-gold' : 'opacity-80'}`}
          onClick={() => setActiveComponentKey(key)}
        >
          {list[key]?.title || 'title'}
        </li>
      ))}
    </ul>
  )
}
interface IProps {
  characteristics: string
}

export const CardContentCharacteristics: React.FC<IProps> = ({ characteristics }) => {
  return (
    <div className="w-full">
      <p className="mt-[20px]">{characteristics}</p>
    </div>
  )
}
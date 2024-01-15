interface IProps {
  description: string
}

export const CardContentDescription: React.FC<IProps> = ({ description }) => {
  return (
    <div className="w-full">
      <p className="mt-[20px]">{description}</p>
    </div>
  )
}
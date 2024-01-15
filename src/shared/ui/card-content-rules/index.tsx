interface IProps {
  rules: string
}

export const CardContentRules: React.FC<IProps> = ({ rules }) => {
  return (
    <div className="w-full">
      <p className="mt-[20px]">{rules}</p>
    </div>
  )
}
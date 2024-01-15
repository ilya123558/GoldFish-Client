const maxPoints = 10000

export const UserDiscountScale: React.FC<{ discountPoints: number }> = ({ discountPoints }) => {
  return (
    <div className="mt-[61px] flex items-center justify-between">
      <div className="rounded-[19px] h-[17px] w-full bg-white shadow-card overflow-hidden">
        <div
          style={{ width: (discountPoints / maxPoints) * 100 + '%' }}
          className={`rounded-[19px] h-full bg-gold `}>
        </div>
      </div>
      <div className="ml-[74px]">
        <p className="text-primary font-normal text-[22px]">{discountPoints}/{maxPoints}</p>
      </div>
    </div>
  )
}
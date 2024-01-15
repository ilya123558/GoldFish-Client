interface IProps {
  type: 'status' | 'color' | 'value',
  discountPoints: number
}

export const useFindDiscountValue = ({ type, discountPoints }: IProps) => {
  switch (type) {
    case 'status':
      return (
        discountPoints >= 1000
          ? (discountPoints >= 5000
            ? (discountPoints === 10000
              ? 'Профессионал'
              : 'Любитель'
            )
            : 'Новичок')
          : ''
      )
    case 'color':
      return (
        discountPoints >= 1000
          ? (
            discountPoints >= 5000
              ? (
                discountPoints >= 10000
                  ? 'bg-gradient-to-r from-[#EAC058] to-[#DAA520]'
                  : 'bg-gradient-to-r from-[#EEF1F1] to-[#ABB1B1]'
              )
              : 'bg-gradient-to-r from-[#E2AB75] to-[#CD7F32]'
          )
          : 'bg-gradient-to-r from-[#E2AB75] to-[#CD7F32]'
      )
    case 'value':
      return (
        discountPoints >= 1000
          ? (discountPoints >= 5000
            ? (discountPoints >= 10000
              ? 15
              : 10
            )
            : 5)
          : 0
      )
    default:
      return undefined
  }
};

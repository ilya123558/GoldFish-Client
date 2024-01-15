interface IProps {
  price: number,
  discountValue: number
}

export const useFindPriceWithDiscount = ({ price, discountValue }: IProps) => {
  const result = Math.floor(price - ((price / 100) * discountValue))

  return result
};
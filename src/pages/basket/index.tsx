import { Container, Layout } from "@/app/layout"
import { useAppSelector } from "@/app/store"
import { RegistrationOrAuthorization } from "@/feachers/registrationOrAuthorization"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"
import { Typography } from "@/shared/ui/typography"
import { BasketContent } from "@/widgets/basket-content"
import { useState } from "react"

const Basket = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const basketId = useAppSelector(state => state.main.user.basketId)

  const onClickHandle = () => {
    setIsOpenModal(prev => !prev)
  }

  return (
    <>
      <Layout title="Корзина">
        <Breadcrumbs navigationItems={[{ title: 'Корзина', url: 'basket' }]} />
        <Container>
          <Typography className="mb-[21px]">Корзина</Typography>
          <div className="w-full min-h-[300px] flex items-center justify-center text-primary text-[30px]">
            {basketId
              ?
              <BasketContent />
              :
              <>
                <button onClick={onClickHandle} className="hover:text-gold transition-all border-b-[2px] border-primary hover:border-b-gold">
                  Чтобы добавлять товары в корзину нужно вайти в свой аккаунт
                </button>
              </>
            }
          </div>
        </Container>
      </Layout>
      <RegistrationOrAuthorization isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </>
  )
}


export default Basket
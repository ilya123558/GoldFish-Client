import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import Link from "next/link"

export const FormContact = () => {
  return (
    <div>
      <h5 className="mt-[35px] text-[22px] font-bold">Остались вопросы?</h5>
      <form action="" onSubmit={(e) => { e.preventDefault() }}>
        <Input title="Ваше имя" value="" changeHandle={(e) => { }} placeholder="Имя" className="pt-[14px]" />
        <Input title="Ваш телефон" value="" type={'tel'} changeHandle={(e) => { }} placeholder="+7 ___ _______" className="pt-[14px]" />
        <Textarea title="Комментарий" value="" changeHandle={(e) => { }} placeholder="Ваш комментарий" className="pt-[14px]" />
        <Button clickHandle={() => { }} className="w-full h-[46px] m-[21px_0px_15px]">
          <p className="text-[19px] font-bold">Заказать звонок</p>
        </Button>
        <p className="text-[15px] font-normal leading-4">
          Нажимая на кнопку "Заказать звонок", я даю
          <Link href={''} className="border-b border-b-black ml-[4px] transition-all hover:border-b-gold">согласие на обработку персональных данных.</Link>
        </p>
      </form>
    </div>
  )
}
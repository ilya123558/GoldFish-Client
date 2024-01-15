import { updateStatus, useAppDispatch } from "@/app/store";
import { IRegistration, useRegistrationMutation } from "@/entities/auth";
import { Button } from "@/shared/ui/button";
import { ErrorMessage } from "@/shared/ui/error-message";
import { Toggle } from "@/shared/ui/toggle";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export const Registration: React.FC = () => {
  const [toggle, setToggle] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const dispatch = useAppDispatch()
  const [registration, { data, isLoading, isError }] = useRegistrationMutation()

  const handleSubmitForm = (data: IRegistration | any) => {
    if (isValid && data) {
      registration(data)
    }
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(updateStatus('loading'))
      return
    }
    dispatch(updateStatus('panding'))

  }, [isLoading])

  useEffect(() => {
    if (data) {
      dispatch(updateStatus('success'))
    }
  }, [data])

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className='w-full'>
      <div className="mt-[15px] relative">
        <p className="text-[16px] font-normal mb-[7px]">Имя:</p>
        <input
          placeholder='Имя'
          className="focus:outline-none w-full h-[44px] flex items-center pl-[19px] border-primary border-[1px] rounded-[9px] placeholder:opacity-[0.33] border-opacity-[0.33]"
          {...register("name", {
            required: 'Это поле обязательное',
            minLength: {
              value: 2,
              message: 'Имя должно быть не меньше 2 символов'
            },
            maxLength: {
              value: 20,
              message: 'Имя должно быть не больше 20 символов'
            }
          })}
        />
        {errors?.name && <ErrorMessage>{<>{errors?.name?.message}</> || "Error"}*</ErrorMessage>}
      </div>

      <div className="mt-[15px] relative">
        <p className="text-[16px] font-normal mb-[7px]">Фамилия:</p>
        <input
          placeholder='Фамилия'
          className="focus:outline-none w-full h-[44px] flex items-center pl-[19px] border-primary border-[1px] rounded-[9px] placeholder:opacity-[0.33] border-opacity-[0.33]"
          {...register("lastName", {
            required: 'Это поле обязательное',
            minLength: {
              value: 2,
              message: 'Фамилия должна быть не меньше 2 символов'
            },
            maxLength: {
              value: 20,
              message: 'Фамилия должна быть не больше 20 символов'
            }
          })}
        />
        {errors?.lastName && <ErrorMessage>{<>{errors?.lastName?.message}</> || "Error"}*</ErrorMessage>}
      </div>

      <div className="mt-[15px] relative">
        <p className="text-[16px] font-normal mb-[7px]">E-mail:</p>
        <input
          placeholder='E-mail'
          className="focus:outline-none w-full h-[44px] flex items-center pl-[19px] border-primary border-[1px] rounded-[9px] placeholder:opacity-[0.33] border-opacity-[0.33]"
          {...register("email", {
            required: 'Это поле обязательное',
            pattern: {
              value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message: 'Неверный email'
            }
          })}
        />
        {errors?.email && <ErrorMessage>{<>{errors?.email?.message}</> || "Error"}*</ErrorMessage>}
      </div>

      <div className="mt-[15px] relative">
        <p className="text-[16px] font-normal mb-[7px]">Пароль:</p>
        <input
          type='password'
          placeholder='Пароль'
          className="focus:outline-none w-full h-[44px] flex items-center pl-[19px] border-primary border-[1px] rounded-[9px] placeholder:opacity-[0.33] border-opacity-[0.33]"
          {...register("password", {
            required: 'Это поле обязательное',
            minLength: {
              value: 6,
              message: 'Пароль должен быть не меньше 6 символов'
            },
            maxLength: {
              value: 20,
              message: 'Пароль должен быть не больше 20 символов'
            }
          })}
        />
        {errors?.password && <ErrorMessage>{<>{errors?.password?.message}</> || "Error"}*</ErrorMessage>}
      </div>

      <div className="flex items-start m-[20px_0px_10px]">
        <Toggle toggle={toggle} setToggle={setToggle} />
        <p className='text-[15px] font-normal ml-[5px]'>
          Я согласен с <span className="underline cursor-pointer">политикой конфидециальности</span> и с обработкой персональных данных
        </p>
      </div>

      <div className='relative w-full flex items-center justify-center mt-[20px]'>
        {isError && <p className='absolute flex items-center justify-center w-full bottom-[50px] text-[#ee2626d1] text-[12px] font-bold'>
          User with this email already exists *
        </p>}
        <Button className='w-[274px] h-[49px] text-[22px]' clickHandle={() => { }} disabled={!toggle}>Зарегистрироваться</Button>
      </div>

    </form>
  );
};
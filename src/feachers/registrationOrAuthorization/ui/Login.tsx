import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@/shared/ui/error-message';
import googleSvg from '@/app/assets/images/registrationOrAuthorization/google.svg'
import { ILogin, useLoginMutation } from '@/entities/auth';
import { useEffect } from 'react';
import { updateStatus, useAppDispatch } from '@/app/store';

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const dispatch = useAppDispatch()
  const [login, { data, isLoading, isError }] = useLoginMutation()

  const handleSubmitForm = (data: ILogin | any) => {
    if (isValid && data) {
      login(data)
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

      <div className='w-full flex justify-end'>
        <button className='border-b-[1px] border-transparent p-0 mt-[10px] transition-all hover:border-gold'>Забыли пароль?</button>
      </div>
      <p className='text-[18px] font-normal m-[20px_0px_10px]'>Войти через аккаунт google</p>
      <div className='cursor-pointer flex items-center justify-center overflow-hidden rounded-full border-primary border-[1px] border-opacity-20 w-[46px] h-[46px]'>
        <Image alt='googleSvg' src={googleSvg} />
      </div>
      <div className='relative w-full flex items-center justify-center mt-[20px]'>
        {isError && <p className='absolute flex items-center justify-center w-full bottom-[50px] text-[#ee2626d1] text-[12px] font-bold'>
          Not found user with this email or password *
        </p>}
        <Button className='w-[274px] h-[49px] text-[22px]' clickHandle={() => { }}>Войти</Button>
      </div>
    </form>
  );
};
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { IInfoAboutProfileDataList, IInfoAboutProfileList } from "../types";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@/shared/ui/error-message";
import { Loader } from "@/shared/ui/loader";
import { TKeys } from "@/entities/user";

interface IProps {
  activeList: IInfoAboutProfileList,
  saveChangeHandle: (key: TKeys, value: string) => void
  isLoading: boolean
}

export const UserSettindsForm: React.FC<IProps> = ({ activeList, saveChangeHandle, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const handleSubmitForm = (data: IInfoAboutProfileDataList | any) => {
    const keys = activeList.map(item => item.key)

    if (isValid && data) {
      for (const iterator of Object.entries(data as IInfoAboutProfileDataList)) {
        for (const key of keys) {
          if (key === iterator[0]) {
            saveChangeHandle(key, iterator[1])
          }
        }
      }
    }
  }

  return (
    <div className="w-[427px] h-[370px] bg-white rounded-[9px] relative">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className={`flex flex-col items-center justify-between h-full p-[40px_0px] ${isLoading ? 'blur-sm' : ''}`}
      >
        <div className="w-[337px]">
          <h3 className="font-bold text-primary text-[22px] mb-[21px] text-center">Изменить данные</h3>
          <div className="w-[337px]">
            {activeList.map(item => (
              <div key={item.key} className="relative">
                <Input
                  placeholder={item.key}
                  title={item.title}
                  className="mb-[10px]"
                  register={register}
                  registerOptions={item.registerOptions}
                />
                {errors?.[item.key] && <ErrorMessage>{<>{errors?.[item.key]?.message}</> || "Error"}*</ErrorMessage>}
              </div>
            ))}
          </div>
        </div>
        <Button type="submit" clickHandle={() => { }} className="w-[274px] h-[53px] text-[19px]">
          Сохранить
        </Button>
      </form>
      {isLoading && <Loader className="absolute top-0" />}
    </div>
  );
};




// const dispatch = useAppDispatch()
// const [login, { data, isLoading, isError }] = useLoginMutation()

// const handleSubmitForm = (data: ILogin | any) => {
//   if (isValid && data) {
//     login(data)
//   }
// }

// useEffect(() => {
//   if (isLoading) {
//     dispatch(updateStatus('loading'))
//     return
//   }
//   dispatch(updateStatus('panding'))

// }, [isLoading])

// useEffect(() => {
//   if (data) {
//     dispatch(updateStatus('success'))
//   }
// }, [data])

// return (
//   <form onSubmit={handleSubmit(handleSubmitForm)} className='w-full'>
//     <div className="mt-[15px] relative">
//       <p className="text-[16px] font-normal mb-[7px]">E-mail:</p>
//       <input
//         placeholder='E-mail'
//         className="focus:outline-none w-full h-[44px] flex items-center pl-[19px] border-primary border-[1px] rounded-[9px] placeholder:opacity-[0.33] border-opacity-[0.33]"
//         {...register("email", {
//           required: 'Это поле обязательное',
//           pattern: {
//             value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
//             message: 'Неверный email'
//           }
//         })}
//       />
//       {errors?.email && <ErrorMessage>{<>{errors?.email?.message}</> || "Error"}*</ErrorMessage>}
//     </div>

//     <div className="mt-[15px] relative">
//       <p className="text-[16px] font-normal mb-[7px]">Пароль:</p>
//       <input
//         type='password'
//         placeholder='Пароль'
//         className="focus:outline-none w-full h-[44px] flex items-center pl-[19px] border-primary border-[1px] rounded-[9px] placeholder:opacity-[0.33] border-opacity-[0.33]"
//         {...register("password", {
//           required: 'Это поле обязательное',
//           minLength: {
//             value: 6,
//             message: 'Пароль должен быть не меньше 6 символов'
//           },
//           maxLength: {
//             value: 20,
//             message: 'Пароль должен быть не больше 20 символов'
//           }
//         })}
//       />
//       {errors?.password && <ErrorMessage>{<>{errors?.password?.message}</> || "Error"}*</ErrorMessage>}
//     </div>

//     <div className='w-full flex justify-end'>
//       <button className='border-b-[1px] border-transparent p-0 mt-[10px] transition-all hover:border-gold'>Забыли пароль?</button>
//     </div>
//     <p className='text-[18px] font-normal m-[20px_0px_10px]'>Войти через аккаунт google</p>
//     <div className='cursor-pointer flex items-center justify-center overflow-hidden rounded-full border-primary border-[1px] border-opacity-20 w-[46px] h-[46px]'>
//       <Image alt='googleSvg' src={googleSvg} />
//     </div>
//     <div className='relative w-full flex items-center justify-center mt-[20px]'>
//       {isError && <p className='absolute flex items-center justify-center w-full bottom-[50px] text-[#ee2626d1] text-[12px] font-bold'>
//         Not found user with this email or password *
//       </p>}
//       <Button className='w-[274px] h-[49px] text-[22px]' clickHandle={() => { }}>Войти</Button>
//     </div>
//   </form>
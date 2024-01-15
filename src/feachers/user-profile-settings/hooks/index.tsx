import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import { IInfoAboutProfileList } from "../types"
import { infoAboutProfileList } from "../const"
import { IUser, TKeys, useGetUserQuery, useUpdateUserStateValueMutation } from "@/entities/user"


export const useCastomHook = () => {
  const router = useRouter();

  const [activeList, setActiveList] = useState<IInfoAboutProfileList>([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetUserQuery(null)

  const [updateUserStateValue, { isLoading: isUserStateValueLoading }] = useUpdateUserStateValueMutation()

  const onClickHandle = (keys: string[]) => {
    const res = keys.map(key => (infoAboutProfileList.find(item => item.key === key) || infoAboutProfileList[0]))
    setActiveList(res)
    setIsOpenModal(true)
  }

  const saveChangeHandle = async (key: TKeys, value: string) => {
    await updateUserStateValue({ key, value })
    setIsOpenModal(false)
  }

  useEffect(() => {
    isUserError && router.push('/')
  }, [isUserError])

  return {
    activeList,
    isOpenModal,
    setIsOpenModal,
    onClickHandle,
    saveChangeHandle,
    user: user as IUser,
    isUserLoading,
    isUserStateValueLoading
  }
}
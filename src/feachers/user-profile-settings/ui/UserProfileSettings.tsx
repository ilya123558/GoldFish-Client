import { Modal } from "@/app/layout/ui/Modal"
import { useCastomHook } from "../hooks"
import { ImageSettings } from "./ImageSettings"
import { UserNameAndLastName } from "./UserNameAndLastName"
import { UserSettindsList } from "./UserSettindsList"
import { UserSettindsForm } from "./UserSettindsForm"

export const UserProfileSettings: React.FC = () => {
  const {
    activeList,
    isOpenModal,
    setIsOpenModal,
    onClickHandle,
    saveChangeHandle,
    isUserStateValueLoading,
    user
  } = useCastomHook()

  return (
    <div className="mb-[85px] flex justify-between ">
      <div className='flex w-full'>
        <ImageSettings />
        <div className="ml-[28px] mt-[35px] w-[65%] relative">
          <UserNameAndLastName
            lastNameValue={user.lastName}
            nameValue={user.name}
            onClickHandle={onClickHandle}
          />
          <UserSettindsList
            onClickHandle={onClickHandle}
            user={user}
          />
        </div>
      </div>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <UserSettindsForm
          activeList={activeList}
          saveChangeHandle={saveChangeHandle}
          isLoading={isUserStateValueLoading}
        />
      </Modal>
    </div>
  )
}
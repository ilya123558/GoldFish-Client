import Image, { StaticImageData } from "next/image"
import userDefaultIcon from '@/app/assets/images/profile/user-default-icon.png'


interface IProps {
  userImg?: StaticImageData
}

export const ImageSettings: React.FC<IProps> = ({ userImg }) => {
  return (
    <div>
      <button className="relative">
        <Image
          src={userImg || userDefaultIcon}
          alt="user-img"
          className="min-w-[74px] h-[74px] rounded-full bg-white"
        />
        <svg className="absolute top-[50px] right-[0px]" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.375 4.5V1.125H5.625V4.5H9V6.75H5.625V10.125H3.375V6.75H0V4.5H3.375ZM6.75 11.25V7.875H10.125V4.5H18L20.0588 6.75H23.625C24.8625 6.75 25.875 7.7625 25.875 9V22.5C25.875 23.7375 24.8625 24.75 23.625 24.75H5.625C4.3875 24.75 3.375 23.7375 3.375 22.5V11.25H6.75ZM14.625 21.375C17.73 21.375 20.25 18.855 20.25 15.75C20.25 12.645 17.73 10.125 14.625 10.125C11.52 10.125 9 12.645 9 15.75C9 18.855 11.52 21.375 14.625 21.375ZM11.025 15.75C11.025 17.7412 12.6337 19.35 14.625 19.35C16.6162 19.35 18.225 17.7412 18.225 15.75C18.225 13.7587 16.6162 12.15 14.625 12.15C12.6337 12.15 11.025 13.7587 11.025 15.75Z" fill="#2A2A2A" />
        </svg>
      </button>
    </div>
  )

}
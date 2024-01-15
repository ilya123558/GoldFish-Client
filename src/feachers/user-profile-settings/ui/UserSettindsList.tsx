import { IUser } from "@/entities/user";
import { infoAboutProfileList } from "../const";

interface IProps {
  onClickHandle: (keys: string[]) => void,
  user: IUser
}

export const UserSettindsList: React.FC<IProps> = ({ onClickHandle, user }) => {

  return (
    <ul className="">
      {infoAboutProfileList.map(item => (
        (item.key === 'phone' || item.key === 'email') ?
          <li key={item.key} className="my-[20px] relative">
            <p className="text-[19px] text-black font-normal">
              <span className="font-bold mr-[6px]">{item.title}:</span>
              {
                user[item.key]
                  ? `${item.key === 'phone' ? '+' : ''}${user[item.key]}`
                  : 'не определено'
              }
            </p>
            <button
              onClick={() => onClickHandle([item.key])}
              className="absolute flex items-center right-0 top-0 transition-all border-[1px] border-transparent hover:border-gold text-primary rounded-[9px] p-[3px_5px] active:scale-[0.97]"
            >
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5469 8.05019V10.3525C18.7248 10.3895 17.9464 10.7333 17.3654 11.3162L11.8109 16.8695C11.3405 17.341 11.0059 17.931 10.8449 18.5773L10.6022 19.549H6.32422C5.56172 19.549 4.83045 19.2461 4.29129 18.707C3.75212 18.1678 3.44922 17.4365 3.44922 16.674V8.04904H19.5469V8.05019ZM16.6719 3.4502C17.4344 3.4502 18.1657 3.7531 18.7048 4.29226C19.244 4.83143 19.5469 5.5627 19.5469 6.32519V6.90019H3.44922V6.32519C3.44922 5.5627 3.75212 4.83143 4.29129 4.29226C4.83045 3.7531 5.56172 3.4502 6.32422 3.4502H16.6731H16.6719ZM12.6239 17.6826L18.1784 12.1281C18.5819 11.7249 19.1291 11.4985 19.6995 11.4987C20.27 11.4989 20.817 11.7257 21.2202 12.1292C21.6234 12.5328 21.8498 13.0799 21.8496 13.6504C21.8493 14.2208 21.6225 14.7678 21.219 15.171L15.6657 20.7232C15.3421 21.0469 14.9367 21.2767 14.4927 21.3879L12.77 21.8191C12.5986 21.8617 12.4192 21.8592 12.2491 21.8119C12.0791 21.7646 11.9241 21.6741 11.7993 21.5492C11.6746 21.4243 11.5842 21.2693 11.5371 21.0991C11.4899 20.929 11.4876 20.7496 11.5303 20.5783L11.9604 18.8556C12.0719 18.4117 12.3008 18.0057 12.6251 17.6826H12.6239Z" fill="#2A2A2A" />
              </svg>
              <p className="font-normal text-[16px] ml-[9px]">изменить</p>
            </button>
          </li>
          :
          <div key={item.key}></div>
      ))}
    </ul>
  );
};
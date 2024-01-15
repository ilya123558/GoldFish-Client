import { FormContact } from "@/entities/form-contact"
import { UserProfileSettings } from "@/feachers/user-profile-settings"


export const ProfileSettings: React.FC = () => {
  return (
    <div className="mb-[85px]">
      <UserProfileSettings />
      <div className="w-[446px]">
        <FormContact />
      </div>
    </div>
  )
} 
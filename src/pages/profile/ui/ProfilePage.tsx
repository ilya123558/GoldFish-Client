import { RecommendationsForMy } from "@/feachers/recommendations-for-my";
import { UserProfile } from "@/feachers/user-profile";

export const ProfilePage = () => {
  return (
    <section className="mb-[85px]">
      <UserProfile />
      <RecommendationsForMy />
    </section>
  );
};
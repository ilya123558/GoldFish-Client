import { useGetUserQuery } from "@/entities/user";
import { UserDiscount } from "@/feachers/user-discount";
import { Loader } from "@/shared/ui/loader";
import { UserDiscountScale } from "@/shared/ui/user-discount-scale";
import { UserInfo } from "@/shared/ui/user-info";
import { useRouter } from "next/router";
import { useEffect } from "react";


export const UserProfile = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetUserQuery(null)

  useEffect(() => {
    isError && router.push('/')
  }, [isError])

  return (
    <div className="mb-[85px] relative">
      {isLoading
        ?
        <Loader />
        :
        <>
          <UserInfo
            lastName={data?.lastName || ''}
            name={data?.name || ''}
            discountPoints={data?.discountPoints || 0}
          />
          <UserDiscount discountPoints={data?.discountPoints || 0} />
          <UserDiscountScale discountPoints={data?.discountPoints || 0} />
        </>
      }
    </div>
  );
};
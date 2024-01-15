import { NextPage } from "next";
import { PropsWithChildren, useEffect } from "react";
import { setUserId, useAppDispatch } from "@/app/store";
import { useGetUserAndBasketIdQuery } from "@/entities/user";
import { IMeta, Meta } from "@/shared/ui/meta";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const Layout: NextPage<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  const dispatch = useAppDispatch()
  const { data } = useGetUserAndBasketIdQuery(null)

  useEffect(() => {
    if (data?.userId) {
      dispatch(setUserId(data))
    }
  }, [data])

  return (
    <>
      <Meta title={title} description={description} />
      <Header />
      <div className="overflow-hidden bg-page">
        {children}
      </div>
      <Footer />
    </>
  );
};
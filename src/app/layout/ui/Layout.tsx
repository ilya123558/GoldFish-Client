import { IMeta, Meta } from "@/shared/ui/meta";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { NextPage } from "next";
import { PropsWithChildren } from "react";

export const Layout: NextPage<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Header />
      <div className="overflow-hidden">
        {children}
      </div>
      <Footer />
    </>
  );
};
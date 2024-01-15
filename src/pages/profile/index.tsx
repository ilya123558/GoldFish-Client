import { NextPage } from "next"
import { useRouter } from 'next/router';
import { useEffect, useState } from "react"
import { IProfilePage, TActiveComponentKeys } from "./types/index.interface"
import { Container, Layout } from "@/app/layout"
import { infoAboutPage } from "./const"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"
import { Typography } from "@/shared/ui/typography"
import { ProfileSitebar } from "@/shared/ui/profile-sitebar"
import { useIsAuthQuery } from "@/entities/auth"
import { Loader } from "@/shared/ui/loader"
import { Modal } from "@/app/layout/ui/Modal";
import { useLazyGetUserQuery } from "@/entities/user";

const Profile: NextPage<IProfilePage> = () => {
  const router = useRouter();
  const [activeComponentKey, setActiveComponentKey] = useState<TActiveComponentKeys>('profile')
  const { isLoading, isError, isSuccess } = useIsAuthQuery(null)
  const [getUser] = useLazyGetUserQuery()
  const { title, component: ActiveComponent, navigationItems } = infoAboutPage[activeComponentKey]

  useEffect(() => {
    isError && router.push('/')
  }, [isError])

  useEffect(() => {
    isSuccess && getUser(null)
  }, [isSuccess])

  return (
    <>
      {isLoading || isError
        ?
        <Modal isOpen={isLoading || isError}><Loader /></Modal>
        :
        <Layout title={title}>
          <Breadcrumbs navigationItems={navigationItems} isReloadable={true}/>
          <Container>
            <Typography className="mb-[21px]">{activeComponentKey === 'orders' ? 'Мои заказы' : 'Личный кабинет'}</Typography>
            <div className="flex justify-between">
              {activeComponentKey === 'orders'
                ?
                <div className="w-full">
                  <ActiveComponent />
                </div>
                :
                <>
                  <ProfileSitebar
                    list={infoAboutPage}
                    activeComponentKey={activeComponentKey}
                    setActiveComponentKey={(key) => setActiveComponentKey(key as TActiveComponentKeys)}
                  />
                  <div className="w-full ml-[31px]">
                    <ActiveComponent />
                  </div>
                </>
              }
            </div>
          </Container>
        </Layout>
      }
    </>
  )
}

export default Profile
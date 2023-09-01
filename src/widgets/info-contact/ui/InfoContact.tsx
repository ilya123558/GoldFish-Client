import { Container } from "@/app/layout"
import { Typography } from "@/shared/ui/typography"
import { FormContact } from "@/entities/form-contact"
import { NextPage } from "next"
import { GoogleMapComponent } from "@/shared/ui/google-map-component"
import { InfoContactItems } from "@/shared/ui/info-contact-items"

interface IProps {
  className?: string
}

export const InfoContact: NextPage<IProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Typography className="m-[0px_0px_22px_0px]">Контакты</Typography>
      <div className="flex justify-between">
        <div className="max-w-[445px]">
          <InfoContactItems />
          <FormContact />
        </div>
        <div className="max-w-[546px] w-full h-[672px] bg-primary rounded-[9px] overflow-hidden">
          <GoogleMapComponent />
        </div>
      </div>
    </Container>
  )
}

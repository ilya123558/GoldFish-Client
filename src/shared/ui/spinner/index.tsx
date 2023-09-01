import { NextPage } from "next"

export const Spinner: NextPage<{className?: string}> = ({className}) => {
  return <div className={"flex items-center justify-center w-full h-full " + className}>
    <div>loading</div>
  </div>
}
import { Container } from "@/app/layout"
import Link from "next/link"

interface IProps {
  navigationItems: {
    title: string,
    url: string
  }[],
  className?: string,
  isReloadable?: boolean
}

export const Breadcrumbs: React.FC<IProps> = ({ navigationItems, className, isReloadable }) => {
  return (
    <Container className={className}>
      <ul className="font-bold text-[16px] flex mt-[23px]">
        <li key={-1} className="flex">
          <Link
            href={'/'}
            className='opacity-[0.85] hover:text-gold hover:opacity-100 transition-all'
          >
            Главная
          </Link>
          <p className="m-[0px_10px] cursor-default">{'>'}</p>
        </li>
        {navigationItems.map(({ title, url }, index) => index === navigationItems.length - 1
          ? <p key={index} className="font-normal opacity-[0.38]">{title}</p>
          : (
            <li key={index} className="flex">
              {isReloadable
                ?
                <a
                  href={'/' + url}
                  className='opacity-[0.85] hover:text-gold hover:opacity-100 transition-all'
                >
                  {title}
                </a>
                :
                <Link
                  href={'/' + url}
                  className='opacity-[0.85] hover:text-gold hover:opacity-100 transition-all'
                >
                  {title}
                </Link>
              }

              <p className="m-[0px_10px] cursor-default">{'>'}</p>
            </li>
          )
        )}
      </ul>
    </Container>
  )
}
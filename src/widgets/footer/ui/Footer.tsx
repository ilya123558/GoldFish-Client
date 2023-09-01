import { FooterBottom } from "@/feachers/footer-bottom"
import { FooterTop } from "@/feachers/footer-top"

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}
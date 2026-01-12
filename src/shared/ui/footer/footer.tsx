import { Flex } from "antd"
import { Container } from "shared/ui/container"
import { FooterNav } from "./footer-nav"
import { FooterLogo } from "./footer-logo"
import { FooterSub } from "./footer-sub"

export const Footer = () => {
  return (
    <>
        <footer className="bg-[var(--color-white)] pt-20 mt-36 flex flex-col gap-16">
            <Container>
                <Flex justify="space-between" className="w-full">
                    <FooterLogo/>
                    <FooterNav/>
                </Flex>
            </Container>
            <Flex align="center" justify="center">
                <FooterSub/>    
            </Flex>
        </footer>
    </>
  )
}

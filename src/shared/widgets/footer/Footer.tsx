import { Flex } from "antd"
import { Container } from "shared/ui/container/Container"
import { FooterNav } from "./Footer-Nav"
import { FooterLogo } from "./Footer-Logo"
import { FooterSub } from "./Footer-Sub"

export const Footer = () => {
  return (
    <>
        <footer className="bg-[var(--color-white)] pt-20 mt-36 flex flex-col gap-16">
            <Container>
                <Flex justify="space-between" style={{width:'100%'}}>
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

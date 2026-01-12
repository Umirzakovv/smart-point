import { Flex } from "antd"
import { Footer } from "shared/ui/footer/footer"
import { Header } from "shared/ui/header/header"
import { Hero } from "widgets/home/hero/hero"
import { Product } from "widgets/home/product-catalog/product"


export const Home = () => {
  return (
    <>
    <Flex gap={"middle"} vertical>
        <Header/>
        <Hero/>
        <Product/>
        <Footer/>
    </Flex>
    </>
  )
}

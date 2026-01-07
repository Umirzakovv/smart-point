import { Flex } from "antd"
import { Footer } from "widgets/footer/footer"
import { Header } from "widgets/header/header"
import { Hero } from "widgets/hero/hero"
import { Product } from "widgets/product-catalog/product"


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

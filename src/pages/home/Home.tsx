import { Flex } from "antd"
import { Footer } from "shared/widgets/footer/Footer"
import { Header } from "shared/widgets/header/Header"
import { Hero } from "shared/widgets/hero/Hero"
import { Product } from "shared/widgets/product-catalog/Product"


export const Home = () => {
  return (
    <>
    <Flex gap={"middle"} vertical>
        <Header title="Logo"/>
        <Hero/>
        <Product/>
        <Footer/>
    </Flex>
    </>
  )
}

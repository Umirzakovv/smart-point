import { Flex,Typography } from "antd"
import { Link } from "react-router"
import { Container } from "shared/ui/Container"
const {Text} = Typography

export const NotFound = () => {
  return (
    <>
    <Container>
        <div className="w-full h-screen flex items-center justify-center">
        <Flex vertical align="center">
            <Text style={{fontSize:'80px',fontWeight:700}}>404</Text>
            <Text style={{fontSize:'18px'}}>Page not found</Text>
            <Link to={'/'} >Home</Link>
        </Flex>
        </div>
    </Container>
    </>
    
  )
}

import { Button, Flex, Typography,Image } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Container } from '../container';
import { Link } from 'react-router';


export const Header = () => {

  return (
    <>
    <header className='py-5'>
      <Container>
        <Flex justify="space-between" align="center">
          <Link to={'/'} className="flex items-center gap-2">
            <Image src='/images/main-logo.jpg' preview={false} className='w-10! h-10! rounded-full'/>
            <Typography.Title level={5}>Smart Point </Typography.Title>
          </Link>
          <Button
            color="default"
            variant="filled"
            icon={<ShoppingCartOutlined className='text-xl!'/>}
            className='bg-transparent!'
          />
        </Flex>
      </Container>
      </header>
    </>
  );
};

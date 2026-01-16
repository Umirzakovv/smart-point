import { Flex, Typography, Image } from 'antd';
import { Container } from './container';
import { Link } from 'react-router';


export const Header = () => {

  return (
    <>
      <header className='py-5 sticky top-0 z-50 pointer-events-none'>
        <Container>
          <Flex justify="space-between" align="center">
            <Link
              to={'/'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 pointer-events-auto backdrop-blur-md bg-white/70 px-4 py-2 rounded-full shadow-sm"
            >
              <Image src='/images/main-logo.jpg' preview={false} className='w-10! h-10! rounded-full' />
              <Typography.Title level={5} className="!mb-0">Smart Point</Typography.Title>
            </Link>
            {/* <Link to={'/basket'}>  */}
            {/* <Button
                color="default"
                variant="filled"
                icon={<ShoppingCartOutlined className='text-xl!'/>}
                className='bg-transparent!'
              /> */}
            {/* </Link> */}
          </Flex>
        </Container>
      </header>
    </>
  );
};

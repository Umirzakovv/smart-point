import { Button, Flex, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Container } from '../../shared/ui/Container';
import { Link } from 'react-router';


export const Header = () => {

  return (
    <>
    <header className='py-5'>
      <Container>
        <Flex justify="space-between" align="center">
          <Link to={'/'} className="flex items-center gap-2">
            <div className='w-9 h-9 bg-black rounded-full'></div>
            <Typography.Title level={5}>Logo</Typography.Title>
          </Link>
          <Button
            color="default"
            variant="filled"
            icon={<ShoppingCartOutlined style={{fontSize:'22px'}}/>}
            style={{ background: 'transparent'}}
          />
        </Flex>
      </Container>
      </header>
    </>
  );
};

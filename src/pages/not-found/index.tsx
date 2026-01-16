import { Flex, Typography } from 'antd';
import { Link } from 'react-router';
import { Container } from 'shared/ui/container';

const { Text } = Typography;

export const NotFound = () => {
  return (
    <>
      <Container>
        <div className="w-full h-screen flex items-center justify-center">
          <Flex vertical align="center">
            <Text className="text-[80px]! font-bold">404</Text>
            <Text className="text-xl!">Page not found</Text>
            <Link to={'/'}>Home</Link>
          </Flex>
        </div>
      </Container>
    </>
  );
};

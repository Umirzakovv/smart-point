import { Flex } from 'antd';
import { AuthForm } from 'widgets/shared/auth/auth-form';

export const SharedAuthPage = () => {
  return (
    <Flex align="center" justify="center" className="min-h-screen w-full bg-gradient">
      <AuthForm />
    </Flex>
  );
};

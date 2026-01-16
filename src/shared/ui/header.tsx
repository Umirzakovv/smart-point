import { Flex, Typography, Image, Button } from 'antd';
import { Container } from './Container';
import { Link } from 'react-router';
import { useTheme } from 'app/providers/theme-context';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <header className="py-5 sticky top-0 z-50 pointer-events-none">
        <Container>
          <Flex justify="space-between" align="center">
            <Link
              to={'/'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 pointer-events-auto backdrop-blur-md bg-white/70 px-4 py-2 rounded-full shadow-sm dark:bg-[#1f1f1f]/70">
              <Image
                src="/images/main-logo.jpg"
                preview={false}
                className="w-10! h-10! rounded-full"
              />
              <Typography.Title level={5} className="!mb-0">
                Smart Point
              </Typography.Title>
            </Link>

            <Button
              shape="circle"
              size="large"
              icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              className="pointer-events-auto backdrop-blur-md bg-white/70 px-4 py-2 rounded-full shadow-sm dark:bg-[#1f1f1f]/70"
            />
          </Flex>
        </Container>
      </header>
    </>
  );
};

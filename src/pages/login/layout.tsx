import { Flex, Layout, Select } from 'antd';
import { Outlet } from 'react-router';
import { GlobalOutlined } from '@ant-design/icons';
import { Logo } from 'widgets/sidebar/logo';

const { Header, Content } = Layout;

const options = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
  { value: 'uz', label: 'UZ' },
  { value: 'cy', label: 'CY' },
];

const AuthLayout = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        width: '100vw',
        background:
          'conic-gradient(from 90deg at 50% 50%, #FFF 0deg, #DEFFE4 135deg, #FFF 179.78deg, #CEFFD8 287.3deg, #FFF 360deg)',
      }}>
      <Header
        style={{
          padding: 0,
          paddingRight: 20,
          background: 'transparent',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Logo collapsed />
        <Flex
          style={{
            background: '#fff',
            borderRadius: 999,
            height: 48,
          }}>
          <GlobalOutlined
            style={{
              fontSize: 14,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingRight: 0,
            }}
          />
          <Select
            defaultValue="en"
            variant={'borderless'}
            options={options}
            styles={{
              popup: {
                root: {
                  borderRadius: 16,
                },
              },
            }}
          />
        </Flex>
      </Header>
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AuthLayout;

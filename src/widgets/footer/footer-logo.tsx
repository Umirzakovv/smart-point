import { InstagramOutlined, SendOutlined } from '@ant-design/icons';
import { Flex, Typography, theme } from 'antd';

const { Text } = Typography;

export const FooterLogo = () => {
  const { token } = theme.useToken(); // ✅ TO‘G‘RI JOY

  return (
    <Flex vertical className="w-sm" gap={20}>
      <Flex align="center" gap={5}>
        <div className="w-9 h-9 bg-black rounded-full" />
        <Text type="secondary" style={{ fontSize: 20 }}>
          Logo
        </Text>
      </Flex>

      <Text type="secondary">
        Your one-stop destination for the premium electronics, gadgets and accessories. Experience
        the future of technology today.
      </Text>

      <Flex gap={12}>
        <a href="#">
          <InstagramOutlined style={{ color: token.colorTextSecondary,fontSize:'30px' }} />
        </a>

        <a href="#">
          <SendOutlined style={{ color: token.colorTextSecondary,fontSize:'30px' }} />
        </a>
      </Flex>
    </Flex>
  );
};

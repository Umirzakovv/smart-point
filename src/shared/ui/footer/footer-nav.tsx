import { Link } from 'react-router';
import { FooterDataNav } from './model/data';
import { Flex, Typography } from 'antd';

const { Text } = Typography;
export const FooterNav = () => {
  return (
    <>
      {FooterDataNav.map((item) => (
        <Flex vertical key={item.title} gap={20}>
          <b className='text-xl'>{item.title}</b>
          <ul>
            {item.links.map((link) => (
              <li className='pb-4' key={link.label}>
                <Link to={link.href}>
                  <Text type='secondary' className='text-xl' >
                    {link.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
      ))}
    </>
  );
};

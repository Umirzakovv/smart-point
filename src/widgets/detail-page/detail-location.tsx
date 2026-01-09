import { RightOutlined} from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router';
const { Text } = Typography;
import { products } from 'widgets/product-catalog/model/data';


export const DetailLocation = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const product = products.find((el) => el.id === Number(id));

  return (
    <Flex align="center" gap={5}>
            <Text type="secondary" className="cursor-pointer" onClick={() => navigate('/')}>
              Home <RightOutlined />
            </Text>
            <Text type="secondary">{product?.title}</Text>
          </Flex>
  )
}

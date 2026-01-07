import { Button, Flex, Form, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router';
import { StarFilled } from '@ant-design/icons';
import { products } from 'widgets/product-catalog/model/data';
import FormItemLabel from 'antd/es/form/FormItemLabel';

const { Text } = Typography;

export const WriteReview = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((el) => el.id === Number(id));

  if (!product) return null;

  return (
    <Flex vertical style={{ marginTop: '90px' }}>
      <Text strong style={{ fontSize: '32px' }}>
        Write a Review
      </Text>
      <Flex align="center" gap={6} style={{ margin: '12px 0' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarFilled
            key={star}
            style={{
              fontSize: 20,
              color: star <= product.rating ? 'var(--color-warning)' : 'var(--color-secondary)',
            }}
          />
        ))}
        <Text>4.0 out of 5</Text>
      </Flex>

      <Form layout="vertical">
        <Form.Item label="Your Review">
          <TextArea  rows={8} placeholder="Write your review..." maxLength={200} style={{width:'100%'}} />
        </Form.Item>

        <Form.Item>
          <Flex justify="end">
            <Button type="primary" style={{ width:'300px',padding:'20px 0',borderRadius:'36px',color: 'var(--color-white)' }}>
              Submit
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Flex>
  );
};

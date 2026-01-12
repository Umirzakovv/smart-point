import { Button, Flex, Form, Typography, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router';
import { StarFilled } from '@ant-design/icons';
import { products } from 'widgets/home/product-catalog/model/data';
import { useState } from 'react';

interface ReviewProps {
  rating: number,
  msg:string,
}

const { Text } = Typography;
const star = [1,2,3,4,5]

export const PostReview = () => {
  const [review, setReview] = useState<ReviewProps>({
    rating: 0,
    msg: '',
  });
  const { id } = useParams<{ id: string }>();
  const product = products.find((el) => el.id === Number(id));  

  const handleSubmit = () => {
    if (!review.rating || !review.msg.trim()) {
      message.warning('Iltimos, baho va izoh kiriting');
      return;
    }
    message.success('Fikringiz uchun rahmat!');
    setReview({ rating: 0, msg: '' });
  };
  

  if (!product) return null;
  
  return (
    <Flex vertical gap={25} className='mt-20!'>
      <Text strong className='text-3xl!'>
        Write a Review
      </Text>

      <Form layout="vertical" >
         <Flex vertical gap={25}>
         <Flex align='center' gap={5}>
         {
            star.map((el) => (
              <StarFilled
              key={el}
              onClick={() => setReview({ ...review, rating: el })}
              className={`
                text-2xl cursor-pointer transition-colors
                ${el <= review.rating ? 'text-[var(--color-warning)]!' : 'text-[var(--color-secondary)]!'}
              `}
            />
            ))
          }
         </Flex>
        <Form.Item label="Your Review">
          <TextArea
            value={review.msg}
            status={review.msg.length === 200 ? 'error' : undefined}
            rows={8}
            maxLength={200}
            onChange={(e) =>
              setReview({ ...review, msg: e.target.value })
            }
            placeholder="Write your review..."
            className="w-full"
          />
        </Form.Item>

        <Form.Item>
            <Button 
            type="primary" 
            className='w-72 py-5 rounded-3xl! text-[var(--color-white)]! float-end'
            onClick={handleSubmit}>
              Submit
            </Button>
        </Form.Item>
         </Flex>
      </Form>
    </Flex>
  );
};

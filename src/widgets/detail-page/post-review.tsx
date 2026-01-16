import { Button, Flex, Form, Typography, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router';
import { StarFilled } from '@ant-design/icons';
import { products } from 'widgets/home/product/model/data';
import { useEffect, useState } from 'react';

const { Text } = Typography;
const star = [1, 2, 3, 4, 5];

export const PostReview = () => {
  const [isMessage, setMessage] = useState<string>('');
  const [isRating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  const product = products.find((el) => el.id === Number(id));

  const handleSubmit = () => {
    if (!isMessage.trim()) {
      message.warning('Iltimos izoh kiriting');
      return;
    }
    message.success('Fikringiz uchun rahmat!');
    setMessage('');
    console.log(isMessage);
  };

  const handleRatingSubmit = (rating: number) => {
    setRating(rating);
    message.success(`Siz 5/${rating}⭐ baholadinggiz rahmat!`);
    console.log(rating);
  };

  useEffect(() => {
    if (isMessage.length === 200) {
      message.error('Boshqa yozish imkonsiz');
    }
  }, [isMessage]);

  if (!product) return null;

  return (
    <Flex vertical gap={25} className="mt-20!">
      <Text strong className="text-3xl!">
        Write a Review
      </Text>

      <Form>
        <Form.Item>
          <Flex align="center" gap={0}>
            {star.map((el) => (
              <Button
                key={el}
                onClick={() => handleRatingSubmit(el)}
                onMouseEnter={() => setHoverRating(el)}
                onMouseLeave={() => setHoverRating(0)}
                className={`
                  text-2xl cursor-pointer! transition-colors! duration-200!
                  border-0! bg-transparent! shadow-none! px-2!
                  ${
                    el <= (hoverRating || isRating)
                      ? 'text-[var(--color-warning)]!'
                      : 'text-[var(--color-secondary)]!'
                  }
                `}>
                <StarFilled className="border-0! text-2xl!" />
              </Button>
            ))}
          </Flex>
        </Form.Item>
      </Form>

      <Form layout="vertical">
        <Flex vertical gap={25}>
          <Form.Item label="Your Review">
            <TextArea
              value={isMessage}
              status={isMessage.length === 200 ? 'error' : undefined}
              rows={8}
              maxLength={200}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your review..."
              className="w-full"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="w-72 py-5 rounded-3xl! text-[var(--color-white)]! float-end"
              onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Flex>
  );
};

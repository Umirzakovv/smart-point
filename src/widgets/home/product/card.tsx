import { Button, Card, Flex, Typography } from "antd";
import { StarOutlined } from "@ant-design/icons";
import type { Product } from "./model/types";

interface Props {
  product: Product;
  onShopClick: (product: Product) => void;
}

const { Text } = Typography;

export const ProductCard = ({ product, onShopClick }: Props) => {
  const { title, shortDesc, image, discountPrice, originalPrice, rating } = product;

  const showDiscount = Boolean(discountPrice);
  const showRating = Boolean(rating);

  return (
    <Card
      hoverable
      className="w-full h-[395px]! rounded-2xl! relative"
      cover={<img src={image} alt={title} className="w-full! h-48! object-contain!" />}
    >
      <Flex vertical gap={30}>
        <Flex align="start" justify="space-between" className="-mt-2!">
          <Flex vertical>
            <Text className="text-xl!">{title}</Text>
            <Text className="text-xs!" type="secondary">
              {shortDesc}
            </Text>
          </Flex>

          {showRating && (
            <Text className="flex items-center gap-1 text-[16px]">
              <StarOutlined className="text-[var(--color-warning)]!" />
              {rating}
            </Text>
          )}
        </Flex>

        <Flex className="absolute bottom-3 w-[85%]! flex! items-center! justify-between!">
          <Flex vertical>
            {showDiscount && (
              <Text className="text-xs!" type="secondary" delete>
                ${originalPrice}
              </Text>
            )}

            <Text className="text-xl!">
              ${showDiscount ? discountPrice : originalPrice}
            </Text>
          </Flex>

          <Button
            type="primary"
            className="bg-[var(--color-primary)] text-[var(--color-white)] px-4 py-1.5 rounded-lg font-medium cursor-pointer hover:opacity-90 transition-opacity w-1/2 text-center"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onShopClick(product);
            }}
          >
            Shop Now
          </Button>
        </Flex>

        {showDiscount && (
          <Text className="absolute top-3 left-3 py-1 px-2 font-medium rounded-xl bg-[var(--color-success-txt)]! text-[var(--color-white)]!">
            Sale
          </Text>
        )}
      </Flex>
    </Card>
  );
};

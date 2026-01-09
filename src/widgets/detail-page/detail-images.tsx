
import { Row, Col, Image } from 'antd';
import type { ProductColorProps } from 'widgets/product-catalog/model/types';

interface DetailImagesProps {
  productImage: string;
  colors?: ProductColorProps[];
  selectedColor: ProductColorProps | null;
  onSelectColor: (color: ProductColorProps) => void;
}

export const DetailImages = ({
  productImage,
  colors = [],
  selectedColor,
  onSelectColor,
}: DetailImagesProps) => {
  const mainImage = selectedColor?.image || productImage;

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <img src={mainImage} alt="product" className="w-[670px] h-[590px] object-contain" />
      </div>

        <Row gutter={[12, 12]} justify="center" style={{ marginBottom: 16 }}>
          {colors.map((color) => (
            <Col key={color.hex}>
              <img
                className={`w-36 h-36 object-contain ${selectedColor?.hex === color.hex ? 'border border-[var(--color-primary)] rounded-xl' : ''}`}
                src={color.image}
                alt=""
                onClick={() => onSelectColor(color)}
              />
            </Col>
          ))}
        </Row>
    </div>
  );
};

// ProductImages.tsx
import { Flex } from 'antd';
import type { ProductColor } from 'widgets/product-catalog/model/types';

interface ProductImagesProps {
  colors?: ProductColor[];
  selectedColor: ProductColor | null;
  onSelectColor: (color: ProductColor) => void;
}

export const DetailImages = ({ colors, selectedColor, onSelectColor }: ProductImagesProps) => {
  return (
    <Flex vertical gap={24}>
     <div className='w-full h-[550px]'>
        <img
            src={selectedColor?.image || colors?.[0]?.image}
            alt={selectedColor?.value}
            className="w-full h-full object-contain rounded-xl border border-black"
        />
        
     </div>

      <Flex gap={20}>
        {colors?.map((el) => (
          <img
            key={el.hex}
            src={el.image}
            alt={el.value}
            className={`w-40 h-40 object-cover rounded-xl cursor-pointer border-2 ${
              selectedColor?.value === el.value ? 'border-[var(--color-primary)]' : 'border-[var(--color-secondary)]'
            }`}
            onClick={() => onSelectColor(el)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

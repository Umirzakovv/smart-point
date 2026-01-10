import { Flex, Image } from "antd";
import { useEffect, useState } from "react";
import type { ProductColorProps } from "widgets/home/product-catalog/model/types";

interface DetailImagesProps {
  selectedColor: ProductColorProps | null;
}

export const Images = ({ selectedColor }: DetailImagesProps) => {
  const [selectedImgIndex, setSelectedImg] = useState(0);
  useEffect(() =>{
    setSelectedImg(0)
  },[selectedColor])
  return (
    <Flex vertical gap={24}>
      <Image
        src={selectedColor?.image?.[selectedImgIndex]}
        width={670} height={590} preview={false} className="object-contain" />

      <Flex gap={20}>
        {selectedColor?.image?.map((img, index) => (
          <Image key={index} src={img} preview={false} width={150} height={150}
            onClick={() => { setSelectedImg(index) }}
            className={`object-contain! rounded-3xl! cursor-pointer border-2 transition
              ${
                selectedImgIndex === index
                  ? "border-[var(--color-primary)]"
                  : "border-transparent"
              }
            `}
          />
        ))}
      </Flex>
    </Flex>
  );
};

import { Flex, Typography } from "antd"
import { PoweroffOutlined } from "@ant-design/icons"
import type { ProductColorProps } from "widgets/home/product-catalog/model/types"

const { Text } = Typography

interface DetailHighlightsProps {
  colors?: ProductColorProps[]
}

export const Highlights = ({ colors = [] }: DetailHighlightsProps) => {
  return (
    <div className="p-5 w-full bg-[var(--color-white)] rounded-xl">
        <Flex vertical gap={15}>
        <Text style={{fontWeight:700}}>Highlights</Text>
        {colors.map((color) => (
          <Flex key={color.value} align="center" gap={8}>
            <PoweroffOutlined style={{color:'var(--color-primary )'}}/>
            <Text type="secondary">{color.bataries}</Text>
          </Flex>
        ))}
      </Flex>
      </div>
  )
}

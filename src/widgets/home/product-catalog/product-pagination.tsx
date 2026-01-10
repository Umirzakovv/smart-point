import { Pagination } from "antd"

interface Props {
  total: number
  pageSize: number
  onChange: (page: number) => void
}

export const ProductPagination = ({
  total,
  pageSize,
  onChange,
}: Props) => {
  return (
    <Pagination
      align="center"
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger={false}
      
    />
  )
}

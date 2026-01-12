import { Flex, Form, Input, Modal, Space, Typography } from 'antd';

interface Props {
  productTitle: string;
  productPrice: number;
  isOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export const BookModal = ({
  productTitle,
  productPrice,
  isOpen,
  handleOk,
  handleCancel,
}: Props) => {
  return (
    <Modal
      title="Sotib olish"
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}>
      <Flex vertical>
        <Flex>
          <img src="/public/images/Iphone 14 pro 1 (1).png" alt="Product image" className="w-1/3" />
          <div className="w-2/3 ml-4">
            <Typography.Title level={3}>{productTitle}</Typography.Title>
            <Typography.Text>Narxi: {productPrice}$</Typography.Text>
          </div>
        </Flex>
        <Form layout="vertical">
          <Form.Item label="Ism">
            <Input placeholder="Ismingizni kiriting..." />
          </Form.Item>
          <Form.Item label="Telefon raqami">
            <Space.Compact className="w-full">
              <Space.Addon>+998</Space.Addon>
              <Input placeholder="99 999 99 99" maxLength={9} />
            </Space.Compact>
          </Form.Item>
        </Form>
      </Flex>
    </Modal>
  );
};

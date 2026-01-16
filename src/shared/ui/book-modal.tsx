import { Flex, Form, Input, Modal, Typography, message } from 'antd';
import { useOrder } from 'shared/api/order';
import type { UserOrderInfo } from 'shared/api/type';
import type React from 'react';

interface Props {
  productTitle: string;
  productPrice: number;
  isOpen: boolean;
  handleCancel: () => void;
  image: string;
}

interface FormValue {
  name: string;
  phoneNumber: string;
}

export const BookModal = ({ productTitle, productPrice, isOpen, handleCancel, image }: Props) => {
  const [form] = Form.useForm<FormValue>();
  const { createUserOrder, loading } = useOrder();

  const handleSubmit = (values: FormValue) => {
    const newOrderUser: UserOrderInfo = {
      product: productTitle,
      customerName: values.name,
      phoneNumber: `+998${values.phoneNumber}`,
    };
    createUserOrder(newOrderUser);
    message.success('Tez orada siz bilan bog‘lanamiz');
    form.resetFields();
    handleCancel();
  };

  function handleEnterPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      form.submit();
    }
  }

  return (
    <Modal
      title="Sotib olish"
      open={isOpen}
      onCancel={handleCancel}
      okText="Buyurtma qilish"
      cancelText="Bekor qilish"
      okButtonProps={{ style: { color: 'var(--color-white)' }, disabled: loading, loading }}
      onOk={() => form.submit()}>
      <Flex vertical gap={16}>
        <Flex className="flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0">
          <img src={image} alt="Product image" className="w-full sm:w-1/3! h-40 object-contain!" />
          <div className="w-full sm:w-2/3 sm:ml-4 flex flex-col gap-3 text-center sm:text-left">
            <Typography.Title level={3}>{productTitle}</Typography.Title>
            <Typography.Text>Narxi: ${productPrice}</Typography.Text>
          </div>
        </Flex>

        <Form layout="vertical" form={form} onFinish={handleSubmit} onKeyDown={handleEnterPress}>
          <Form.Item
            label="Ism"
            name="name"
            required
            rules={[{ required: true, message: 'Iltimos, ismingizni kiriting' }]}>
            <Input placeholder="Ismingizni kiriting..." />
          </Form.Item>

          <Form.Item
            label="Telefon raqami"
            name="phoneNumber"
            rules={[
              { required: true, message: 'Telefon raqamingizni kiriting' },
              {
                pattern: /^[0-9]{9}$/,
                message: '9 xonali raqam kiriting',
              },
            ]}>
            <Input addonBefore="+998" placeholder="99 999 99 99" maxLength={9} required />
          </Form.Item>
        </Form>
      </Flex>
    </Modal>
  );
};

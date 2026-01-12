import { Flex, Form, Input, Modal,  Typography, message } from 'antd';
import type React from 'react';

interface Props {
  productTitle: string;
  productPrice: number;
  activeColor:string,
  isOpen: boolean;
  handleCancel: () => void;
  image: string;
}

interface FormValue {
  name: string;
  phoneNumber: string; 
}

export const BookModal = ({
  productTitle,
  productPrice,
  activeColor,
  isOpen,
  handleCancel,
  image
}: Props) => {
  const [form] = Form.useForm<FormValue>();

  const handleSubmit = (values: FormValue) => {
    console.log('values', values);
    form.resetFields()
  };

  const handleModalOk = () => {
    form.submit(); 
    message.success('Tez orada siz bilan bog`lanamiz')
    handleCancel()
  };

  function handleEnter(e:React.KeyboardEvent){
    if (e.key === 'Enter') {
      form.submit()
    }
  }
  
  return (
    <Modal
      title="Sotib olish"
      closable
      open={isOpen}
      onOk={handleModalOk}
      okText="Buyurtma qilish"
      cancelText="Bekor qilish"
      okButtonProps={{ style: { color: 'var(--color-white)' } }}
      onCancel={handleCancel}
    >
      <Flex vertical>
        <Flex>
          <img 
            src={image} 
            alt="Product image" 
            className='w-1/3! h-40 object-contain!' 
          />
          <div className="w-2/3 ml-4 flex flex-col gap-3">
            <Typography.Title level={3}>{productTitle}</Typography.Title>
            <Typography.Text>Narxi: ${productPrice}</Typography.Text>
            <Typography.Text>Rangi: {activeColor}</Typography.Text>
          </div>
        </Flex>

        <Form 
          layout="vertical" 
          form={form}
          onKeyDown={(e) => handleEnter(e)}
          onFinish={(values) => handleSubmit(values)}
        >
          <Form.Item 
            label="Ism" 
            name="name"
            rules={[{ required: true, message: 'Iltimos, ismingizni kiriting' }]}
          >
            <Input placeholder="Ismingizni kiriting..." />
          </Form.Item>
          
          <Form.Item 
            label="Telefon raqami" 
            name="phoneNumber"
            rules={[
              { required: true, message: 'Iltimos, telefon raqamingizni kiriting' },
            ]}
          >
            <Input 
              addonBefore="+998"
              placeholder="99 999 99 99" 
              maxLength={9}
            />
          </Form.Item>
        </Form>
      </Flex>
    </Modal>
  );
};
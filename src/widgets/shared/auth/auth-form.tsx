import { Form, Input, Button, Flex, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Title, Text } = Typography;

interface LoginFormValues {
  fullName: string;
  password: string;
}

export interface AuthFormValues {
  fullName: string;
  password: string;
}

export const AuthForm = () => {
  const [form] = Form.useForm<AuthFormValues>();

  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  return (
    <div className="w-full max-w-[500px] rounded-3xl bg-white px-8 py-10 shadow-sm">
      <Flex vertical align="center" className="mb-8">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="mb-4" />

        <Title level={3}>Log in</Title>
        <Text type="secondary" className="mb-6">
          Enter your username and password
        </Text>
      </Flex>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        {/* Full name */}
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please select your username' }]}>
          <Input placeholder="Enter your username" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input.Password
            placeholder="Enter your password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        {/* Submit */}
        <Button type="primary" htmlType="submit" block className="!h-12">
          Log in
        </Button>
      </Form>
    </div>
  );
};

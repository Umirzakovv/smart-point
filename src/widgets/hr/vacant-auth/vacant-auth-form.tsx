import { Form, Row, Col, Select, Typography, theme, Input, Button } from 'antd';

const { Title, Paragraph } = Typography;

export const VacantAuthForm = () => {
  const [form] = Form.useForm();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const options = [
    { value: '1', label: 'user_1' },
    { value: '2', label: 'user_2' },
    { value: '3', label: 'user_3' },
  ];

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={(values) => console.log(values)}
      style={{
        maxWidth: 500,
        padding: 56,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}>
      <Row gutter={[0, 16]} justify="center">
        {/* Logo */}
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex' }}></div>
        </Col>

        {/* Title */}
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={3} style={{ marginBottom: 0 }}>
            Log in
          </Title>
          <Paragraph type="secondary">Enter your username and password</Paragraph>
        </Col>

        {/* Username */}
        <Col span={24}>
          <Form.Item
            label={<span style={{ fontWeight: 700 }}>Full Name</span>}
            name="username"
            rules={[{ required: true, message: 'Select user' }]}>
            <Select placeholder="Select your name" options={options} />
          </Form.Item>
        </Col>

        {/* Password */}
        <Col span={24}>
          <Form.Item
            label={<span style={{ fontWeight: 700 }}>Password</span>}
            name="password"
            rules={[{ required: true, message: 'Enter password' }]}>
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
        </Col>

        {/* Button */}
        <Col span={24}>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

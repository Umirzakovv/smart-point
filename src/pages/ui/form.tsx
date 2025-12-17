import { Form, Input, Button, Row, Col, Select, Switch, Checkbox, Radio } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export const FormUI = () => {
  const [form] = Form.useForm();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Form form={form} layout="vertical" className="w-full" onFinish={() => form.submit()}>
      <Row gutter={[16, 16]}>
        {/* Input */}
        <Col span={12}>
          <Form.Item
            label="Required input"
            name="requiredInput"
            rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="Placeholder" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Disabled input" name="disabledInput">
            <Input placeholder="Placeholder" disabled />
          </Form.Item>
        </Col>

        {/* Select */}
        <Col span={12}>
          <Form.Item
            label="Required select"
            name="requiredSelect"
            rules={[{ required: true, message: 'This field is required' }]}>
            <Select placeholder="Placeholder" options={options} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Disabled select" name="disabledSelect">
            <Select placeholder="Select" disabled />
          </Form.Item>
        </Col>

        {/* File upload */}
        <Col span={12}>
          <Form.Item
            label="Required select"
            name="requiredSelect"
            rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="Upload sm file" type="file" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Disabled select" name="disabledSelect">
            <Select placeholder="Select" disabled />
          </Form.Item>
        </Col>

        {/* Textarea */}
        <Col span={12}>
          <Form.Item label="Textarea" name="textarea">
            <TextArea placeholder="Write smth..." />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Required textarea"
            name="required_textarea"
            rules={[{ required: true, message: 'Textarea is required' }]}>
            <TextArea placeholder="Write smth..." />
          </Form.Item>
        </Col>

        {/* Switch */}
        <Col span={12}>
          <Form.Item label="Switch" name="base_switch">
            <Switch />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Disabled Switch and it's loading status" name="disabled_switch">
            <Switch disabled loading />
          </Form.Item>
        </Col>

        {/* Checkbox */}
        <Col span={12}>
          <Form.Item label="Checkbox" name="checkbox">
            <Checkbox />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Disabled checkbox" name="disabled_switch">
            <Checkbox disabled title="lorem" />
          </Form.Item>
        </Col>

        {/* Checkbox */}
        <Col span={12}>
          <Form.Item label="Radio" name="radio">
            <Radio.Group>
              <Radio value="a">A</Radio>
              <Radio value="b">B</Radio>
              <Radio value="c">C</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Radio disabled" name="radio_disabled">
            <Radio.Group disabled>
              <Radio value="a">A</Radio>
              <Radio value="b">B</Radio>
              <Radio value="c">C</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item className="mt-4">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

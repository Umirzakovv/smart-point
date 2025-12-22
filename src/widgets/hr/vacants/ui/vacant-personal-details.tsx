import { Col, Row, Typography } from 'antd';

interface Props {
  name: string;
  address: string;
  db: string;
  phone: string;
}

export const VacantPersonalDetails = ({ name, address, db, phone }: Props) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-4!">
      <Typography.Text type="secondary" className="uppercase">
        Personal details
      </Typography.Text>

      <Row gutter={[16, 16]} className="mt-4!">
        <Col span={12}>
          <Typography.Text type="secondary">Applied</Typography.Text>
          <Typography.Text className="block bold">{name}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="secondary">Date of birth</Typography.Text>
          <Typography.Text className="block bold">{db}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="secondary">Address</Typography.Text>
          <Typography.Text className="block bold">{address}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="secondary">Phone number</Typography.Text>
          <Typography.Text className="block bold">{phone}</Typography.Text>
        </Col>
      </Row>
    </div>
  );
};

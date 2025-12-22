import { Col, Row, Typography } from 'antd';

interface Props {
  isStudent: boolean;
  workExperience: string;
  uzLevel: string;
  ruLevel: string;
  enLevel: string;
  compLevel: string;
}

export const VacantOtherDetails = ({
  isStudent,
  workExperience,
  uzLevel,
  ruLevel,
  enLevel,
  compLevel,
}: Props) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-4!">
      <Typography.Text type="secondary" className="uppercase">
        Other details
      </Typography.Text>

      <Row gutter={[16, 16]} className="mt-4!">
        <Col span={12}>
          <Typography.Text type="secondary">Talabami?</Typography.Text>
          <Typography.Text className="block bold">{isStudent ? 'Yes' : 'No'}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="secondary">Work experience</Typography.Text>
          <Typography.Text className="block bold">{workExperience}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="secondary">Uz language </Typography.Text>
          <Typography.Text className="block bold">{uzLevel}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="secondary">Ru language</Typography.Text>
          <Typography.Text className="block bold">{ruLevel}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="secondary">En language</Typography.Text>
          <Typography.Text className="block bold">{enLevel}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="secondary">Computer literacy</Typography.Text>
          <Typography.Text className="block bold">{compLevel}</Typography.Text>
        </Col>
      </Row>
    </div>
  );
};

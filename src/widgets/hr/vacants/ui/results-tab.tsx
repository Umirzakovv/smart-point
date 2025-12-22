import { Button, Form, Input, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './style.css';

interface FeedbackRow {
  key: string;
  step: string;
  interviewer: string;
  score?: string;
  isActive: boolean;
}

const data: FeedbackRow[] = [
  {
    key: '0',
    step: 'Steps',
    interviewer: 'Interviewer',
    score: 'Feedback',
    isActive: false,
  },
  {
    key: '1',
    step: 'Diktant - UZ',
    interviewer: 'AI',
    score: '70 ball',
    isActive: false,
  },
  {
    key: '2',

    step: 'Diktant - RU',
    interviewer: 'AI',
    score: '80 ball',
    isActive: false,
  },
  {
    key: '3',

    step: 'Suhbat - RU',
    interviewer: 'Sabina Anvarjonova',
    isActive: true,
  },
  {
    key: '4',
    step: 'Internship',
    interviewer: 'Sabina Anvarjonova',
    isActive: false,
  },
];

export const ResultsTab = () => {
  const columns: ColumnsType<FeedbackRow> = [
    {
      dataIndex: 'step',
      render: (text, row) => (
        <div>
          <strong>{text}</strong>
          {row.isActive && (
            <div>
              <Tag color="blue">Active</Tag>
            </div>
          )}
        </div>
      ),
    },
    {
      dataIndex: 'interviewer',
      render: (text) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{text}</span>
        </div>
      ),
    },
    {
      render: (_, row) =>
        !row.isActive ? (
          <Typography.Text>{row.score}</Typography.Text>
        ) : (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Input type="text" max={100} maxLength={3} suffix="/ 100" />
            <Input.TextArea placeholder="Write a feedback" rows={3} />
            <Button type="primary">Submit</Button>
          </Form>
        ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      showHeader={false}
      className="results-table"
    />
  );
};

import { Table } from 'antd';
import { memo } from 'react';

interface Props {
  onRowClick: (id: string) => void;
}

const dataSource = [
  { key: '1', name: 'Mike', age: 32, address: 'London' },
  { key: '2', name: 'John', age: 42, address: 'London' },
  { key: '3', name: 'Tyson', age: 54, address: 'London' },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

export const VacantsTable = memo(({ onRowClick }: Props) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      onRow={(record) => ({
        onClick: () => onRowClick(record.key),
      })}
    />
  );
});

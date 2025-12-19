import { Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from 'widgets/shared/sidebar';

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen p-4">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout className="ml-4">
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

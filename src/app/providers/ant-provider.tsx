import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9FE870',
          colorError: '#DA1E28',
          fontFamily: 'Inter, sans-serif',
        },
        components: {
          Button: {
            borderRadius: 9999,
            colorBorderDisabled: 'transparent',
            primaryColor: '#000000',
            paddingInline: 24,
            fontSize: 16,
          },
          Segmented: {
            itemColor: '#70746D',
          },
        },
      }}>
      {children}
    </ConfigProvider>
  );
}

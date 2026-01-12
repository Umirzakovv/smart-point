import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';

export function AntProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      componentSize="large"
      modal={{
        mask: {
          enabled: true,
          blur: false,
        },
      }}
      theme={{
        token: {
          fontFamily: 'Inter, system-ui, sans-serif',
          colorSuccess: '#0F62FE',
          colorError: '#DA1E28',
          colorText: '#10170B',
          colorTextSecondary: '#70746D',
          colorBgLayout: '#F6F6F6',
          colorSuccessText: '#0C9725',
          colorSuccessBg: '#D9FDD4',
        },
        components: {
          Menu: {
            itemActiveBg: '#fff',
            itemSelectedBg: '#fff',
            itemSelectedColor: '#000',
          },
          // Form
          Input: {
            borderRadius: 8,
            fontSize: 16,
          },
          Select: {
            borderRadius: 8,
            fontSize: 16,
          },
          Button: {
            borderRadius: 12,
            colorBorderDisabled: 'transparent',
            primaryColor: '#000000',
            paddingInline: 24,
            fontSize: 16,
            // primary btn
            colorPrimary: 'var(--color-primary)',
            colorPrimaryHover: 'var(--color-primary)',
          },
          Segmented: {
            itemColor: '#70746D',
          },
          Table: {
            headerColor: '#70746D',
            headerBg: '#f5f5f5',
            headerBorderRadius: 8,
          },
          Pagination: {
            itemActiveBg: 'var(--color-primary)',
            itemActiveColor: 'var(--color-white)',
            itemBg: 'transparent',
            itemActiveColorHover: 'var(--color-white)',
          },
          Card: {
            borderRadius: 16,
          },
          Collapse: {
            headerBg: 'var(--color-white)',
            lineWidth: 0,
          },
        },
      }}>
      {children}
    </ConfigProvider>
  );
}

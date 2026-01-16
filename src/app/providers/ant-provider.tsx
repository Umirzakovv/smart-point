import { ConfigProvider, theme as antTheme } from 'antd';
import type { ReactNode } from 'react';
import { useTheme } from './theme-context';

export function AntProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

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
        algorithm: theme === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          fontFamily: 'Inter, system-ui, sans-serif',
          colorSuccess: '#0F62FE',
          colorError: '#DA1E28',
          // colorText: '#10170B',
          colorTextSecondary: '#70746D',
          colorBgLayout: theme === 'dark' ? '#141414' : '#F6F6F6',
          colorSuccessText: '#0C9725',
          colorSuccessBg: '#D9FDD4',
        },
        components: {
          Menu: {
            itemActiveBg: theme === 'dark' ? '#1f1f1f' : '#fff',
            itemSelectedBg: theme === 'dark' ? '#1f1f1f' : '#fff',
            itemSelectedColor: theme === 'dark' ? '#fff' : '#000',
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
            paddingInline: 24,
            fontSize: 16,
            colorPrimary: 'var(--color-primary)',
            colorPrimaryHover: 'var(--color-primary)',
          },
          Segmented: {
            itemColor: '#70746D',
            itemSelectedBg: theme === 'dark' ? '#303030' : '#fff',
          },
          Table: {
            headerColor: '#70746D',
            headerBg: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
            headerBorderRadius: 8,
          },
          Pagination: {
            itemActiveBg: 'var(--color-primary)',
            itemActiveColor: 'var(--color-white)',
            itemBg: 'transparent',
            itemActiveColorHover: 'var(--color-white)',
          },
          Card: {
            borderRadius: 20,
          },
          Collapse: {
            headerBg: theme === 'dark' ? '#1f1f1f' : 'var(--color-white)',
            lineWidth: 0,
          },
        },
      }}>
      {children}
    </ConfigProvider>
  );
}

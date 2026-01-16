import { AntProvider } from './ant-provider';
import { RouterProviderWrapper } from './routerProvider';
import { StoreProvider } from './storeProvider';
import { ThemeProvider } from './theme-context';

export const Providers = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AntProvider>
          <RouterProviderWrapper />
        </AntProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

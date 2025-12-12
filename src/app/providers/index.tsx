import { AppProvider } from './ant-provider';
import { RouterProviderWrapper } from './routerProvider';
import { StoreProvider } from './storeProvider';

export const Providers = () => {
  return (
    <StoreProvider>
      <AppProvider>
        <RouterProviderWrapper />
      </AppProvider>
    </StoreProvider>
  );
};

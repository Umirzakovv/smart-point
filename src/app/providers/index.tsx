import { AntProvider } from './ant-provider';
import { RouterProviderWrapper } from './routerProvider';
import { StoreProvider } from './storeProvider';
export const Providers = () => {
  return (
    <StoreProvider>
      <AntProvider>
          <RouterProviderWrapper />
      </AntProvider>
    </StoreProvider>
  );
};

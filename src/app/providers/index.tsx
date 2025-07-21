import { RouterProviderWrapper } from './routerProvider';
import { StoreProvider } from './storeProvider';

export const Providers = () => {
  return (
    <StoreProvider>
      <RouterProviderWrapper />
    </StoreProvider>
  );
};

import { AppProvider } from './ant-provider';
import { DrawerProvider } from './drawer/drawer-provider';
import { RouterProviderWrapper } from './routerProvider';
import { StoreProvider } from './storeProvider';

export const Providers = () => {
  return (
    <StoreProvider>
      <AppProvider>
        <DrawerProvider>
          <RouterProviderWrapper />
        </DrawerProvider>
      </AppProvider>
    </StoreProvider>
  );
};

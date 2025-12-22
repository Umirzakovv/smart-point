import { useCallback, useEffect, useState, type ReactNode } from 'react';
import type { IDrawer } from 'shared/lib/types/drawer';
import { DrawerContext } from './drawer-context';

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [drawers, setDrawers] = useState<IDrawer[]>([]);

  const openDrawer = useCallback((drawer: IDrawer) => {
    setDrawers((prev) =>
      prev.some((d) => d.id === drawer.id)
        ? prev.map((d) => (d.id === drawer.id ? drawer : d))
        : [...prev, drawer],
    );
  }, []);

  const closeDrawerById = useCallback((id: string) => {
    setDrawers((prev) => prev.filter((d) => d.id !== id));
  }, []);

  const closeLastDrawer = useCallback(() => {
    setDrawers((prev) => prev.slice(0, -1));
  }, []);

  const closeAllDrawers = useCallback(() => {
    setDrawers([]);
  }, []);

  // ESC support
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLastDrawer();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeLastDrawer]);

  return (
    <DrawerContext.Provider
      value={{
        drawers,
        openDrawer,
        closeDrawerById,
        closeLastDrawer,
        closeAllDrawers,
      }}>
      {children}
    </DrawerContext.Provider>
  );
};

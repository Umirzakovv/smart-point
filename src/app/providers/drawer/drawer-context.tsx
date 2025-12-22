import { createContext, useContext } from 'react';
import type { IDrawer } from 'shared/lib/types/drawer';

interface DrawerContextValue {
  drawers: IDrawer[];
  openDrawer: (drawer: IDrawer) => void;
  closeDrawerById: (id: string) => void;
  closeLastDrawer: () => void;
  closeAllDrawers: () => void;
}

export const DrawerContext = createContext<DrawerContextValue | null>(null);

export const useDrawer = () => {
  const ctx = useContext(DrawerContext);
  if (!ctx) {
    throw new Error('useDrawer must be used inside DrawerProvider');
  }
  return ctx;
};

/* selector-style hooks (IMPORTANT for performance) */
export const useDrawerState = () => {
  return useDrawer().drawers;
};

export const useDrawerActions = () => {
  const { openDrawer, closeDrawerById, closeLastDrawer, closeAllDrawers } = useDrawer();

  return { openDrawer, closeDrawerById, closeLastDrawer, closeAllDrawers };
};

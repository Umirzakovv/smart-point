import { useCallback } from 'react';
import type { IDrawer } from '../types/drawer';

interface UseRemoveDrawerParams {
  setDrawers: React.Dispatch<React.SetStateAction<IDrawer[]>>;
}

export function useRemoveDrawer({ setDrawers }: UseRemoveDrawerParams) {
  return useCallback(
    (id?: IDrawer['id']) => {
      setDrawers((prev) => {
        if (id === undefined) {
          // remove last drawer
          return prev.slice(0, -1);
        }

        // remove by id
        return prev.filter((drawer) => drawer.id !== id);
      });
    },
    [setDrawers],
  );
}

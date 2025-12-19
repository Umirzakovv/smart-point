import { useCallback } from 'react';
import type { IDrawer } from '../types/drawer';

interface UseAddDrawerParams {
  setDrawers: React.Dispatch<React.SetStateAction<IDrawer[]>>;
  id: string;
  span?: number;
  content?: React.ReactNode;
}

interface AddDrawerParams {
  defaultId?: string;
  defaultContent?: React.ReactNode;
  defaultSpan?: number;
}

export function useAddDrawer({ setDrawers, id, span = 4, content }: UseAddDrawerParams) {
  return useCallback(
    ({ defaultId, defaultContent, defaultSpan }: AddDrawerParams = {}) => {
      setDrawers((prev) => [
        ...prev,
        {
          id: defaultId ?? id,
          span: defaultSpan ?? span,
          content: defaultContent ?? content,
        },
      ]);
    },
    [setDrawers, id, content, span],
  );
}

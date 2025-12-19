import { useEffect, useState } from 'react';
import type { IDrawer } from 'shared/lib/types/drawer';
import { GridContentWrapper } from 'shared/ui/grid-content-wrapper';
import { Lorem } from './lorem';

export const Ipsum = ({ id }: { id: number }) => {
  return <div>I am ipsum, bro {id}</div>;
};

const INITIAL_DRAWERS = [
  { id: 'first_drawer', span: 4, content: <Ipsum id={1} /> },
  { id: 'second_drawer', span: 4, content: <Ipsum id={2} /> },
  { id: 'third_drawer', span: 4, content: <Ipsum id={3} /> },
];

export const ExamplePage = () => {
  const [drawers, setDrawers] = useState<IDrawer[]>(INITIAL_DRAWERS);

  // Close drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawers((prev) => prev.slice(0, -1)); // Remove last drawer
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <GridContentWrapper
      main={<Lorem setDrawers={setDrawers} />}
      drawers={drawers}
      setDrawers={setDrawers}
    />
  );
};

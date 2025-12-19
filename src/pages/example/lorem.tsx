import { Button } from 'antd';
import { useAddDrawer } from 'shared/lib/hooks/useAddDrawer';
import type { IDrawer } from 'shared/lib/types/drawer';
import { Ipsum } from '.';
import { useRemoveDrawer } from 'shared/lib/hooks/useRemoveDrawer';

interface Props {
  setDrawers: React.Dispatch<React.SetStateAction<IDrawer[]>>;
}

export const Lorem = ({ setDrawers }: Props) => {
  const addDrawer = useAddDrawer({
    id: 'new-drawer',
    setDrawers,
    span: 4,
    content: <Ipsum id={5} />,
  });
  const removeDrawer = useRemoveDrawer({ setDrawers });

  return (
    <div>
      <Button type="primary" onClick={() => addDrawer()}>
        Click to add drawer
      </Button>

      <Button type="primary" danger onClick={() => removeDrawer('new-drawer')}>
        Click to remove drawer
      </Button>

      <p>Lorem component</p>
    </div>
  );
};

import { DrawerHeader } from 'shared/ui/drawer-header';

interface Props {
  vacantId: string;
}

export const VacantProfile = ({ vacantId }: Props) => {
  console.log('rendered vacants profile');

  return (
    <div>
      <DrawerHeader title="Vacant profile" />
      <p>vacantId: {vacantId}</p>
    </div>
  );
};

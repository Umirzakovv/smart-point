import { GridContentWrapper } from 'shared/ui/grid-content-wrapper';
import { VacantsTable } from 'widgets/hr/vacants/vacants-table';
import { VacantProfile } from 'widgets/hr/vacants/vacant-profile';
import { useDrawer } from 'app/providers/drawer/drawer-context';

export const VacantsPage = () => {
  const { drawers, openDrawer } = useDrawer();
  console.log('rendered vacants page');

  return (
    <GridContentWrapper
      main={
        <VacantsTable
          onRowClick={(id) =>
            openDrawer({
              id: 'vacant-profile',
              span: 4,
              content: <VacantProfile vacantId={id} />,
            })
          }
        />
      }
      drawers={drawers}
    />
  );
};

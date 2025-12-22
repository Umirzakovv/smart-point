import { useCallback, memo } from 'react';
import { GridContentWrapper } from 'shared/ui/grid-content-wrapper';
import { useDrawerState, useDrawerActions } from 'app/providers/drawer/drawer-context';
import { VacantsTable } from 'widgets/hr/vacants/ui/vacants-table';
import { VacantProfile } from 'widgets/hr/vacants/ui/vacant-profile';

const VacantsMain = memo(({ onRowClick }: { onRowClick: (id: string) => void }) => {
  return (
    <div>
      <VacantsTable onRowClick={onRowClick} />
    </div>
  );
});

export const VacantsPage = () => {
  const drawers = useDrawerState();
  const { openDrawer } = useDrawerActions();

  const handleRowClick = useCallback(
    (id: string) => {
      openDrawer({
        id: 'vacant-profile',
        span: 6,
        content: <VacantProfile vacantId={id} />,
      });
    },
    [openDrawer],
  );
  return (
    <GridContentWrapper main={<VacantsMain onRowClick={handleRowClick} />} drawers={drawers} />
  );
};

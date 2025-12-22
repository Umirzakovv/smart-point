import { Flex, Typography } from 'antd';
import type { IStep, IStepKey } from '../model/types';
import { transformedSteps } from '../model/transformed-steps';

const STEPS: IStep[] = [
  { order: 1, key: 'applied', label: 'Applied', status: 'upcoming' },
  { order: 2, key: 'interview', label: 'Interview', status: 'upcoming' },
  { order: 3, key: 'internship', label: 'Internship', status: 'upcoming' },
  { order: 4, key: 'hired', label: 'Hired', status: 'upcoming' },
];

interface Props {
  currentStepKey: IStepKey;
}

export const VacantProcessStatus = ({ currentStepKey }: Props) => {
  const currentStep = STEPS.find((s) => s.key === currentStepKey) as IStep;
  const reDesignedSteps = transformedSteps(currentStepKey, currentStep, STEPS);

  return (
    <div className="border border-gray-200 rounded-2xl p-4!">
      <Typography.Text className="text-[#70746D]!">CURRENT PROCESS</Typography.Text>
      <Flex gap={8} align="center" justify="space-between" className="w-full mt-4!">
        {reDesignedSteps.map((step) => (
          <Flex
            key={step.key}
            vertical
            className="gap-2"
            style={{ width: `${100 / STEPS.length}%` }}>
            {/* PROGRESS BAR */}
            <div
              className={`
              h-2 w-full rounded-2xl
              ${
                step.status === 'current'
                  ? '!bg-[var(--color-warning)]'
                  : step.status === 'completed'
                    ? '!bg-[var(--color-primary)]'
                    : 'bg-gray-100'
              }
            `}
            />

            {/* LABEL */}
            <p
              className={`text-xs ${step.status === 'current' || step.status === 'completed' ? '' : 'text-(--color-secondary)'} `}>
              {step.label}
            </p>
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

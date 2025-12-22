import type { IStep, IStepKey } from './types';

export function transformedSteps(
  currentKey: IStepKey,
  currentStep: IStep,
  STEPS: IStep[],
): IStep[] {
  return STEPS.map((step) => {
    if (!currentStep) return step;

    // agar oxirgi step bo‘lsa
    if (step.order === STEPS.length && currentKey === 'hired') {
      return { ...step, status: 'completed' };
    }

    if (step.order < currentStep.order) {
      return { ...step, status: 'completed' };
    }

    if (step.order === currentStep.order) {
      return { ...step, status: 'current' };
    }

    return { ...step, status: 'upcoming' };
  });
}

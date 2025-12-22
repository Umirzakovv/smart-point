export type IStepKey = 'applied' | 'interview' | 'internship' | 'hired';
export type IStepStatus = 'completed' | 'current' | 'upcoming';

export interface IStep {
  order: number;
  key: IStepKey;
  label: string;
  status: IStepStatus;
}

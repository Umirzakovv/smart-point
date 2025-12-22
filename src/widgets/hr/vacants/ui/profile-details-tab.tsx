import { Flex } from 'antd';
import { VacantPersonalDetails } from './vacant-personal-details';
import { VacantProcessStatus } from './vacant-process-status';
import { VacantOtherDetails } from './vacant-other-details';

export const ProfileDetailsTab = () => {
  return (
    <Flex className="flex-col" gap={16}>
      <VacantProcessStatus currentStepKey="internship" />
      <VacantPersonalDetails
        name="Sitora Anvarovna"
        address="Tashkent Uzbekistan"
        db="03.05.1998"
        phone="99 999 99 57"
      />
      <VacantOtherDetails
        isStudent
        workExperience="2 years"
        uzLevel="A1"
        ruLevel="A1"
        enLevel="A1"
        compLevel="A1"
      />
    </Flex>
  );
};

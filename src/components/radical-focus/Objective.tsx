'use client';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import ProfileDropdown from '../elements/ProfileDropdown';
import CustomDatePicker from '../elements/CustomDatePicker';
import CustomSlider from '../elements/CustomSlider';
import PrimaryBtn from '../elements/PrimaryBtn';
import ShowMore from './ShowMore';

import { icons } from '@/assets/icons';

type ObjectiveType = {
  text: string;
  selected: boolean;
};

interface DataType {
  key: string;
  objectiveType: string;
  responsible: string[];
  division: string;
  description: string;
  dueDate: string;
  progress: number;
  achieved: string;
  conditions: string[];
}

const Objectives: React.FC = () => {
  const handleClick = () => {
    console.log('objectives');
  };
  const handleDtChange = () => {
    console.log('date changed');
  };

  const objectiveYears: ObjectiveType[] = [
    {
      text: '2022',
      selected: true,
    },
    {
      text: '2021',
      selected: false,
    },
    {
      text: '2020',
      selected: false,
    },
  ];

  const objectiveParameters: ObjectiveType[] = [
    {
      text: 'Company',
      selected: true,
    },
    {
      text: 'Division',
      selected: true,
    },
    {
      text: 'Individual',
      selected: true,
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      objectiveType: 'company',
      division: 'CEO',
      responsible: ['matilda', 'matilda', 'matilda'],
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
      achieved: 'Objective is achieved when',
      conditions: [
        'We have companyX as client',
        'We are larger than competitorY',
        'We have grown more than 30% in revenue',
      ],
    },
    {
      key: '2',
      objectiveType: 'division',
      division: 'Sales',
      responsible: ['matilda', 'matilda'],
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
      achieved: 'Objective is achieved when',
      conditions: ['We have expanded into regionZ', 'Revenue has grown by 20%'],
    },
    {
      key: '3',
      objectiveType: 'division',
      division: 'Sales',
      responsible: ['matilda', 'matilda'],
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
      achieved: 'Objective is achieved when',
      conditions: ['We have expanded into regionZ', 'Revenue has grown by 20%'],
    },
  ];

  return (
    <div className="fp-white-bg rounded-xl overflow-hidden">
      <div className="px-6 py-4 flex justify-between items-center border-b border-[(--fp-purple-light)]">
        <h6 className="heading-6">Objectives</h6>
        <div className="flex gap-6 ">
          <div className="flex items-center">
            <span className="m-caption-1 mr-2">Year:</span>
            <div className="flex gap-1">
              {objectiveYears.map((year, index) => (
                <PrimaryBtn
                  key={year.text + '-' + index}
                  classNames={`px-2 py-1.5 sb-caption-2 rounded-md ${year.selected ? 'fp-white-ft fp-blue-light-bg' : 'fp-purple-light-bg fp-blue-light-ft'}`}
                  onClick={handleClick}
                  text={year.text}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="m-caption-1 mr-2">Select Type(s):</span>
            <div className="flex gap-1">
              {objectiveParameters.map((para, index) => (
                <PrimaryBtn
                  key={para.text + '-' + index}
                  classNames={`px-2 py-1.5 sb-caption-2 rounded-md ${para.selected ? 'fp-white-ft fp-blue-light-bg' : 'fp-purple-light-bg fp-blue-light-ft'}`}
                  onClick={handleClick}
                  text={para.text}
                />
              ))}
            </div>
          </div>
          <PrimaryIconBtn
            icon={icons.plusSvg}
            alt="add icon"
            text="Add Objective"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="w-full mt-2 mx-6 objective">
        {/* Header */}
        <div className="grid grid-cols-[200px_150px_150px_300px_200px_250px] w-full objective__header">
          <div className="objective__header__item">Objective Type</div>
          <div className="objective__header__item">Division</div>
          <div className="objective__header__item">Responsible</div>
          <div className="objective__header__item">Description</div>
          <div className="objective__header__item">Due Date</div>
          <div className="objective__header__item">Progress</div>
        </div>

        {/* Rows */}
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[200px_150px_150px_300px_200px_250px] fp-bg shadow-sm rounded-md mb-2"
          >
            {/* Objective Type */}
            <div className="px-4 py-3">
              {item.objectiveType === 'company' ? (
                <span className="sb-caption-1 fp-success-bg fp-success-dark-ft px-2.5 py-[5px] rounded-lg">
                  Company
                </span>
              ) : item.objectiveType === 'division' ? (
                <span className="sb-caption-1 fp-warning-bg fp-warning-dark-ft px-2.5 py-[5px] rounded-lg">
                  Division
                </span>
              ) : (
                <span className="sb-caption-1 fp-danger-bg fp-danger-dark-ft px-2.5 py-[5px] rounded-lg">
                  Individual
                </span>
              )}
            </div>

            {/* Division */}
            <div className="px-4 py-[17px]">
              <span className="body-2">{item.division}</span>
            </div>

            {/* Responsible */}
            <div className="px-3 py-[10px]">
              {<ProfileDropdown profiles={item.responsible} />}
            </div>

            {/* Description */}
            <div className="p-3">
              <p className="fp-white-bg body-2 border border-fp rounded-md p-1">
                {item.description}
              </p>
            </div>

            {/* Due Date */}
            <div className="p-3">
              {
                <CustomDatePicker
                  selectedDate={item.dueDate}
                  onDateChange={handleDtChange}
                  classNames="w-24"
                />
              }
            </div>

            {/* Progress */}
            <div className="p-4">
              {<CustomSlider initialProgress={item.progress} />}
            </div>
          </div>
        ))}
        <ShowMore show={5} classNames="pt-2" />
      </div>
    </div>
  );
};

export default Objectives;

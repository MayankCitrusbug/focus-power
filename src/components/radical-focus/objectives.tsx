import React from 'react';
import { icons } from '@/assets/icons';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import PrimaryBtn from '../elements/PrimaryBtn';

type ObjectiveType = {
  text: string;
  selected: boolean;
};

const Objectives: React.FC = () => {
  const handleClick = () => {
    console.log('radial focus setting');
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
      text: '2022',
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

  return (
    <div className="fp-white-bg rounded-xl" id="objectives">
      <div className="flex px-6 py-4 justify-between items-center border-b border-[(--fp-purple-light)]">
        <h6 className="heading-6">Objectives</h6>
        <div className="flex gap-6">
          <div className="flex">
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
          <div className="flex ">
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
    </div>
  );
};

export default Objectives;

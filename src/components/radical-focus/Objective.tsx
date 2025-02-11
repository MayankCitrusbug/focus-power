'use client';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import ProfileDropdown from '../elements/ProfileDropdown';
import CustomDatePicker from '../elements/CustomDatePicker';
import CustomSlider from '../elements/CustomSlider';
import PrimaryBtn from '../elements/PrimaryBtn';
import ShowMore from './ShowMore';

import { icons } from '@/assets/icons';
import Image from 'next/image';
import { useState } from 'react';

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
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleClick = () => {
    console.log('objectives');
  };
  const handleDtChange = () => {
    console.log('date changed');
  };

  const toggleRow = (key: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
    <div className="fp-white-bg rounded-xl">
      <div className="px-6 py-4 flex flex-wrap gap-2 justify-between items-center border-b border-[(--fp-purple-light)]">
        <h6 className="heading-6">Objectives</h6>
        <div className="flex gap-6 flex-wrap">
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
      <div className="mt-2 mx-6 objective">
        {/* Header */}
        <div className="w-full flex objective__header overflow-x-auto">
          <div className="objective-type-col objective__header__item table-item-border-right after:top-[18px]">
            Objective Type
          </div>
          <div className="division-col objective__header__item table-item-border-right after:top-[18px]">
            Division
          </div>
          <div className="responsible-col objective__header__item table-item-border-right after:top-[18px]">
            Responsible
          </div>
          <div className="description-col objective__header__item table-item-border-right after:top-[18px]">
            Description
          </div>
          <div className="due-date-col objective__header__item table-item-border-right after:top-[18px]">
            Due Date
          </div>
          <div className="progress-col objective__header__item">Progress</div>
        </div>

        {/* Rows */}
        {/* <div className="flex flex-col gap-1">
          {data.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-[minmax(145px,18%)_minmax(80px,10%)_minmax(112px,14%)_minmax(202px,25%)_minmax(122px,15%)_minmax(145px,18%)] fp-bg shadow-sm rounded-md">
                <div className="px-4 py-3 flex items-start gap-2 table-item-border-right after:top-6">
                  <button
                    className="mt-[5px] min-w-[18px]"
                    onClick={() => toggleRow(item.key)}
                  >
                    <Image
                      src={
                        expandedRows[item.key]
                          ? icons.tableDdUpSvg
                          : icons.tableDDSvg
                      }
                      alt="dropdown icon"
                    />
                  </button>
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

                <div className="px-4 py-[17px] table-item-border-right after:top-[21px]">
                  <span className="body-2">{item.division}</span>
                </div>

                <div className="px-3 py-[10px] table-item-border-right after:top-[21px]">
                  {<ProfileDropdown profiles={item.responsible} />}
                </div>

                <div className="p-3 table-item-border-right after:top-[21px]">
                  <p className="fp-white-bg body-2 border border-fp fp-purple-dark-ft rounded-md p-1">
                    {item.description}
                  </p>
                </div>

                <div className="p-3 table-item-border-right after:top-[21px]">
                  {
                    <CustomDatePicker
                      selectedDate={item.dueDate}
                      onDateChange={handleDtChange}
                      classNames="w-24"
                    />
                  }
                </div>

                <div className="p-4">
                  {<CustomSlider initialProgress={item.progress} />}
                </div>
              </div>
              {expandedRows[item.key] && (
                <div className="grid grid-cols-[minmax(145px,18%)_minmax(80px,10%)_minmax(112px,14%)_minmax(202px,25%)_minmax(122px,15%)_minmax(145px,18%)]">
                  <div className="col-span-3 sb-caption-1 px-4 py-[17px]">
                    {item.achieved}
                  </div>
                  <div className="col-span-3 objective-conditions">
                    <ul className="list-disc list-inside p-3 flex flex-col gap-2 fp-purple-dark-ft">
                      {item.conditions.map((condition, index) => (
                        <div
                          key={index + '-' + condition}
                          className="flex justify-between gap-3 items-center max-w-full"
                        >
                          <li className="body-2 px-2.5 py-[5px] rounded-lg border border-fp w-full">
                            {condition}
                          </li>
                          <button type="button" className="mr-[19px] ml-4">
                            <Image src={icons.trashBinSvg} alt="trash bin" />
                          </button>
                        </div>
                      ))}
                    </ul>
                    <div className="px-3 pt-1 pb-3">
                      <PrimaryIconBtn
                        icon={icons.plusSvg}
                        alt="add icon"
                        text="Add Condition"
                        onClick={handleClick}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div> */}
        <ShowMore show={5} classNames="pt-2" />
      </div>
    </div>
  );
};

export default Objectives;

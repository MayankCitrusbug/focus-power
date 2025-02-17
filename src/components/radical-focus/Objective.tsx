'use client';
import { useState } from 'react';
import Image from 'next/image';

import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import ProfileDropdown from '../elements/ProfileDropdown';
import CustomDatePicker from '../elements/CustomDatePicker';
import CustomSlider from '../elements/CustomSlider';
import PrimaryBtn from '../elements/PrimaryBtn';
import ShowMore from './ShowMore';

import {
  objectiveDataArr,
  objectiveParametersArr,
  objectiveYearsArr,
} from '@/utils/helper';

import { icons } from '@/assets/icons';

const Objectives: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  const objectiveYears = objectiveYearsArr();
  const objectiveParameters = objectiveParametersArr();
  const objectiveData = objectiveDataArr();

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

  return (
    <>
      <div className="px-2 sm:px-4 md:px-6 py-2 md:py-4 flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 md:justify-between items-start md:items-center border-b border-fp">
        <h6 className="heading-6">Objectives</h6>
        <div className=" flex-col flex md:flex-row gap-2 md:gap-4 xl:gap-6 flex-wrap">
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
      <div className="mt-2 mx-2 sm:mx-4 md:mx-6 overflow-x-auto scrollbar-thin">
        {/* Header */}
        <div className="flex">
          <div className="objective__type__col table__header__item table__item__border__right after:top-[18px]">
            Objective Type
          </div>
          <div className="objective__division__col table__header__item table__item__border__right after:top-[18px]">
            Division
          </div>
          <div className="objective__responsible__col table__header__item table__item__border__right after:top-[18px]">
            Responsible
          </div>
          <div className="objective__description__col table__header__item table__item__border__right after:top-[18px]">
            Description
          </div>
          <div className="objective__dueDate__col table__header__item table__item__border__right after:top-[18px]">
            Due Date
          </div>
          <div className="objective__progress__col table__header__item">
            Progress
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-1">
          {objectiveData.map((item, index) => (
            <div key={index}>
              <div className="flex">
                <div className="objective__type__col px-4 py-3 flex items-start gap-2 table__item__border__right after:top-6 fp-bg rounded-tl-md rounded-bl-md">
                  <button
                    className="mt-[6px] min-w-[18px]"
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

                <div className="objective__division__col px-4 py-[17px] table__item__border__right after:top-[21px] fp-bg">
                  <span className="body-2">{item.division}</span>
                </div>

                <div className="objective__responsible__col px-3 py-[10px] table__item__border__right after:top-[21px] fp-bg">
                  {<ProfileDropdown profiles={item.responsible} />}
                </div>

                <div className="objective__description__col p-3 table__item__border__right after:top-[21px] fp-bg">
                  <p className="fp-white-bg body-2 border border-fp fp-purple-dark-ft rounded-md p-1">
                    {item.description}
                  </p>
                </div>

                <div className="objective__dueDate__col p-3 table__item__border__right after:top-[21px] fp-bg">
                  {
                    <CustomDatePicker
                      selectedDate={item.dueDate}
                      onDateChange={handleDtChange}
                      classNames="w-24"
                    />
                  }
                </div>

                <div className="objective__progress__col p-4 fp-bg rounded-tr-md rounded-br-md">
                  {<CustomSlider initialProgress={item.progress} />}
                </div>
              </div>
              {expandedRows[item.key] && (
                <div className="flex">
                  <div className="objective__achieved__col col-span-3 sb-caption-1 px-4 py-[17px]">
                    {item.achieved}
                  </div>
                  <div className="objective__condition__col col-span-3 objective__conditions">
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
        </div>
        <ShowMore show={5} classNames="pt-2 sm:pt-4" />
      </div>
    </>
  );
};

export default Objectives;

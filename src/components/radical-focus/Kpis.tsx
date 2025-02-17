'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import ShowMore from './ShowMore';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';

import { KPIsPlasticDataArr, KPIsWasteDisposalDataArr } from '@/utils/helper';

import { icons } from '@/assets/icons';
import { images } from '@/assets/images';

const monthsArr: string[] = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'july',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const KPIs: React.FC = () => {
  const [isPlasticTableVisible, setIsPlasticTableVisible] =
    useState<boolean>(true);
  const [isWasteDisposalTableVisible, setIsWasteDisposalTableVisible] =
    useState<boolean>(false);
  const [expandedChildRows, setExpandedChildRows] = useState<{
    [key: string]: boolean;
  }>({});

  const plasticsData = KPIsPlasticDataArr();
  const wasteDisposalData = KPIsWasteDisposalDataArr();

  const handleTogglePlasticTable = () => {
    setIsPlasticTableVisible((prev) => !prev);
  };
  const handleWasteDisposalTableVisible = () => {
    setIsWasteDisposalTableVisible((prev) => !prev);
  };
  const toggleChildRow = (key: string) => {
    setExpandedChildRows((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="px-2 sm:px-4 md:px-6 py-2 md:py-4 flex flex-wrap gap-2 md:gap-6 justify-between items-center border-b border-fp">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center ">
          <h6 className="heading-6">KPIs</h6>
          <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center m-caption-2">
            <div className="KPIs__date__div">
              <span className="mr-3 fp-purple-dark-ft">Show KPIs for:</span>
              <DatePicker
                className="max-w-16 px-1.5 py-[3px] body-3 border border-fp mr-2 rounded-lg"
                picker="year"
                placeholder="Year"
                defaultValue={dayjs('2022', 'YYYY')}
              />
              <select
                name=""
                id=""
                className="body-3 px-1.5 py-[3px] capitalize border border-fp rounded-lg cursor-pointer"
              >
                {monthsArr.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <p>Current Week: 2022 - Q2 - CW 28</p>
          </div>
        </div>
        <div className="flex md:gap-6 gap-2 justify-between md:w-fit w-full">
          <PrimaryIconBtn
            icon={icons.plusSvg}
            alt="add icon"
            text="Add KPI"
            onClick={() => console.log('Add task clicked')}
          />
        </div>
      </div>

      <div className="mt-2 sm:mt-4 md:mt-6">
        <div className="px-4 py-[15px] mx-2 sm:mx-4 md:mx-6 fp-bg rounded-lg flex gap-4">
          <button className="min-w-[18px]" onClick={handleTogglePlasticTable}>
            <Image
              src={
                isPlasticTableVisible ? icons.tableDdUpSvg : icons.tableDDSvg
              }
              alt="dropdown icon"
            />
          </button>
          <div className="flex items-center">
            <h6 className="heading-6 mr-2">Plastic</h6>
            <span className="fp-blue-light-ft fp-purple-light-bg py-[3px] px-2 sb-caption-2 rounded-md">
              {plasticsData.length}
            </span>
          </div>
        </div>
        {isPlasticTableVisible && (
          <div className="overflow-x-auto scrollbar-thin pb-2 sm:pb-4 mb-2 sm:mb-4 KPIs__plastic__data__table mx-2 sm:mx-4 md:mx-6">
            {/* header */}
            <div className="flex">
              <div className="KPIs__kpi__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                KPI
              </div>
              <div className="KPIs__responsible__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Responsible
              </div>
              <div className="KPIs__graph__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Graph
              </div>
              <div className="KPIs__unit__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Unit
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Monthly Target
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Monthly Actual
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Month, %
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                YTD Target
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Priority
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b">
                Deviation
              </div>
            </div>
            {plasticsData.map((item, index) => {
              const isLastRow = index === plasticsData.length - 1;
              return (
                <React.Fragment key={item.key + '' + item.kpi}>
                  <div className="flex">
                    {item.children ? (
                      <div
                        className={`KPIs__kpi__col flex items-center table__item__border__right after:top-[21px]
                            ${!expandedChildRows[item.key] ? 'KPIs__parent__kpi' : ''}`}
                      >
                        <button
                          className="min-w-[18px] mx-4"
                          onClick={() => toggleChildRow(item.key)}
                        >
                          <Image
                            src={
                              expandedChildRows[item.key]
                                ? icons.tableDdUpSvg
                                : icons.tableDDSvg
                            }
                            alt="dropdown icon"
                          />
                        </button>
                        <div
                          className={`flex w-full justify-between py-[17px] pr-4 items-center fp__border__b`}
                        >
                          <p className="sb-caption-2 fp-blue-light-ft">
                            {item.kpi}
                          </p>
                          <button className="translate-y-[-25%] fp-purple-dark-ft">
                            <span>...</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`KPIs__kpi__col px-4 py-[17px] flex items-center gap-1 justify-between table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                      >
                        <p className="sb-caption-2 fp-blue-light-ft">
                          {item.kpi}
                        </p>
                        <button className="translate-y-[-25%] fp-purple-dark-ft">
                          <span>...</span>
                        </button>
                      </div>
                    )}

                    <div
                      className={`KPIs__responsible__col px-4 py-[15px] flex items-center gap-2 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <Image
                        src={images.matildaImg}
                        alt="responsible person profile"
                        width={26}
                        height={26}
                      />
                      <span className="body-2 fp-purple-dark-ft">
                        {item.responsible}
                      </span>
                    </div>

                    <div
                      className={`KPIs__graph__col px-[25px] py-[19px] flex items-center justify-center table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <Link href="/">
                        {<Image src={icons.graphSvg} alt="graph icon" />}
                      </Link>
                    </div>

                    <div
                      className={`KPIs__unit__col px-4 py-[17px] table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <span className="sb-caption-1">{item.unit}</span>
                    </div>

                    <div
                      className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                        {item.monthlyTarget.toLocaleString()}
                      </p>
                    </div>

                    <div
                      className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-purple-light-bg fp-blue-light-ft">
                        {item.monthlyActual.toLocaleString()}
                      </p>
                    </div>

                    <div
                      className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <p
                        className={`sb-caption-2 px-2 py-[3px] text-right rounded-md 
                      ${
                        item.monthPercentage < 25
                          ? 'fp-danger-bg fp-danger-dark-ft'
                          : 'fp-success-bg fp-success-dark-ft'
                      }`}
                      >
                        {item.monthPercentage + '%'}
                      </p>
                    </div>

                    <div
                      className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                        {item.ytdTarget.toLocaleString()}
                      </p>
                    </div>

                    <div
                      className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <select
                        className={`w-fit px-2 py-[3px] sb-caption-2 rounded-md ${
                          item.priority === 1
                            ? 'fp-danger-bg fp-danger-dark-ft'
                            : item.priority === 2
                              ? 'fp-warning-bg fp-warning-dark-ft'
                              : 'fp-success-bg fp-success-dark-ft'
                        }`}
                      >
                        <option value={item.priority}>
                          {item.priority === 1
                            ? 'High'
                            : item.priority === 2
                              ? 'Medium'
                              : 'Low'}
                        </option>
                      </select>
                    </div>

                    <div
                      className={`KPIs__common__col p-4 ${isLastRow ? '' : 'fp__border__b'}`}
                    >
                      <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                        {item.deviation.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  {expandedChildRows[item.key] && item.children && (
                    <div className="relative ml-[50px] KPIs__parent__of__child__KPIs">
                      {item.children.map((child) => (
                        <div key={child.key + '' + child.kpi} className="flex">
                          <div className="KPIs__child__kpi__col flex items-center table__item__border__right after:top-[21px]">
                            <div className="flex w-full justify-between py-[17px] px-4 items-center fp__border__b">
                              <p className="sb-caption-2 fp-blue-light-ft">
                                {child.kpi}
                              </p>
                              <button className="translate-y-[-25%] fp-purple-dark-ft">
                                <span>...</span>
                              </button>
                            </div>
                          </div>

                          <div className="KPIs__child__responsible__col px-4 py-[15px] flex items-center gap-2 fp__border__b table__item__border__right after:top-[21px]">
                            <Image
                              src={images.matildaImg}
                              alt="responsible person profile"
                              width={26}
                              height={26}
                            />
                            <span className="body-2 fp-purple-dark-ft">
                              {child.responsible}
                            </span>
                          </div>

                          <div className="KPIs__child__graph__col px-[25px] py-[19px] flex items-center justify-center fp__border__b table__item__border__right after:top-[21px]">
                            <Link href="/">
                              {<Image src={icons.graphSvg} alt="graph icon" />}
                            </Link>
                          </div>

                          <div className="KPIs__child__unit__col px-4 py-[17px] fp__border__b table__item__border__right after:top-[21px]">
                            <span className="sb-caption-1">{child.unit}</span>
                          </div>

                          <div className="KPIs__child__common__col p-4 table__item__border__right fp__border__b after:top-[21px]">
                            <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                              {child.monthlyTarget.toLocaleString()}
                            </p>
                          </div>

                          <div className="KPIs__child__common__col p-4 fp__border__b table__item__border__right after:top-[21px]">
                            <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-purple-light-bg fp-blue-light-ft">
                              {child.monthlyActual.toLocaleString()}
                            </p>
                          </div>

                          <div className="KPIs__child__common__col p-4 fp__border__b table__item__border__right after:top-[21px]">
                            <p
                              className={`sb-caption-2 px-2 py-[3px] text-right rounded-md 
                      ${
                        child.monthPercentage < 25
                          ? 'fp-danger-bg fp-danger-dark-ft'
                          : 'fp-success-bg fp-success-dark-ft'
                      }`}
                            >
                              {child.monthPercentage + '%'}
                            </p>
                          </div>

                          <div className="KPIs__child__common__col p-4 fp__border__b table__item__border__right after:top-[21px]">
                            <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                              {child.ytdTarget.toLocaleString()}
                            </p>
                          </div>

                          <div className="KPIs__child__common__col p-4 fp__border__b table__item__border__right after:top-[21px]">
                            <select
                              className={`w-fit px-2 py-[3px] sb-caption-2 rounded-md ${
                                child.priority === 1
                                  ? 'fp-danger-bg fp-danger-dark-ft'
                                  : child.priority === 2
                                    ? 'fp-warning-bg fp-warning-dark-ft'
                                    : 'fp-success-bg fp-success-dark-ft'
                              }`}
                            >
                              <option value={child.priority}>
                                {child.priority === 1
                                  ? 'High'
                                  : child.priority === 2
                                    ? 'Medium'
                                    : 'Low'}
                              </option>
                            </select>
                          </div>

                          <div className="KPIs__child__common__col fp__border__b p-4">
                            <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                              {child.deviation.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}
        <div className="px-4 py-[15px] mx-2 sm:mx-4 md:mx-6 mt-1 fp-bg rounded-lg flex gap-4">
          <button
            className="min-w-[18px]"
            onClick={handleWasteDisposalTableVisible}
          >
            <Image
              src={
                isWasteDisposalTableVisible
                  ? icons.tableDdUpSvg
                  : icons.tableDDSvg
              }
              alt="dropdown icon"
            />
          </button>
          <div className="flex items-center">
            <h6 className="heading-6 mr-2">Waste Disposal National</h6>
            <span className="fp-blue-light-ft fp-purple-light-bg py-[3px] px-2 sb-caption-2 rounded-md">
              {wasteDisposalData.length}
            </span>
          </div>
        </div>
        {isWasteDisposalTableVisible && (
          <div className="overflow-x-auto scrollbar-thin pb-4 mb-4 KPIs__plastic__data__table mx-2 sm:mx-4 md:mx-6">
            {/* header */}
            <div className="flex">
              <div className="KPIs__kpi__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                KPI
              </div>
              <div className="KPIs__responsible__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Responsible
              </div>
              <div className="KPIs__graph__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Graph
              </div>
              <div className="KPIs__unit__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Unit
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Monthly Target
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Monthly Actual
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Month, %
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                YTD Target
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b table__item__border__right after:top-[18px]">
                Priority
              </div>
              <div className="KPIs__common__col table__header__item fp__border__b">
                Deviation
              </div>
            </div>
            {wasteDisposalData.map((item, index) => {
              const isLastRow = index === wasteDisposalData.length - 1;
              return (
                <div key={item.key + '' + item.kpi} className="flex">
                  <div
                    className={`KPIs__kpi__col px-4 py-[17px] flex items-center gap-1 justify-between table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <p className="sb-caption-2 fp-blue-light-ft">{item.kpi}</p>
                    <button className="translate-y-[-25%] fp-purple-dark-ft">
                      <span>...</span>
                    </button>
                  </div>

                  <div
                    className={`KPIs__responsible__col px-4 py-[15px] flex items-center gap-2 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <Image
                      src={images.matildaImg}
                      alt="responsible person profile"
                      width={26}
                      height={26}
                    />
                    <span className="body-2 fp-purple-dark-ft">
                      {item.responsible}
                    </span>
                  </div>

                  <div
                    className={`KPIs__graph__col px-[25px] py-[19px] flex items-center justify-center table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <Link href="/">
                      {<Image src={icons.graphSvg} alt="graph icon" />}
                    </Link>
                  </div>

                  <div
                    className={`KPIs__unit__col px-4 py-[17px] table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <span className="sb-caption-1">{item.unit}</span>
                  </div>

                  <div
                    className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                      {item.monthlyTarget.toLocaleString()}
                    </p>
                  </div>

                  <div
                    className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-purple-light-bg fp-blue-light-ft">
                      {item.monthlyActual.toLocaleString()}
                    </p>
                  </div>

                  <div
                    className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <p
                      className={`sb-caption-2 px-2 py-[3px] text-right rounded-md 
                      ${
                        item.monthPercentage < 25
                          ? 'fp-danger-bg fp-danger-dark-ft'
                          : 'fp-success-bg fp-success-dark-ft'
                      }`}
                    >
                      {item.monthPercentage + '%'}
                    </p>
                  </div>

                  <div
                    className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                      {item.ytdTarget.toLocaleString()}
                    </p>
                  </div>

                  <div
                    className={`KPIs__common__col p-4 table__item__border__right after:top-[21px] ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <select
                      className={`w-fit px-2 py-[3px] sb-caption-2 rounded-md ${
                        item.priority === 1
                          ? 'fp-danger-bg fp-danger-dark-ft'
                          : item.priority === 2
                            ? 'fp-warning-bg fp-warning-dark-ft'
                            : 'fp-success-bg fp-success-dark-ft'
                      }`}
                    >
                      <option value={item.priority}>
                        {item.priority === 1
                          ? 'High'
                          : item.priority === 2
                            ? 'Medium'
                            : 'Low'}
                      </option>
                    </select>
                  </div>

                  <div
                    className={`KPIs__common__col p-4 ${isLastRow ? '' : 'fp__border__b'}`}
                  >
                    <p className="sb-caption-2 px-2 py-[3px] text-right rounded-md fp-bg fp-purple-dark-ft">
                      {item.deviation.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <ShowMore show={5} classNames="pt-2 sm:pt-4 mx-2 sm:mx-4 md:mx-6" />
      </div>
    </>
  );
};

export default KPIs;

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleFilled } from '@ant-design/icons';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import ShowMore from './ShowMore';
import InputReadOnly from '../elements/InputReadOnly';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import CustomDatePicker from '../elements/CustomDatePicker';

import { icons } from '@/assets/icons';

interface DataType {
  key: string;
  completed: boolean;
  task: {
    name: string;
    link?: string;
  };
  dueDate: string;
  timeRemaining: {
    time: number;
    unit: 'd' | 'hrs' | 'min';
  };
  priority: number;
}

const initialTasks: DataType[] = [
  {
    key: '1',
    completed: false,
    task: {
      name: 'Prepare Marketing Review March - 2022',
      link: '#',
    },
    dueDate: '01.01.2023',
    timeRemaining: {
      time: 28,
      unit: 'd',
    },
    priority: 1,
  },
  {
    key: '2',
    completed: false,
    task: {
      name: 'Meet desired customer deadline',
    },
    dueDate: '01.01.2023',
    timeRemaining: {
      time: -3,
      unit: 'd',
    },
    priority: 2,
  },
  {
    key: '3',
    completed: true,
    task: {
      name: 'Meet desired customer deadline',
    },
    dueDate: '01.01.2023',
    timeRemaining: {
      time: 2,
      unit: 'hrs',
    },
    priority: 1,
  },
  {
    key: '4',
    completed: true,
    task: {
      name: 'Meet desired customer deadline',
    },
    dueDate: '01.01.2023',
    timeRemaining: {
      time: 1,
      unit: 'd',
    },
    priority: 3,
  },
];

interface KPIDataType {
  key: string;
  type: 'main' | 'sub';
  parentKey?: string;
  kpi: {
    name: string;
    link?: string;
  };
  responsible: string;
  unit: string;
  monthlyTarget: number;
  monthlyActual: number;
  timeRemaining: {
    time: number;
    unit: 'd' | 'hrs' | 'min';
  };
  priority: number;
  notes?: string;
  lastUpdated: string;
}

const plasticsData: KPIDataType[] = [
  {
    key: '1',
    type: 'main',
    kpi: { name: 'Cost per Lead', link: '/kpi/cost-per-lead' },
    responsible: 'P. G.',
    unit: '€/#',
    monthlyTarget: 150,
    monthlyActual: 1583438,
    timeRemaining: { time: 2, unit: 'd' },
    priority: 1,
    notes: 'Performance exceeded expectations',
    lastUpdated: '2025-02-10',
  },
  {
    key: '2',
    type: 'sub',
    parentKey: '1',
    kpi: { name: 'Add Spent', link: '/kpi/add-spent' },
    responsible: 'P. G.',
    unit: '€',
    monthlyTarget: 150000,
    monthlyActual: -19849,
    timeRemaining: { time: 5, unit: 'hrs' },
    priority: 2,
    notes: 'Budget adjustments needed',
    lastUpdated: '2025-02-09',
  },
  {
    key: '3',
    type: 'sub',
    parentKey: '1',
    kpi: { name: 'Leads', link: '/kpi/leads' },
    responsible: 'P. G.',
    unit: '#',
    monthlyTarget: 1000,
    monthlyActual: -19849,
    timeRemaining: { time: 3, unit: 'd' },
    priority: 2,
    notes: 'Lead generation below target',
    lastUpdated: '2025-02-08',
  },
  {
    key: '4',
    type: 'main',
    kpi: { name: 'DB VI', link: '/kpi/db-vi' },
    responsible: 'P. G.',
    unit: '€',
    monthlyTarget: 74750,
    monthlyActual: -19849,
    timeRemaining: { time: 8, unit: 'hrs' },
    priority: 1,
    notes: 'Revenue drop due to market shifts',
    lastUpdated: '2025-02-07',
  },
  {
    key: '5',
    type: 'main',
    kpi: { name: 'Manufacturing Costs', link: '/kpi/manufacturing-costs' },
    responsible: 'P. G.',
    unit: '%',
    monthlyTarget: 3.22,
    monthlyActual: 13.08,
    timeRemaining: { time: 1, unit: 'd' },
    priority: 3,
    notes: 'Production efficiency improved',
    lastUpdated: '2025-02-06',
  },
  {
    key: '6',
    type: 'main',
    kpi: { name: 'DB VI Marge', link: '/kpi/db-vi-marge' },
    responsible: 'P. G.',
    unit: '%',
    monthlyTarget: 5,
    monthlyActual: -1.24,
    timeRemaining: { time: 6, unit: 'hrs' },
    priority: 2,
    notes: 'Margins affected by cost increase',
    lastUpdated: '2025-02-05',
  },
];

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

const Kpis: React.FC = () => {
  const [tasks, setTasks] = useState<DataType[]>(initialTasks);
  const [isTableVisible, setIsTableVisible] = useState<boolean>(true);

  const handleToggleTable = () => {
    setIsTableVisible((prev) => !prev);
  };

  const handleToggleCompletion = (key: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.key === key ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDtChange = () => {
    console.log('date changed');
  };

  return (
    <>
      <div
        className={`px-2 sm:px-4 md:px-6 py-2 md:py-4 flex flex-wrap gap-2 md:gap-6 justify-between items-center ${isTableVisible ? 'border-b border-fp' : ''}`}
      >
        <div className="flex gap-6 items-center">
          <h6 className="heading-6">KPIs</h6>
          <div className="flex gap-3 items-center m-caption-2">
            <div className="kpis__date__div">
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
                className="body-3 px-1.5 py-[3px] capitalize border border-fp rounded-lg"
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

      {isTableVisible && (
        <div className="mt-2 mx-2 sm:mx-4 md:mx-6 overflow-x-auto scrollbar-thin prioritized__task__table">
          {/* Header Row */}
          <div className="flex border-b border-fp">
            <div className="priorities__task__col table__header__item table__item__border__right after:top-[18px]">
              Task
            </div>
            <div className="priorities__dueDate__col table__header__item table__item__border__right after:top-[18px] flex gap-2.5">
              <span className="">Due Date</span>
              <button>
                <Image src={icons.filterSvg} alt="filter icon" />
              </button>
            </div>
            <div className="priorities__timeRemaining__col table__header__item table__item__border__right after:top-[18px]">
              Time Remaining
            </div>
            <div className="priorities__priority__col table__header__item flex gap-2.5">
              <span>Priority</span>
              <button>
                <Image src={icons.filterSvg} alt="filter icon" />
              </button>
            </div>
          </div>

          {/* Task Rows */}
          {tasks.map((item) => (
            <div key={item.key} className="flex border-b border-fp">
              <div className="priorities__task__col px-4 py-3 flex items-center gap-3 table__item__border__right after:top-[21px]">
                {item.completed ? (
                  <CheckCircleFilled
                    className="text-2xl fp-success-light-ft mr-[1px]"
                    onClick={() => handleToggleCompletion(item.key)}
                  />
                ) : (
                  <input
                    type="checkbox"
                    checked={item.completed}
                    className="w-[27px] h-6 appearance-none rounded-full border border-[var(--fp-bg)]"
                    onChange={() => handleToggleCompletion(item.key)}
                  />
                )}

                {item.task.link ? (
                  <Link href={`/${item.task.link}`} className="w-full">
                    <InputReadOnly
                      value={item.task.name}
                      classNames="fp-blue-light-ft underline underline-offset-4 body-2 w-full"
                    />
                  </Link>
                ) : (
                  <InputReadOnly
                    value={item.task.name}
                    classNames="body-2 w-full"
                  />
                )}
              </div>

              <div className="priorities__dueDate__col p-3 table__item__border__right after:top-[21px]">
                <CustomDatePicker
                  selectedDate={item.dueDate}
                  onDateChange={handleDtChange}
                  classNames="w-24"
                />
              </div>

              <div className="priorities__timeRemaining__col p-4 table__item__border__right after:top-[21px]">
                <div
                  className={`sb-caption-2 py-[3px] px-2 flex items-center gap-1 max-w-fit rounded-md 
                  ${item.timeRemaining.time < 0 ? 'fp-danger-bg fp-danger-dark-ft' : 'fp-bg fp-purple-dark-ft'}`}
                >
                  <Image
                    src={icons.clockSvg}
                    alt="clock"
                    className={`${item.timeRemaining.time < 0 ? 'red__clock' : ''}`}
                  />
                  {item.timeRemaining.time}
                  {item.timeRemaining.unit}
                </div>
              </div>

              <div className="priorities__priority__col p-4">
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
            </div>
          ))}
          <ShowMore show={5} classNames="pt-2" />
        </div>
      )}
    </>
  );
};

export default Kpis;

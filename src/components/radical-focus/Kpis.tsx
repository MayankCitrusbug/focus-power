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
  kpi: string;
  responsible: string;
  graph: string;
  unit: string;
  monthlyTarget: number;
  monthlyActual: number;
  monthPercentage: string;
  ytdTarget: number;
  priority: number;
  lastUpdated: string;
}

const plasticsData: KPIDataType[] = [
  {
    key: '1',
    type: 'main',
    kpi: 'Cost per Lead',
    responsible: 'P. G.',
    graph: '/graph/cost-per-lead',
    unit: '€/#',
    monthlyTarget: 150,
    monthlyActual: 1583438,
    monthPercentage: '107.21%',
    ytdTarget: 1476923.07,
    priority: 1,
    lastUpdated: '2025-02-10',
  },
  {
    key: '2',
    type: 'sub',
    parentKey: '1',
    kpi: 'Add Spent',
    responsible: 'P. G.',
    graph: '/graph/add-spent',
    unit: '€',
    monthlyTarget: 150000,
    monthlyActual: -19849,
    monthPercentage: '-26.55%',
    ytdTarget: 74750,
    priority: 2,
    lastUpdated: '2025-02-09',
  },
  {
    key: '3',
    type: 'sub',
    parentKey: '1',
    kpi: 'Leads',
    responsible: 'P. G.',
    graph: '/graph/leads',
    unit: '#',
    monthlyTarget: 1000,
    monthlyActual: -19849,
    monthPercentage: '-26.55%',
    ytdTarget: 74750,
    priority: 2,
    lastUpdated: '2025-02-08',
  },
  {
    key: '4',
    type: 'main',
    kpi: 'DB VI',
    responsible: 'P. G.',
    graph: '/graph/db-vi',
    unit: '€',
    monthlyTarget: 74750,
    monthlyActual: -19849,
    monthPercentage: '-26.55%',
    ytdTarget: 74750,
    priority: 1,
    lastUpdated: '2025-02-07',
  },
  {
    key: '5',
    type: 'main',
    kpi: 'Manufacturing Costs',
    responsible: 'P. G.',
    graph: '/graph/manufacturing-costs',
    unit: '%',
    monthlyTarget: 3.22,
    monthlyActual: 13.08,
    monthPercentage: '9.85%',
    ytdTarget: 3.22,
    priority: 3,
    lastUpdated: '2025-02-06',
  },
  {
    key: '6',
    type: 'main',
    kpi: 'DB VI Marge',
    responsible: 'P. G.',
    graph: '/graph/db-vi-marge',
    unit: '%',
    monthlyTarget: 5,
    monthlyActual: -1.24,
    monthPercentage: '-6.24%',
    ytdTarget: 5,
    priority: 2,
    lastUpdated: '2025-02-05',
  },
];

interface WasteDisposalDataType {
  key: string;
  kpi: string;
  responsible: string;
  graph: string;
  unit: string;
  monthlyTarget: number;
  monthlyActual: number;
  monthPercentage: string;
  ytdTarget: number;
  priority: number;
  lastUpdated: string;
}
const wasteDisposalData: WasteDisposalDataType[] = [
  {
    key: '1',
    kpi: 'Recycling Rate',
    responsible: 'A. B.',
    graph: '/graph/recycling-rate',
    unit: '%',
    monthlyTarget: 50,
    monthlyActual: 48,
    monthPercentage: '-4.00%',
    ytdTarget: 50,
    priority: 1,
    lastUpdated: '2025-02-10',
  },
  {
    key: '2',
    kpi: 'Landfill Usage',
    responsible: 'A. B.',
    graph: '/graph/landfill-usage',
    unit: 'tons',
    monthlyTarget: 5000,
    monthlyActual: 5200,
    monthPercentage: '4.00%',
    ytdTarget: 5000,
    priority: 2,
    lastUpdated: '2025-02-09',
  },
  {
    key: '3',
    kpi: 'Composting Rate',
    responsible: 'A. B.',
    graph: '/graph/composting-rate',
    unit: '%',
    monthlyTarget: 20,
    monthlyActual: 18,
    monthPercentage: '-10.00%',
    ytdTarget: 20,
    priority: 3,
    lastUpdated: '2025-02-08',
  },
  {
    key: '4',
    kpi: 'Hazardous Waste Processed',
    responsible: 'C. D.',
    graph: '/graph/hazardous-waste',
    unit: 'tons',
    monthlyTarget: 200,
    monthlyActual: 180,
    monthPercentage: '-10.00%',
    ytdTarget: 200,
    priority: 2,
    lastUpdated: '2025-02-07',
  },
  {
    key: '5',
    kpi: 'Plastic Waste Reduction',
    responsible: 'C. D.',
    graph: '/graph/plastic-waste-reduction',
    unit: '%',
    monthlyTarget: 10,
    monthlyActual: 12,
    monthPercentage: '20.00%',
    ytdTarget: 10,
    priority: 1,
    lastUpdated: '2025-02-06',
  },
  {
    key: '6',
    kpi: 'E-Waste Collected',
    responsible: 'E. F.',
    graph: '/graph/e-waste-collected',
    unit: 'tons',
    monthlyTarget: 300,
    monthlyActual: 280,
    monthPercentage: '-6.67%',
    ytdTarget: 300,
    priority: 3,
    lastUpdated: '2025-02-05',
  },
  {
    key: '7',
    kpi: 'Water Waste Reduction',
    responsible: 'E. F.',
    graph: '/graph/water-waste-reduction',
    unit: '%',
    monthlyTarget: 15,
    monthlyActual: 14,
    monthPercentage: '-6.67%',
    ytdTarget: 15,
    priority: 2,
    lastUpdated: '2025-02-04',
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
  const [isPlasticTableVisible, setIsPlasticTableVisible] =
    useState<boolean>(true);

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

      <div className="mt-6">
        <div className="px-4 py-[15px] mx-6 fp-bg rounded-lg">Plastic</div>
        {isPlasticTableVisible && (
          <div className="overflow-x-auto scrollbar-thin scroll-my-4 scroll-mx-6 KPIs__plastic__data__table">
            {/* header */}
            <div className="flex border-b border-fp">
              <div className="KPIs__kpi__col table__header__item table__item__border__right after:top-[18px]">
                KPI
              </div>
              <div className="KPIs__responsible__col table__header__item table__item__border__right after:top-[18px]">
                Responsible
              </div>
              <div className="KPIs__graph__col table__header__item table__item__border__right after:top-[18px]">
                Graph
              </div>
              <div className="KPIs__unit__col table__header__item table__item__border__right after:top-[18px]">
                Unit
              </div>
              <div className="KPIs__monthlyTarget__col table__header__item table__item__border__right after:top-[18px]">
                Monthly Target
              </div>
              <div className="KPIs__monthlyActual__col table__header__item table__item__border__right after:top-[18px]">
                Monthly Actual
              </div>
              <div className="KPIs__monthPercentage__col table__header__item table__item__border__right after:top-[18px]">
                Month, %
              </div>
              <div className="KPIs__YTDTarget__col table__header__item table__item__border__right after:top-[18px]">
                YTD Target
              </div>
              <div className="KPIs__priority__col table__header__item table__item__border__right after:top-[18px]">
                Priority
              </div>
              <div className="KPIs__lastUpdated__col table__header__item">
                Updated
              </div>
            </div>
          </div>
        )}
      </div>

      
    </>
  );
};

export default Kpis;

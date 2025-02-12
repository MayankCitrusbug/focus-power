'use client';
import React from 'react';
import Image from 'next/image';

import { icons } from '@/assets/icons';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import ShowMore from './ShowMore';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import CustomDatePicker from '../elements/CustomDatePicker';
import Link from 'next/link';

interface DataType {
  key: string;
  activity: string;
  link: string;
  history: string;
  cycle: string;
  deadline: string;
  timeRemaining: {
    time: number;
    unit: 'd' | 'hrs' | 'min';
  };
}

const initiatives: DataType[] = [
  {
    key: '1',
    activity: 'Weekly sales meeting',
    link: 'http://recurrring-activities',
    history: 'history',
    cycle: 'weekly',
    deadline: '01-01-2023',
    timeRemaining: {
      time: 28,
      unit: 'd',
    },
  },
  {
    key: '2',
    activity: 'Conduct shareholder meeting',
    link: 'http://recurrring-activities',
    history: 'history',
    cycle: 'monthly',
    deadline: '01-01-2023',
    timeRemaining: {
      time: -3,
      unit: 'd',
    },
  },
  {
    key: '3',
    activity: 'P&L analysis',
    link: 'http://recurrring-activities',
    history: 'history',
    cycle: 'monthly',
    deadline: '01-01-2023',
    timeRemaining: {
      time: 2,
      unit: 'hrs',
    },
  },
  {
    key: '4',
    activity: 'Product session',
    link: 'http://recurrring-activities',
    history: 'history',
    cycle: 'Quarterly',
    deadline: '01-01-2023',
    timeRemaining: {
      time: 1,
      unit: 'd',
    },
  },
];

const RecurringActivities: React.FC = () => {
  const handleClick = () => {
    console.log('add activity');
  };
  const handleEdit = (key: string) => {
    console.log('edit' + key);
  };
  const handleDelete = (key: string) => {
    console.log('delete' + key);
  };
  const handleDtChange = () => {
    console.log('date changed');
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Recurring Activity',
      dataIndex: 'activity',
      key: 'activity',
      render: (activity) => (
        <div>
          <span className="sb-caption-1 m-1">{activity}</span>
        </div>
      ),
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
      render: (link) => (
        <Link href={link}>
          <Image src={icons.linkSimpleSvg} alt="link icon" />
        </Link>
      ),
    },
    {
      title: 'Activity History',
      dataIndex: 'history',
      key: 'history',
      render: (history) => (
        <div className="relative m-2 group flex justify-center">
          <Image src={icons.detailsSvg} alt="link icon" />
          <p className="absolute hidden group-hover:block bg-slate-500 rounded-md p-0.5 -top-5 right-2 text-white show-more-ft">
            {history}
          </p>
        </div>
      ),
    },
    {
      title: 'Cycle',
      dataIndex: 'cycle',
      key: 'cycle',
      render: (cycle) => <span className="capitalize">{cycle}</span>,
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
      render: (deadline) => (
        <CustomDatePicker
          selectedDate={deadline}
          onDateChange={handleDtChange}
          classNames="w-24"
        />
      ),
    },
    {
      title: 'Time Remaining',
      dataIndex: 'timeRemaining',
      key: 'timeRemaining',
      render: (time) => (
        <div
          className={`sb-caption-2 py-[3px] px-2 flex items-center gap-1 max-w-fit rounded-md 
                ${time.time < 0 ? 'fp-danger-bg fp-danger-dark-ft' : 'fp-bg fp-purple-dark-ft'}`}
        >
          <Image
            src={icons.clockSvg}
            alt="clock"
            className={`${time.time < 0 ? 'red__clock' : ''}`}
          />
          {time.time}
          {time.unit}
        </div>
      ),
    },
    {
      dataIndex: 'key',
      key: 'key',
      render: (key) => (
        <div className="flex items-center gap-4 px-1 py-2">
          <button onClick={() => handleEdit(key)}>
            <Image src={icons.notePencilSvg} alt="edit icon" />
          </button>
          <button onClick={() => handleDelete(key)}>
            <Image src={icons.trashBinSvg} alt="delete icon" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div
      className="fp-white-bg rounded-xl overflow-hidden"
      id="recurring-activities"
    >
      <div className="px-6 py-4 flex justify-between items-center border-b border-[(--fp-purple-light)]">
        <h6 className="heading-6">Recurring Activities</h6>
          <PrimaryIconBtn
            icon={icons.plusSvg}
            alt="add icon"
            text="Add Activity"
            onClick={handleClick}
          />
      </div>
      <Table<DataType>
        pagination={{ hideOnSinglePage: true }}
        columns={columns}
        dataSource={initiatives}
      />
      <ShowMore show={5} classNames="pt-4" />
    </div>
  );
};

export default RecurringActivities;

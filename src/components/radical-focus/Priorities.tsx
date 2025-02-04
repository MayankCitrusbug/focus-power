'use client';
import React from 'react';
import { icons } from '@/assets/icons';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import ShowMore from './ShowMore';
import InputReadOnly from '../elements/InputReadOnly';
import CustomDatePicker from '../elements/CustomDatePicker';

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

const tasks: DataType[] = [
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

const Priorities: React.FC = () => {
  const handleClick = () => {
    console.log('radial focus setting');
  };
  const onChange = () => {
    console.log('completed');
  };
  const handleDtChange = () => {
    console.log('date changed');
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      render: (task, record) => (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={record.completed}
            className="w-6 h-6"
            onChange={onChange}
          />
          {task.link ? (
            <Link href={`/${task.link}`} className="w-full">
              <InputReadOnly
                value={task.name}
                classNames="fp-blue-light-ft underline underline-offset-4 body-2 w-full"
              />
            </Link>
          ) : (
            <InputReadOnly value={task.name} classNames="body-2 w-full" />
          )}
        </div>
      ),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (dueDate) => (
        <CustomDatePicker
          selectedDate={dueDate}
          onDateChange={handleDtChange}
          classNames="w-30"
        />
      ),
    },
    {
      title: <div className="flex items-center gap-1">Time Remaining</div>,
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
            className={`${time.time < 0 ? 'red-clock' : ''}`}
          />
          {time.time}
          {time.unit}
        </div>
      ),
    },
    {
      title: <div className="flex items-center gap-1">Priority</div>,
      dataIndex: 'priority',
      key: 'priority',
      render: (priority) => {
        if (priority == 1) {
          return (
            <select className="w-fit px-2 py-[3px] sb-caption-2 rounded-md fp-danger-bg fp-danger-dark-ft">
              <option value="1">High</option>
            </select>
          );
        } else if (priority === 2) {
          return (
            <select className="w-fit px-2 py-[3px] sb-caption-2 rounded-md fp-warning-bg fp-warning-dark-ft">
              <option value="2">Medium</option>
            </select>
          );
        } else {
          return (
            <select className="w-fit px-2 py-[3px] sb-caption-2 rounded-md fp-success-bg fp-success-dark-ft">
              <option value="3">Low</option>
            </select>
          );
        }
      },
    },
  ];

  return (
    <div className="fp-white-bg rounded-xl overflow-hidden" id="priorities">
      <div className="px-6 py-4 flex justify-between items-center border-b border-[(--fp-purple-light)]">
        <h6 className="heading-6">Prioritized Tasks</h6>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input
              className="w-[18px] h-[18px]"
              type="checkbox"
              onChange={onChange}
            />
            <span className="sb-caption-2 fp-purple-dark-ft">
              Show Completed
            </span>
          </div>
          <PrimaryIconBtn
            icon={icons.plusSvg}
            alt="add icon"
            text="Add Task"
            onClick={handleClick}
          />
        </div>
      </div>
      <Table<DataType>
        pagination={{ hideOnSinglePage: true }}
        columns={columns}
        dataSource={tasks}
      />
      <ShowMore show={5} classNames="pt-2" />
    </div>
  );
};

export default Priorities;

'use client';
import React from 'react';
import Image from 'next/image';

import { images } from '@/assets/images';
import { icons } from '@/assets/icons';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import ShowMore from './ShowMore';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import CustomSlider from '../elements/CustomSlider';
import CustomDatePicker from '../elements/CustomDatePicker';

interface DataType {
  key: string;
  initiativeName: string;
  actions: string;
  status: number;
  responsible: {
    name: string;
    image: string;
  };
  deadline: string;
  progress: number;
  priority: number;
}

const initiatives: DataType[] = [
  {
    key: '1',
    initiativeName: 'Process',
    actions: 'info',
    status: 1,
    responsible: {
      name: 'Paola Gibsons',
      image: 'matilda.png',
    },
    deadline: '29-11-2023',
    progress: 25,
    priority: 1,
  },
  {
    key: '2',
    initiativeName: '2nd Process',
    actions: 'info',
    status: 2,
    responsible: {
      name: 'Paola Gibsons',
      image: 'matilda.png',
    },
    deadline: '29-11-2023',
    progress: 25,
    priority: 1,
  },
];

const Initiatives: React.FC = () => {
  const handleClick = () => {
    console.log('radial focus setting');
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
      title: 'Initiative Name',
      dataIndex: 'initiativeName',
      key: 'initiativeName',
      render: (initiativeName) => (
        <span className="sb-caption-1 m-1">{initiativeName}</span>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (actions) => (
        <div className="relative m-2 group flex justify-center">
          <Image src={icons.detailsSvg} alt="info icon" />
          <p className="absolute hidden group-hover:block bg-slate-500 rounded-md p-0.5 -top-5 right-2 text-white show-more-ft">
            {actions}
          </p>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        if (status == 1) {
          return (
            <select className="w-fit sb-caption-2 rounded-md fp-success-bg fp-success-dark-ft">
              <option value="1">Active</option>
            </select>
          );
        } else if (status === 2) {
          return (
            <select className="w-fit sb-caption-2 rounded-md fp-danger-bg fp-danger-dark-ft">
              <option value="2">Inactive</option>
            </select>
          );
        }
      },
    },
    {
      title: 'Responsible',
      dataIndex: 'responsible',
      key: 'responsible',
      render(_, { responsible }) {
        return (
          <div className="flex items-center  px-1 gap-2 body-2 fp-purple-dark-ft">
            <Image
              src={images.matildaImg}
              width={26}
              height={26}
              alt="Person Image"
            />
            {responsible.name}
          </div>
        );
      },
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
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (_, { progress }) => {
        return <CustomSlider initialProgress={progress} />;
      },
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority) => {
        if (priority == 1) {
          return (
            <select className="w-fit m-1 sb-caption-2 rounded-md fp-danger-bg fp-danger-dark-ft">
              <option value="1">High</option>
            </select>
          );
        } else if (priority === 2) {
          return (
            <select className="w-fit m-1 sb-caption-2 rounded-md fp-warning-bg fp-warning-dark-ft">
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
    <div className="fp-white-bg rounded-xl overflow-hidden" id="initiatives">
      <div className="px-6 py-4 flex justify-between items-center border-b border-[(--fp-purple-light)]">
        <h6 className="heading-6">Initiatives</h6>
          <PrimaryIconBtn
            icon={icons.plusSvg}
            alt="add icon"
            text="Add Initiative"
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

export default Initiatives;

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

interface DataType {
  key: string;
  initiativeName: string;
  actions: string;
  status: number;
  responsible: {
    name: string;
    // image: string;
  };
  deadLine: string;
  progress: number;
  priority: number;
}

const initiatives: DataType[] = [
  {
    key: '1',
    initiativeName: 'Process',
    actions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit eius magnam animi. Ut, vel.',
    status: 1,
    responsible: {
      name: 'Paola Gibsons',
    //   image: images.matildaImg,
    },
    deadLine: '29.11.2023',
    progress: 25,
    priority: 1,
  },
  {
    key: '2',
    initiativeName: '2nd Process',
    actions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit eius magnam animi. Ut, vel.',
    status: 2,
    responsible: {
      name: 'Paola Gibsons',
    //   image: images.matildaImg,
    },
    deadLine: '29.11.2023',
    progress: 25,
    priority: 1,
  },
];

const Initiatives: React.FC = () => {
  const handleClick = () => {
    console.log('radial focus setting');
  };
  const onChange = () => {
    console.log('completed');
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Initiative Name',
      dataIndex: 'initiativeName',
      key: 'initiativeName',
    //   render: (task, record) => (
    //     <div className="flex items-center gap-3">
    //       <input type="checkbox" checked={record.completed} className='w-6 h-6' onChange={onChange} />
    //       {task.link ? (
    //         <Link href={`/${task.link}`} className="w-full">
    //           <InputReadOnly value={task.name} classNames='fp-blue-light-ft underline underline-offset-4 body-2 w-full' />
    //         </Link>
    //       ) : (
    //         <InputReadOnly value={task.name} classNames='body-2 w-full' />
    //       )}
    //     </div>
    //   ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <Image src={icons.detailsSvg} alt='info icon' />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        if (status == 1) {
          return (
            <select className='w-fit px-2 py-[3px] sb-caption-2 rounded-md fp-success-bg fp-success-dark-ft'>
              <option value="1">Active</option>
            </select>
          );
        } else if (status === 2) {
          return (
            <select className='w-fit px-2 py-[3px] sb-caption-2 rounded-md fp-danger-bg fp-danger-dark-ft'>
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
            <select className='w-fit px-2 py-[3px] sb-caption-2 rounded-md fp-danger-bg fp-danger-dark-ft'>
              <option value="1">High</option>
            </select>
          );
        } else if (priority === 2) {
          return (
            <select className='w-fit px-2 py-[3px] sb-caption-2 rounded-md fp-warning-bg fp-warning-dark-ft'>
              <option value="2">Medium</option>
            </select>
          ); 
        } else {
          return (
            <select className='w-fit px-2 py-[3px] sb-caption-2 rounded-md fp-success-bg fp-success-dark-ft'>
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
        <h6 className="heading-6">Initiatives</h6>
        <div className="">
          <PrimaryIconBtn
            icon={icons.plusSvg}
            alt="add icon"
            text="Add Initiative"
            onClick={handleClick}
          />
        </div>
      </div>
      <Table<DataType>
        pagination={{ hideOnSinglePage: true }}
        columns={columns}
        dataSource={initiatives}
      />
      <ShowMore />
    </div>
  );
};

export default Initiatives;

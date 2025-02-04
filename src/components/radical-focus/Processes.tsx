'use client';
import React from 'react';
import Image from 'next/image';

import { images } from '@/assets/images';
import { icons } from '@/assets/icons';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import ShowMore from './ShowMore';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import Link from 'next/link';

interface DataType {
  key: string;
  processName: string;
  responsible: string;
  division: string;
  output: string;
  rrMatrix: string;
  flowchart: string;
  status: 'supported' | 'aligned' | 'not-defined';
}

const initiatives: DataType[] = [
  {
    key: '1',
    processName: 'Offer process',
    responsible: 'matilda',
    division: 'transport',
    output: 'Offer',
    rrMatrix: 'http://rr-matrix',
    flowchart: 'http://flow-chart',
    status: 'supported',
  },
  {
    key: '2',
    processName: 'Delivery process',
    responsible: 'matilda',
    division: 'transport',
    output: 'delivered goods',
    rrMatrix: 'http://rr-matrix',
    flowchart: 'http://flow-chart',
    status: 'aligned',
  },
  {
    key: '3',
    processName: 'Offer process special',
    responsible: 'matilda',
    division: 'transport',
    output: 'Offer',
    rrMatrix: 'http://rr-matrix',
    flowchart: 'http://flow-chart',
    status: 'not-defined',
  },
];

const Processes: React.FC = () => {
  const handleClick = () => {
    console.log('add process');
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
      title: 'Process Name',
      dataIndex: 'processName',
      key: 'processName',
      render: (activity) => (
        <span className="sb-caption-1 m-1">{activity}</span>
      ),
    },
    {
      title: 'Division',
      dataIndex: 'division',
      key: 'division',
      render: (division) => (
        <span className="body-2 capitalize">{division}</span>
      ),
    },
    {
      title: 'Output',
      dataIndex: 'output',
      key: 'output',
      render: (output) => <span className="body-2 capitalize">{output}</span>,
    },
    {
      title: 'RR Matrix',
      dataIndex: 'rrMatrix',
      key: 'rrMatrix',
      render: (rrMatrix) => (
        <Link href={rrMatrix}>
          <Image src={icons.linkSimpleSvg} alt="link icon" />
        </Link>
      ),
    },
    {
      title: 'Flowchart',
      dataIndex: 'flowchart',
      key: 'flowchart',
      render: (flowchart) => (
        <Link href={flowchart}>
          <Image src={icons.linkSimpleSvg} alt="link icon" />
        </Link>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <select className={`w-fit px-2 py-[3px] sb-caption-2 rounded-md`}>
          <option value="supported">IT Supported</option>
          <option value="aligned">Aligned</option>
          <option value="not-defined">Not Defined</option>
        </select>
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
    <div className="fp-white-bg rounded-xl overflow-hidden" id="processes">
      <div className="px-6 py-4 flex justify-between items-center border-b border-[(--fp-purple-light)]">
        <h6 className="heading-6">Processes</h6>
        <PrimaryIconBtn
          icon={icons.plusSvg}
          alt="add icon"
          text="Add Process"
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

export default Processes;

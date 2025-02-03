'use client';
import { icons } from '@/assets/icons';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import PrimaryBtn from '../elements/PrimaryBtn';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import CustomSlider from '../elements/CustomSlider';
import ShowMore from './ShowMore';
import InputReadOnly from '../elements/InputReadOnly';

type ObjectiveType = {
  text: string;
  selected: boolean;
};

interface DataType {
  key: string;
  objectiveType: string;
  division: string;
  description: string;
  dueDate: string;
  progress: number;
  conditions: string[];
}
type ExpandableConfig<T extends object> = TableProps<T>['expandable'];
const expandable: ExpandableConfig<DataType> = {
  expandedRowRender: (record) => (
    <div className="p-4 bg-gray-100 rounded-md">
      <p>
        <strong>Division:</strong> {record.division}
      </p>
      <p>
        <strong>Description:</strong> {record.description}
      </p>
      <p>
        <strong>Due Date:</strong> {record.dueDate}
      </p>
      <CustomSlider initialProgress={record.progress} />
    </div>
  ),
  rowExpandable: (record) => !!record.conditions,
};

const Objectives: React.FC = () => {
  const handleClick = () => {
    console.log('radial focus setting');
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
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
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
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
      conditions: ['We have expanded into regionZ', 'Revenue has grown by 20%'],
    },
    {
      key: '3',
      objectiveType: 'division',
      division: 'Sales',
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
      conditions: ['We have expanded into regionZ', 'Revenue has grown by 20%'],
    },
  ];

  const columns: TableProps<DataType>['columns'] = [
    // Table.EXPAND_COLUMN,
    {
      title: 'Objective Type',
      dataIndex: 'objectiveType',

      key: 'objectiveType',
      render: (_, record) =>
        record.objectiveType === 'company' ? (
          <span className="sb-caption-1 fp-success-bg fp-success-dark-ft px-2.5 py-[5px] rounded-lg">
            {(Table.EXPAND_COLUMN = true)}
            Company
          </span>
        ) : record.objectiveType === 'division' ? (
          <span className="sb-caption-1 fp-warning-bg fp-warning-dark-ft px-2.5 py-[5px] rounded-lg">
            Division
          </span>
        ) : (
          <span className="sb-caption-1 fp-danger-bg fp-danger-dark-ft px-2.5 py-[5px] rounded-lg">
            Individual
          </span>
        ),
    },
    {
      title: 'Division',
      dataIndex: 'division',
      key: 'division',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (description) => (
        <textarea readOnly value={description} className='py-[5px] px-2.5 border border-[var(--fp-bg)] body-2 rounded-lg w-full fp-purple-dark-ft ' />
      ),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (dueDate) => (
        <InputReadOnly value={dueDate} classNames='w-24 fp-purple-dark-ft' />
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
  ];

  return (
    <div className="fp-white-bg rounded-xl overflow-hidden" id="objectives">
      <div className="px-6 py-4 flex justify-between items-center border-b border-[(--fp-purple-light)]">
        <h6 className="heading-6">Objectives</h6>
        <div className="flex gap-6">
          <div className="flex">
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
          <div className="flex ">
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
      <Table<DataType>
        // expandable={expandable}
        pagination={{ hideOnSinglePage: true }}
        columns={columns}
        dataSource={data}
      />
      <ShowMore />
    </div>
  );
};

export default Objectives;

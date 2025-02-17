'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleFilled } from '@ant-design/icons';

import ShowMore from './ShowMore';
import InputReadOnly from '../elements/InputReadOnly';
import PrimaryIconBtn from '../elements/PrimaryIconBtn';
import CustomDatePicker from '../elements/CustomDatePicker';

import { prioritizedDataArr } from '@/utils/helper';

import { PrioritizedDataType } from '@/types';
import { icons } from '@/assets/icons';

const initialTasks = prioritizedDataArr();

const Priorities: React.FC = () => {
  const [tasks, setTasks] = useState<PrioritizedDataType[]>(initialTasks);
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
        <div className="flex gap-4">
          <button className="min-w-[18px]" onClick={handleToggleTable}>
            <Image
              src={isTableVisible ? icons.tableDdUpSvg : icons.tableDDSvg}
              alt="dropdown icon"
            />
          </button>
          <h6 className="heading-6">Prioritized Tasks</h6>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-between md:w-fit w-full">
          <div className="flex items-center gap-2">
            <input
              className="w-[18px] h-[18px]"
              type="checkbox"
              onChange={() => console.log('Show completed')}
            />
            <span className="sb-caption-2 fp-purple-dark-ft">
              Show Completed
            </span>
          </div>
          <PrimaryIconBtn
            icon={icons.plusSvg}
            alt="add icon"
            text="Add Task"
            onClick={() => console.log('Add task clicked')}
          />
        </div>
      </div>

      {isTableVisible && (
        <div className="mt-2 mx-2 sm:mx-4 md:mx-6 overflow-x-auto scrollbar-thin prioritized__task__table">
          {/* Header Row */}
          <div className="flex">
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
            <div key={item.key} className="flex">
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

export default Priorities;

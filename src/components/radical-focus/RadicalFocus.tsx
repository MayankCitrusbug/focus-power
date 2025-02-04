'use client';
import { useState } from 'react';
import RadicalFocusHeader from './RadicalFocusHeader';
import Objectives from './Objective';
import Priorities from './Priorities';
import Initiatives from './Initiatives';
import RecurringActivities from './RecurringActivities';
import Processes from './Processes';

const RadicalFocus: React.FC = () => {
  const [rfSelectedOpt, setRfSelectedOpt] = useState('objectives');
  const radicalFocusItems = [
    {
      key: 'objectives',
      label: 'Objectives',
    },
    {
      key: 'priorities',
      label: 'Priorities',
    },
    {
      key: 'kpis',
      label: 'KPIs',
    },
    {
      key: 'initiatives',
      label: 'Initiatives',
    },
    {
      key: 'recurring-activities',
      label: 'Recurring Activities',
    },
    {
      key: 'management-meetings',
      label: 'Management Meetings',
    },
    {
      key: 'processes',
      label: 'Processes',
    },
    {
      key: 'feedback',
      label: 'Feedback',
    },
  ];

  return (
    <>
      <RadicalFocusHeader />
      <div className="pt-2 pb-[14px] px-10">
        <ul className="flex border-b-2 border-[var(--fp-purple-light)]">
          {radicalFocusItems.map((item) => (
            <li
              className={`p-3 sb-caption-3 cursor-pointer ${
                rfSelectedOpt == item.key
                  ? 'fp-blue-light-ft -mb-[2px] border-b-2 border-[var(--fp-blue-light)]'
                  : 'fp-purple-dark-ft'
              }`}
              key={item.key}
              onClick={() => setRfSelectedOpt(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className='radical-focus-container'>
        <div className="py-3 px-10 flex flex-col gap-6">
          <Objectives />
          <Priorities />
          <Initiatives />
          <RecurringActivities />
          <Processes />
        </div>
      </div>
    </>
  );
};

export default RadicalFocus;

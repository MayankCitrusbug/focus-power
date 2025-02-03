'use client';
import { useState } from 'react';
import RadicalFocusHeader from "./RadicalFocusHeader";
import Objectives from './Objective';
import Priorities from './Priorities';
import Initiatives from './Initiatives';

const RadicalFocus: React.FC = () => {
  const [rfSelectedOpt, setRfSelectedOpt] = useState('obj');
  const radicalFocusItems = [
    {
      key: 'obj',
      label: 'Objectives',
    },
    {
      key: 'pri',
      label: 'Priorities',
    },
    {
      key: 'kpi',
      label: 'KPIs',
    },
    {
      key: 'int',
      label: 'Initiatives',
    },
    {
      key: 'rec-act',
      label: 'Recurring Activities',
    },
    {
      key: 'manage-mt',
      label: 'Management Meetings',
    },
    {
      key: 'proc',
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
      <div className="pt-2 pb-[14px]">
        <ul className="flex border-b-2 border-[var(--fp-purple-light)]">
          {radicalFocusItems.map((item) => (
            <li
              className={`p-3 sb-caption-3 cursor-pointer ${
                rfSelectedOpt == item.key
                  ? "fp-blue-light-ft -mb-[2px] border-b-2 border-[var(--fp-blue-light)]"
                  : "fp-purple-dark-ft"
              }`}
              key={item.key}
              onClick={() => setRfSelectedOpt(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className='py-3 flex flex-col gap-6'>
        <Objectives />
        <Priorities />
        <Initiatives />
      </div>
    </>
  );
}

export default RadicalFocus;

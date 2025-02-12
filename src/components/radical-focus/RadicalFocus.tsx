'use client';
import { useState } from 'react';

import RadicalFocusHeader from './RadicalFocusHeader';
import Objectives from './Objective';
import Priorities from './Priorities';
import Initiatives from './Initiatives';
import RecurringActivities from './RecurringActivities';
import Processes from './Processes';

import '../../styles/radical-focus/radical-focus.css';

const RadicalFocus: React.FC = () => {
  const [rfSelectedOpt, setRfSelectedOpt] = useState('objectives');

  const radicalFocusItems = [
    { key: 'objectives', label: 'Objectives' },
    { key: 'priorities', label: 'Priorities' },
    { key: 'kpis', label: 'KPIs' },
    { key: 'initiatives', label: 'Initiatives' },
    { key: 'recurring-activities', label: 'Recurring Activities' },
    { key: 'management-meetings', label: 'Management Meetings' },
    { key: 'processes', label: 'Processes' },
    { key: 'feedback', label: 'Feedback' },
  ];

  const handleScrollToSection = (key: string) => {
    setRfSelectedOpt(key);

    // Scroll to the selected section
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <RadicalFocusHeader />
      <div className="pt-2 pb-[14px] px-10">
        <ul className="flex border-b-2 border-fp overflow-x-auto ">
          {radicalFocusItems.map((item) => (
            <li
              key={item.key}
              className={`p-3 sb-caption-3 flex-shrink-0 cursor-pointer ${
                rfSelectedOpt === item.key
                  ? 'fp-blue-light-ft radical-menu-active-item'
                  : 'fp-purple-dark-ft'
              }`}
              onClick={() => handleScrollToSection(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="radicalFocus__container">
        <div className="my-3 mx-10 flex flex-col gap-6">
          <div id="objectives" className="fp-white-bg rounded-xl">
            <Objectives />
          </div>
          <div id="priorities" className="fp-white-bg rounded-xl">
            <Priorities />
          </div>
        </div>
      </div>
    </>
  );
};

export default RadicalFocus;

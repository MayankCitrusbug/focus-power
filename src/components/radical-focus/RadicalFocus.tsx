'use client';
import { useState } from 'react';

import RadicalFocusHeader from './RadicalFocusHeader';
import Objectives from './Objective';
import Priorities from './Priorities';
import Initiatives from './Initiatives';
import RecurringActivities from './RecurringActivities';
import Processes from './Processes';

import '../../styles/radical-focus/radical-focus.css';
import KPIs from './Kpis';

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

      {/* menu bar */}
      <div className="pt-2 pb-2 md:pb-[14px] px-3 sm:px-5 md:px-7 xl:px-10">
        <ul className="flex border-b-2 border-fp relative z-2 overflow-x-auto scrollbar-thin">
          {radicalFocusItems.map((item) => (
            <li
              key={item.key}
              className={`p-2 sm:p-3 sb-caption-3 flex-shrink-0 cursor-pointer ${
                rfSelectedOpt === item.key
                  ? 'fp-blue-light-ft radical__menu__active__item'
                  : 'fp-purple-dark-ft'
              }`}
              onClick={() => handleScrollToSection(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* tables */}
      <div className="radicalFocus__container scrollbar-thin">
        <div className="my-3 mx-3 sm:mx-5 md:mx-7 xl:mx-10 flex flex-col gap-2 sm:gap:4 md:gap-6">
          <div id="objectives" className="fp-white-bg rounded-xl">
            <Objectives />
          </div>
          <div id="priorities" className="fp-white-bg rounded-xl">
            <Priorities />
          </div>
          <div id="kpis" className="fp-white-bg rounded-xl">
            <KPIs />
          </div>
        </div>
      </div>
    </>
  );
};

export default RadicalFocus;

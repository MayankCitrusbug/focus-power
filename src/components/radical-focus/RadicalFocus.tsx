'use client';
import { useState } from 'react';

import RadicalFocusHeader from './RadicalFocusHeader';
import Objectives from './Objective';
import Priorities from './Priorities';
import Initiatives from './Initiatives';
import RecurringActivities from './RecurringActivities';
import Processes from './Processes';

import '../../styles/radical-focus/radical-focus.css'

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
        <ul className="flex border-b-2 border-[var(--fp-purple-light)]">
          {radicalFocusItems.map((item) => (
            <li
              className={`p-3 sb-caption-3 cursor-pointer ${
                rfSelectedOpt === item.key
                  ? 'fp-blue-light-ft -mb-[2px] border-b-2 border-[var(--fp-blue-light)]'
                  : 'fp-purple-dark-ft'
              }`}
              key={item.key}
              onClick={() => handleScrollToSection(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      
      <div className='radical-focus-container'>
        <div className="my-3 mx-10 flex flex-col">
          <div id="objectives" className='fp-white-bg rounded-xl overflow-hidden'>
            <Objectives />
          </div>
          <div id="priorities" className='h-[600px]'>Priorities</div>
          <div id="kpis" className='h-[600px]'>KPIs</div>
          <div id="initiatives" className='h-[600px]'>Initiatives</div>
          <div id="recurring-activities" className='h-[600px]'>Recurring Activities</div>
          <div id="management-meetings" className='h-[600px]'>Management Meetings</div>
          <div id="processes" className='h-[600px]'>Processes</div>
          <div id="feedback" className='h-[600px]'>Feedback</div>
        </div>
      </div>
    </>
  );
};

export default RadicalFocus;

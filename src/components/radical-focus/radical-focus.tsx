"use client";
import { useState } from "react";

function RadicalFocus() {
  const [rfSelectedOpt, setRfSelectedOpt] = useState("obj");
  const radicalFocusItems = [
    {
      key: "obj",
      label: "Objectives",
    },
    {
      key: "pri",
      label: "Priorities",
    },
    {
      key: "kpi",
      label: "KPIs",
    },
    {
      key: "int",
      label: "Initiatives",
    },
    {
      key: "rec-act",
      label: "Recurring Activities",
    },
    {
      key: "manage-mt",
      label: "Management Meetings",
    },
    {
      key: "proc",
      label: "Processes",
    },
    {
      key: "feedback",
      label: "Feedback",
    },
  ];

  return (
    <div>
      <div className="flex justify-between pt-10 pb-2">
        <h4 className="heading-4">My Radical Focus</h4>
        <button className="sb-caption-2 fp-purple-light-bg fp-blue-light-ft py-1.5 px-2 rounded-md">
          Radical Focus Settings
        </button>
      </div>
      <div className="pt-2 pb-[14px]">
        <ul className="flex border-b-2 border-[var(--fp-purple-light)]">
          {radicalFocusItems.map((item) => (
            <li
              className={`p-3 sb-caption-3 cursor-pointer ${
                rfSelectedOpt == item.key
                  ? "fp-blue-light-ft -mb-[2px] border-b-2 border-[var(--fp-blue-light)]"
                  : ""
              }`}
              key={item.key}
              onClick={() => setRfSelectedOpt(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RadicalFocus;

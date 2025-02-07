'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PlusOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import type { MenuProps } from 'antd';

import { icons } from '@/assets/icons';
import { images } from '@/assets/images';
import '../styles/sidebar/sidebar.css'

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

interface MenuAction {
  btnText: string;
  onClick: () => void;
}

interface MenuFooter {
  content: React.ReactNode;
}

interface MenuContent {
  title: string;
  infoText?: string;
  reports: (string | { label: string; children: string[] })[];
  action?: MenuAction;
  footer?: MenuFooter;
}

function getItem(
  label: React.ReactNode,
  key?: React.Key,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    children,
    label,
  } as MenuItem;
}

const Aside: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('radical-focus');

  const asideItems = [
    {
      key: 'radical-focus',
      icon: icons.apertureSvg,
    },
    {
      key: 'mountain',
      icon: icons.mountainsSvg,
    },
    {
      key: 'user-switch',
      icon: icons.userSwitchSvg,
    },
    { key: 'hexagon', icon: icons.hexagonSvg },
    {
      key: 'four-users',
      icon: icons.fourUsersSvg,
    },
    {
      key: 'pie-chart-slice',
      icon: icons.pieChartSliceSvg,
    },
    {
      key: 'rocket-launch',
      icon: icons.rocketLaunchSvg,
    },
    {
      key: 'line-segment',
      icon: icons.lineSegmentsSvg,
    },
  ];

  const menuContent: Record<string, MenuContent> = {
    'radical-focus': {
      title: 'Radical Focus',
      infoText: 'Direct Reports',
      reports: [
        'My Radical Focus',
        { label: 'Jennifer Mayer CSO', children: ['Tom', 'Bill', 'Alex'] },
        'John Hancock CPO',
        { label: 'Johny Cash CFO', children: ['Tom', 'Bill', 'Alex'] },
        { label: 'Manfred Muller COO', children: ['Tom', 'Bill', 'Alex'] },
      ],
      action: {
        btnText: 'Add Direct Report',
        onClick: () => console.log('Clicked!'),
      },
      footer: {
        content: (
          <div className="flex flex-col items-center pt-6 pb-8">
            <Image
              src={images.applyRadicalFocusImg}
              width={162}
              height={158}
              alt="apply radical focus"
            />
            <div className="mt-4 px-6 text-center">
              <p className="sb-caption-1"> Apply Radical Focus</p>
              <p className="pt-2 body-2">
                Track objectives, define priorities <br /> and update KPIs &
                initiatives
              </p>
            </div>
          </div>
        ),
      },
    },
    mountain: {
      title: 'Mountain',
      infoText: 'Mount',
      reports: ['Everest Goals', 'Summit Reports', 'Climbing Strategy'],
    },
  };

  const items: MenuItem[] = [
    ...menuContent[selectedKey].reports.map((menuItem, index) =>
      typeof menuItem === 'string'
        ? getItem(menuItem, `report-${index}`)
        : getItem(
            menuItem.label,
            `sub-${index}`,
            menuItem.children.map((child, childIndex) =>
              getItem(child, `sub-${index}-child-${childIndex}`)
            )
          )
    ),
  ];

  return (
    <div className="flex h-dvh">
      <div>
        <Link
          className="flex p-4 border-b border-[var(--fp-purple-light)]"
          href="/"
        >
          <Image
            className=""
            src={images.focusPowerLogo}
            height={32}
            width={32}
            alt="logo"
          />
        </Link>
        <ul className="mt-7">
          {asideItems.map((item) => (
            <li
              className={`p-[19px] relative aside-item ${
                selectedKey === item.key ? 'aside-item-selected' : ''
              }`}
              key={item.key}
              onClick={() => setSelectedKey(item.key)}
            >
              <Link href="/">
                <Image className="svg-icon" src={item.icon} alt="menu-icon" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className={`fp-white-bg h-dvh relative transition-all duration-500`}>
        <h5
          className={`border-b border-[var(--fp-purple-light)] ${
            collapsed ? "hidden" : "px-6 py-[18px] heading-5"
          }`}
        >
          {menuContent[selectedKey]?.title || "Default Menu"}
        </h5>
        <button
          onClick={() => setCollapsed((past) => !past)}
          className={`text-xs py-2 px-[2px] absolute translate-y-[-50%] ${
            collapsed
              ? "-right-4 top-8 fp-white-bg rounded-tr-md rounded-br-md"
              : "right-0 top-8 fp-bg rounded-tl-md rounded-bl-md"
          }`}
        >
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </button>
        <div
          className={`${
            collapsed
              ? "hidden"
              : "flex flex-col h-[calc(100dvh-65px)] justify-between"
          }`}
        >
          <div className="p-6 flex flex-col gap-4">
            <span className="sb-caption-2 fp-purple-medium-ft">
              Direct Report
            </span>
            <ul className="fp-purple-dark-ft">
              {menuContent[selectedKey]?.reports.map((report, index) => {
                if (typeof report === "string") {
                  return (
                    <li key={index} className="m-caption-1 py-[9px]">
                      {report}
                    </li>
                  );
                } else if (Array.isArray(report)) {
                  return (
                    <li key={index} className="relative">
                      <select
                        className="m-caption-1 py-[9px] w-full appearance-none focus:outline-none"
                        name=""
                        id=""
                      >
                        {report.map((option, optionIndex) => (
                          <option key={`${option}-${optionIndex}`}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <span className="absolute fp-purple-dark-ft right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <Image src={icons.asideDDSvg} alt="dropdown icon" />
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
            <button className="fp-purple-light-bg fp-blue-light-ft sb-caption-1 p-[9px] rounded-lg flex items-center justify-center">
              <PlusOutlined className="mr-1.5 text-lg" />
              Add Direct Report
            </button>
          </div>
          <div className="flex flex-col items-center pt-6 pb-8">
            <Image
              src={images.applyRadicalFocusImg}
              width={162}
              height={158}
              alt="apply radical focus"
            />
            <div className="mt-4 px-6 text-center">
              <p className="sb-caption-1"> Apply Radical Focus</p>
              <p className="pt-2 body-2">
                Track objectives, define priorities <br /> and update KPIs &
                initiatives
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Layout>
        <Sider
          collapsible
          theme="light"
          trigger={null}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={'fit-content'}
          className={collapsed ? 'sider-collapsed' : 'sider-expanded'}
        >

          <div className="demo-logo-vertical relative">
            <h5
              className={`border-b border-[var(--fp-purple-light)] ${
                collapsed ? 'hidden' : 'px-6 py-[18px] heading-5'
              }`}
            >
              {menuContent[selectedKey]?.title || 'Default Menu'}
            </h5>
            <button
              onClick={() => setCollapsed((past) => !past)}
              className={`text-xs py-2 px-[2px] absolute translate-y-[-50%] ${
                collapsed
                  ? '-right-4 top-8 fp-white-bg rounded-tr-md rounded-br-md'
                  : 'right-0 top-8 fp-bg rounded-tl-md rounded-bl-md'
              }`}
            >
              {collapsed ? <RightOutlined /> : <LeftOutlined />}
            </button>
          </div>

          {!collapsed && (
            <div className="sb-caption-2 fp-purple-medium-ft mx-6 mt-6">
              {menuContent[selectedKey].infoText}
            </div>
          )}
          {!collapsed && (
            <Menu defaultSelectedKeys={['report-0']} mode="inline" items={items} />
          )}

          {!collapsed && menuContent[selectedKey].action && (
            <div className="mx-4">
              <button
                className="fp-purple-light-bg fp-blue-light-ft sb-caption-1 p-[9px] rounded-lg flex items-center justify-center w-full mt-4"
                onClick={menuContent[selectedKey].action.onClick}
              >
                <PlusOutlined className="mr-1.5 text-lg" />
                {menuContent[selectedKey].action.btnText}
              </button>
            </div>
          )}

          {!collapsed && menuContent[selectedKey].footer && (
            <div className="mt-auto">
              {menuContent[selectedKey].footer?.content}
            </div>
          )}
        </Sider>
      </Layout>
    </div>
  );
};

export default Aside;

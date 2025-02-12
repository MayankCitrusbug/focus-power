'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

import { images } from '@/assets/images';
import { icons } from '@/assets/icons';


const items: MenuProps['items'] = [
  {
    label: (
      <Link
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Edit Profile
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Settings
      </Link>
    ),
    key: '1',
  }
];

const Header: React.FC = () => {
  return (
    <header className="py-4 px-10 flex items-center gap-6 justify-end border-b border-fp">
      <button>
        <Image src={icons.paperPlaneSvg} alt="messages icon" />
      </button>
      <button>
        <Image src={icons.bellSvg} alt="notification icon" />
      </button>
      <div className="flex items-center gap-2">
        <Image
          src={images.matildaImg}
          width={32}
          height={32}
          alt="matilda avatar"
        />
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className='sb-caption-4'>
              Matilda Stone
              <Image src={icons.headerDDSvg} alt='dropdown icon' />
            </Space>
          </a>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;

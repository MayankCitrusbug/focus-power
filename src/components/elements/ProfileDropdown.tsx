import { useState } from 'react';
import { icons } from '@/assets/icons';
import { images } from '@/assets/images';

import Image from 'next/image';

type profileProps = {
    profiles: string[]
}

const ProfileDropdown:React.FC<profileProps> = ({profiles}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-20 inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex w-full items-center gap-4 px-2.5 py-[5px] bg-white shadow-md rounded-lg border border-fp hover:shadow-lg transition"
      >
        <Image src={images.matildaImg} alt="Profile" width={26} height={26} />
        <Image
          className="absolute right-[5px]"
          src={icons.profileDDSvg}
          alt="dropdown icon"
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 z-10 w-20 bg-white shadow-lg rounded-lg p-2 flex flex-col gap-2">
          {profiles.map((src, index) => (
            <Image
              key={index}
              src={images.matildaImg}
              className="rounded-full cursor-pointer hover:scale-110 transition"
              width={26}
              height={26}
              alt={`User ${index}`}
              onClick={() => setOpen((prev) => !prev)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

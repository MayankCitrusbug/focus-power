import React from 'react';
import Image from 'next/image';

interface PrimaryIconBtnProps {
  icon: string;
  alt: string;
  text?: string;
  onClick: () => void;
}

const PrimaryIconBtn: React.FC<PrimaryIconBtnProps> = ({
  icon,
  alt,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="sb-caption-2 py-1.5 px-2 rounded-md flex items-center fp-purple-light-bg fp-blue-light-ft"
    >
      <Image className="mr-1" src={icon} alt={alt} />
      {text}
    </button>
  );
};

export default PrimaryIconBtn;

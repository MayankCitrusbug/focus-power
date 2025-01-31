import React from 'react';

interface PrimaryBtnProps {
  text: string;
  classNames: string;
  onClick: () => void;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  text,
  classNames,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={classNames}>
      {text}
    </button>
  );
};

export default PrimaryBtn;

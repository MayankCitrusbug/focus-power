'use client'; // Required for Next.js App Router

import { Slider, ConfigProvider } from 'antd';
import { useState } from 'react';

interface CustomSliderProps {
  initialProgress?: number;
  sliderWidth?: number
  onProgressChangeComplete?: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  initialProgress = 25,
  sliderWidth = 74,
  onProgressChangeComplete,
}) => {
  const [progress, setProgress] = useState<number>(initialProgress);

  function getColor(value: number,): string {
    if (value <= 25) return 'var(--fp-danger-light)';
    if (value > 25 && value < 60) return 'var(--fp-warning-light)';
    return 'var(--fp-success-light)';
  }

  const color = getColor(progress);

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            trackBg: color,
            handleColor: color,
            handleSize: 12,
            handleLineWidth: 0,
          },
        },
      }}
    >
      <div className="flex gap-2 items-center fp-purple-dark-ft">
        <Slider
          min={0}
          max={100}
          value={progress}
          onChange={(value: number) => setProgress(value)}
          onChangeComplete={(value: number) => {
            if (onProgressChangeComplete) {
              onProgressChangeComplete(value);
            }
          }}
          styles={{
            rail: { height: 2 },
            track: { height: 2 },
          }}
          style={{ width: sliderWidth }}
        />
        <input
          className="px-1.5 py-[3px] border border-[(--fp-purple-light)] rounded-md w-[38px] body-3"
          type="text"
          value={`${progress}`}
          readOnly
        />
        <span className="m-caption-1">%</span>
      </div>
    </ConfigProvider>
  );
};

export default CustomSlider;

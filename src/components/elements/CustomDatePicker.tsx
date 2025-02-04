import { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

interface CustomDatePickerProps {
  selectedDate: string;
  classNames : string;
  onDateChange: (newDate: string) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selectedDate,
  classNames,
  onDateChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState<string>(selectedDate);

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format('DD-MM-YYYY');
      setDate(formattedDate);
      onDateChange(formattedDate);
    }
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className={`fp-purple-dark-ft body-2 cursor-pointer border border-[var(--fp-bg)] rounded-lg px-2.5 py-[5px] ${classNames}`}
        value={date.replace(/-/g, '.')}
        readOnly
        onClick={() => setIsEditing(true)} 
      />

      {isEditing && (
        <DatePicker
          open={isEditing} 
          value={dayjs(date, 'DD-MM-YYYY')}
          format="DD-MM-YYYY"
          onChange={handleDateChange}
          onOpenChange={(open) => setIsEditing(open)} 
          className="absolute top-0 left-0 opacity-0 pointer-events-none"
        />
      )}
    </div>
  );
};

export default CustomDatePicker;

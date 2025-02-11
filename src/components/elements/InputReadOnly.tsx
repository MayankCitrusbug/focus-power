interface InputReadOnlyProps {
  value: string;
  classNames: string;
}

const InputReadOnly: React.FC<InputReadOnlyProps> = ({
  value,
  classNames
}) => {
  return (
    <input type="text" value={value} className={`py-[5px] px-2.5 border border-fp rounded-lg ${classNames}`} readOnly />
  );
};

export default InputReadOnly;

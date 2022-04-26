import { useCallback } from 'react';
import { FilterType } from '../context/AppContext';

interface OptionProps {
  label: string;
  value: FilterType;
  isActive: boolean;
  onChange: (value: FilterType) => void;
}

const Option: React.FC<OptionProps> = ({
  label,
  value,
  isActive,
  onChange,
}) => {
  const handleChange = useCallback(() => {
    onChange(value);
  }, []);
  return (
    <div className='form-check ml-4'>
      <label className='form-check-label inline-block text-slate-700'>
        <input
          className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-4  checked:border-indigo-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-1 cursor-pointer'
          type='radio'
          checked={isActive}
          onChange={handleChange}
        />

        {label}
      </label>
    </div>
  );
};

export default Option;

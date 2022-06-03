import { AppContext } from 'context/AppContext';
import { useCallback, useContext } from 'react';
import Option from './Option';

const Filter: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleChange = useCallback((value: FilterType) => {
    dispatch({ type: 'filter', payload: value });
  }, []);

  return (
    <div className='flex justify-end'>
      <Option
        value='all'
        label='All'
        onChange={handleChange}
        isActive={state.filter == 'all'}
      />
      <Option
        value='active'
        label='Active'
        onChange={handleChange}
        isActive={state.filter == 'active'}
      />
      <Option
        value='completed'
        label='Completed'
        onChange={handleChange}
        isActive={state.filter == 'completed'}
      />
    </div>
  );
};

export default Filter;

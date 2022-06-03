import { AppContext } from 'context/AppContext';
import { useCallback, useContext } from 'react';
import { useDeleteAllTodosQuery } from 'services/todo.services';
import { PulseLoader } from 'react-spinners';

const Info: React.FC = () => {
  const { state } = useContext(AppContext);
  const [{ isFetching }, deleteAllTodos] = useDeleteAllTodosQuery();

  const handleClick = useCallback(() => {
    if (confirm('Are you sure?')) {
      deleteAllTodos();
    }
  }, []);

  const pending = state.todos.filter((todo) => !todo.completed).length;

  if (pending == 0) return null;

  return (
    <div className='flex justify-between items-center'>
      <div className='text-slate-600'>
        You have <span className='font-bold'>{pending}</span> pending task
      </div>
      <button
        className='bg-red-500 disabled:px-8 hover:bg-red-400 py-3 px-4 text-white disabled:bg-red-400 disabled:hover:bg-red-500 w-28'
        onClick={handleClick}
        disabled={isFetching}>
        {isFetching ? <PulseLoader size={6} color='#ffffff' /> : 'Clear All'}
      </button>
    </div>
  );
};

export default Info;

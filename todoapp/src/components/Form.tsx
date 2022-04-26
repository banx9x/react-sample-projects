import React, { useCallback, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useCreateNewTodoQuery } from '../services/todo.services';
import Filter from './Filter';

const Form: React.FC = () => {
  const [title, setTitle] = useState('');
  const [{ isFetching }, createNewTodo] = useCreateNewTodoQuery();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim().length == 0) return;
    else {
      createNewTodo({ title }).then(() => {
        setTitle('');
      });
    }
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  return (
    <div className='mb-4'>
      <form onSubmit={handleSubmit} className='mb-4'>
        <div className='flex gap-1'>
          <input
            type='text'
            id='title'
            value={title}
            onChange={handleChange}
            disabled={isFetching}
            placeholder='What do you want to do?'
            className='border-2 border-indigo-100 outline-none p-3 px-5 flex-1 shrink-0 focus:border-indigo-500'
          />
          <button
            disabled={isFetching}
            className='border-0 px-4 w-28 bg-indigo-500 border-green-600 text-white hover:bg-indigo-400 disabled:bg-indigo-400'>
            {isFetching ? <PulseLoader size={6} color='#ffffff' /> : 'Create'}
          </button>
        </div>
      </form>

      <Filter />
    </div>
  );
};

export default Form;

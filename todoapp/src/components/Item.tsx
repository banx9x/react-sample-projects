import { useCallback } from 'react';
import { BounceLoader, PulseLoader } from 'react-spinners';
import { useDeleteTodoQuery, useUpdateTodoQuery } from 'services/todo.services';
import { BiTrash } from 'react-icons/bi';

const Item: React.FC<Todo> = ({ id, title, completed }) => {
  const [{ isFetching: deleting }, deleteTodo] = useDeleteTodoQuery();
  const [{ isFetching: completing }, updateTodo] = useUpdateTodoQuery();

  const handleClick = useCallback(() => {
    if (confirm('Are you sure?')) deleteTodo({ id });
  }, []);

  const handleChange = useCallback(() => {
    updateTodo({ id, title, completed: !completed });
  }, [completed]);

  return (
    <div className='group p-3 text-slate-700 relative bg-slate-100 overflow-hidden mb-1 hover:bg-slate-50'>
      {completing ? (
        <BounceLoader
          size={16}
          color='#6366f1'
          css='display: inline-block; margin-right: 0.5rem; margin-top: 0.25rem; vertical-align: top'
        />
      ) : (
        <input
          type='checkbox'
          className='h-4 w-4 mt-1 align-top mr-2 accent-indigo-500'
          checked={completed}
          onChange={handleChange}
        />
      )}

      {title}

      <button
        onClick={handleClick}
        disabled={deleting}
        className='absolute top-0 right-0 h-full bg-red-500 text-white text-xl hover:bg-red-400 disabled:bg-red-400 translate-x-full group-hover:translate-x-0 transition disabled:translate-x-0 w-16 text-center'>
        {deleting ? (
          <PulseLoader size={4} color='#ffffff' margin={1} />
        ) : (
          <BiTrash className='mx-auto' />
        )}
      </button>
    </div>
  );
};

export default Item;

import { AppContext } from 'context/AppContext';
import { useContext } from 'react';
import { SyncLoader } from 'react-spinners';
import { useGetAllTodosQuery } from 'services/todo.services';
import Error from './Error';
import Item from './Item';

const List: React.FC = () => {
  const { isFetching, isError, error } = useGetAllTodosQuery();
  const { state } = useContext(AppContext);

  if (isFetching) {
    return (
      <div className='text-center'>
        <SyncLoader size={6} margin={1} color='rgb(51, 65, 85)' />
      </div>
    );
  }

  if (isError) {
    return <Error {...error!} />;
  }

  if (state.todos.length == 0) {
    return (
      <div className='text-center text-slate-700 text-base'>All done! :)</div>
    );
  }

  return (
    <div className='mb-4'>
      {state
        .todos!.filter((todo) =>
          state.filter == 'all'
            ? true
            : state.filter == 'active'
            ? !todo.completed
            : todo.completed
        )
        .map((todo) => <Item key={todo.id} {...todo} />)
        .reverse()}
    </div>
  );
};

export default List;

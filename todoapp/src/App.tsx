import { useReducer } from 'react';
import Info from 'components/Info';
import Form from 'components/Form';
import List from 'components/List';
import { AppContext, reducer } from 'context/AppContext';

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    filter: 'all',
  });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <div className='xs:w-full sm:w-128 mx-auto mt-12 bg-white p-6 pt-12 shadow-lg'>
        <h1 className='text-center font-sans text-5xl mb-12 text-slate-700'>
          Simple TodoApp
        </h1>

        <Form />

        <List />

        <Info />
      </div>
    </AppContext.Provider>
  );
}

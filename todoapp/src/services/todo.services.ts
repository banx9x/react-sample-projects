import { AppContext } from 'context/AppContext';
import { useContext, useEffect, useState } from 'react';

export const useGetAllTodosQuery = (): GetAllTodos => {
  const { dispatch } = useContext(AppContext);
  const [state, setState] = useState<GetAllTodos>({
    isFetching: true,
    isError: false,
  });

  useEffect(() => {
    fetch('/todos')
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error: ErrorResponse) => {
            throw error;
          });
        } else {
          return res.json();
        }
      })
      .then((json: GetAllTodosResponse) => {
        setState({
          isFetching: false,
          isError: false,
          data: json.data,
        });
        dispatch({ type: 'loaded', payload: json.data });
      })
      .catch((error: ErrorResponse) => {
        setState({
          isFetching: false,
          isError: true,
          error,
        });
      });
  }, []);

  return state;
};

export const useCreateNewTodoQuery = (): [
  CreateNewTodo,
  ({ title }: Pick<Todo, 'title'>) => Promise<void>
] => {
  const { dispatch } = useContext(AppContext);
  const [state, setState] = useState<CreateNewTodo>({
    isFetching: false,
    isError: false,
  });

  const createNewTodo = ({ title }: Pick<Todo, 'title'>) => {
    setState({
      isFetching: true,
      isError: false,
    });

    return fetch('/todos', {
      method: 'POST',
      body: JSON.stringify({ title }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error: ErrorResponse) => {
            throw error;
          });
        } else {
          return res.json();
        }
      })
      .then((json: CreateTodoResponse) => {
        setState({
          isFetching: false,
          isError: false,
          data: json.data,
        });

        dispatch({ type: 'created', payload: json.data });
      })
      .catch((error: ErrorResponse) => {
        setState({
          isFetching: false,
          isError: true,
          error,
        });
      });
  };

  return [state, createNewTodo];
};

export const useUpdateTodoQuery = (): [
  UpdateTodo,
  (todo: Todo) => Promise<void>
] => {
  const { dispatch } = useContext(AppContext);
  const [state, setState] = useState<UpdateTodo>({
    isFetching: false,
    isError: false,
  });

  const updateTodo = (todo: Todo) => {
    setState({
      isFetching: true,
      isError: false,
    });

    return fetch(`/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error: ErrorResponse) => {
            throw error;
          });
        } else {
          return res.json();
        }
      })
      .then((json: UpdateTodoReponse) => {
        setState({
          isFetching: false,
          isError: false,
          data: json.data,
        });

        dispatch({ type: 'updated', payload: json.data });
      })
      .catch((error: ErrorResponse) => {
        setState({
          isFetching: false,
          isError: true,
          error,
        });
      });
  };

  return [state, updateTodo];
};

export const useDeleteTodoQuery = (): [
  DeleteTodo,
  ({ id }: Pick<Todo, 'id'>) => Promise<void>
] => {
  const { dispatch } = useContext(AppContext);
  const [state, setState] = useState<DeleteTodo>({
    isFetching: false,
    isError: false,
  });

  const deleteTodo = ({ id }: Pick<Todo, 'id'>) => {
    setState({
      isFetching: true,
      isError: false,
    });

    return fetch(`/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error: ErrorResponse) => {
            throw error;
          });
        } else {
          setState({
            isFetching: false,
            isError: false,
          });

          dispatch({ type: 'deleted', payload: { id } });
        }
      })
      .catch((error: ErrorResponse) => {
        setState({
          isFetching: false,
          isError: true,
          error,
        });
      });
  };

  return [state, deleteTodo];
};

export const useDeleteAllTodosQuery = (): [DeleteTodo, () => Promise<void>] => {
  const { dispatch } = useContext(AppContext);
  const [state, setState] = useState<DeleteTodo>({
    isFetching: false,
    isError: false,
  });

  const deleteAllTodos = () => {
    setState({
      isFetching: true,
      isError: false,
    });

    return fetch(`/todos`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error: ErrorResponse) => {
            throw error;
          });
        } else {
          setState({
            isFetching: false,
            isError: false,
          });

          dispatch({ type: 'cleared' });
        }
      })
      .catch((error: ErrorResponse) => {
        setState({
          isFetching: false,
          isError: true,
          error,
        });
      });
  };

  return [state, deleteAllTodos];
};

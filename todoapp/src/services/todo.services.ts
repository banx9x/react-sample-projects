import { AppContext } from '../context/AppContext';
import {
  CreateTodoResponse,
  ErrorResponse,
  GetAllTodosResponse,
  Todo,
  UpdateTodoReponse,
} from 'models/todo.model';
import { useContext, useEffect, useState } from 'react';

interface Status {
  isFetching: boolean;
  isError: boolean;
  error?: ErrorResponse;
}

interface GetAllTodos extends Status {
  data?: Todo[];
}

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

interface CreateNewTodo extends Status {
  data?: Todo;
}

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

interface UpdateTodo extends Status {
  data?: Todo;
}

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

interface DeleteTodo extends Status {}

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

import { Todo } from 'models/todo.model';
import React from 'react';

export type FilterType = 'all' | 'active' | 'completed';

type AppState = {
  todos: Todo[];
  filter: FilterType;
};

type AppAction =
  | { type: 'loaded'; payload: Todo[] }
  | { type: 'created'; payload: Todo }
  | { type: 'updated'; payload: Todo }
  | { type: 'deleted'; payload: Pick<Todo, 'id'> }
  | { type: 'cleared' }
  | { type: 'filter'; payload: FilterType };

type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
};

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'loaded': {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case 'created': {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }

    case 'updated': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload.id ? action.payload : todo
        ),
      };
    }

    case 'deleted': {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload.id),
      };
    }

    case 'cleared': {
      return {
        ...state,
        todos: [],
      };
    }

    case 'filter': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

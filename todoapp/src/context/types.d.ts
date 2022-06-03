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

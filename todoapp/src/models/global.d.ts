interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface GetAllTodosResponse {
  data: Todo[];
}

interface CreateTodoResponse {
  data: Todo;
}

interface UpdateTodoReponse {
  data: Todo;
}

interface DeleteTodoResponse {
  data: {};
}

interface ErrorResponse {
  code: number;
  message: string;
}

type FilterType = 'all' | 'active' | 'completed';

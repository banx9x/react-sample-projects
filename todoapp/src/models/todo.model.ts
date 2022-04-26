export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface GetAllTodosResponse {
  data: Todo[];
}

export interface CreateTodoResponse {
  data: Todo;
}

export interface UpdateTodoReponse {
  data: Todo;
}

export interface DeleteTodoResponse {
  data: {};
}

export interface ErrorResponse {
  code: number;
  message: string;
}

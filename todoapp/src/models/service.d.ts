interface Status {
  isFetching: boolean;
  isError: boolean;
  error?: ErrorResponse;
}

interface GetAllTodos extends Status {
  data?: Todo[];
}

interface CreateNewTodo extends Status {
  data?: Todo;
}

interface UpdateTodo extends Status {
  data?: Todo;
}

interface DeleteTodo extends Status {}

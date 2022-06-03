// import { Todo } from 'models/todo.model';
import { rest } from 'msw';

const todos = localStorage.getItem('todos')
  ? (JSON.parse(localStorage.getItem('todos')!) as Todo[])
  : ([] as Todo[]);

const uid = (() => {
  let id = todos.length > 0 ? todos[todos.length - 1].id : 0;

  return () => {
    return ++id;
  };
})();

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const handlers = [
  rest.get('todos', (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ data: todos }));
  }),

  rest.post('todos', (req, res, ctx) => {
    const { title } = JSON.parse(req.body as string) as Pick<Todo, 'title'>;

    const newTodo = {
      id: uid(),
      title,
      completed: false,
    };

    todos.push(newTodo);
    save();

    return res(ctx.delay(1000), ctx.status(201), ctx.json({ data: newTodo }));
  }),

  rest.put('todos/:id', (req, res, ctx) => {
    const { id } = req.params;
    const { title, completed } = JSON.parse(req.body as string) as Pick<
      Todo,
      'title' | 'completed'
    >;

    const todo = todos.find((todo) => todo.id === +id);

    if (!todo) {
      return res(
        ctx.delay(1000),
        ctx.status(400),
        ctx.json({ code: 400, message: 'Task Not Found' })
      );
    } else {
      todo.title = title;
      todo.completed = completed;
      save();

      return res(ctx.delay(1000), ctx.status(200), ctx.json({ data: todo }));
    }
  }),

  rest.delete('todos/:id', (req, res, ctx) => {
    const { id } = req.params;

    const todo = todos.find((todo) => todo.id === +id);

    if (!todo) {
      return res(
        ctx.delay(10000),
        ctx.status(400),
        ctx.json({ code: 400, message: 'Task Not Found' })
      );
    } else {
      const index = todos.indexOf(todo);

      todos.splice(index, 1);
      save();

      return res(ctx.delay(1000), ctx.status(204));
    }
  }),

  rest.delete('/todos', (req, res, ctx) => {
    todos.length = 0;
    save();

    return res(ctx.delay(1000), ctx.status(204));
  }),
];

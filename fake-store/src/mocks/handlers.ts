import { rest } from 'msw';
import { data } from './data';

const handlers = [
  rest.get('/api/new-arivals', (req, res, ctx) => {
    const newArivals = data.products.slice(0, 5);

    return res(ctx.delay(1000), ctx.status(200), ctx.json(newArivals));
  }),

  rest.get('/api/*', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(404),
      ctx.json({ error: 'Page Not Found' })
    );
  }),
];

export default handlers;

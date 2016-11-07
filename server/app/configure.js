import mount from 'koa-mount';
import json from 'koa-json';
import cors from 'koa-cors';

export const configureApp = function(app, routes, config) {
  app.use(json());
  app.use(cors());
  app.use(routes.routes());
  app.use(mount(config.mount, routes.middleware()));
};

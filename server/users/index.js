import { getUser } from './users';

export default function(router) {
  router.get('/user/:userName', getUser);
  return router;
}

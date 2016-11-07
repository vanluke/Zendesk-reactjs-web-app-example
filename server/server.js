import app, { configure } from './app';
import routes from './routes';
import config from '../server.config';

const port = config.get('port');
const host = config.get('host');
const appConfig = {
  mount: `/api/v${config.get('version')}`,
};

process.on('uncaughtException', (err) => {
  console.error(err);
});

configure(app, routes, appConfig);

app.listen(port, host, function() {
  console.info(`listening on ${host}/${port}${appConfig.mount}`);
});

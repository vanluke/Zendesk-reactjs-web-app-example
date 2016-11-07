import convict from 'convict';

const conf = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port.',
    format: 'port',
    default: 1337,
    env: 'PORT'
  },
  host: {
    doc: 'The host.',
    format: '*',
    default: 'localhost',
    env: 'HOST'
  },
  version: {
    doc: 'Version.',
    format: '*',
    default: '0',
    env: 'VERSION'
  },
  mongodb: {
    url: {
      doc: 'MongoDB address',
      format: String,
      default: 'undefined',
      env: 'url'
    },
    pref: {
      doc: 'MongoDB pref',
      format: String,
      default: 'mongodb://',
      env: 'pref'
    },
    user: {
      doc: 'MongoDB user',
      format: String,
      default: 'undefined',
      env: 'user'
    },
    pass: {
      doc: 'MongoDB pass',
      format: String,
      default: 'undefined',
      env: 'pass'
    }
  }
});

const env = conf.get('env') || 'development';
conf.loadFile(`./server/config/${env}.json`);
conf.validate({ strict: true });

export default conf;

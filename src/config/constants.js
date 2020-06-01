const defaultConfig = {};

const devConfig = {
  CONFIG_ID: 'development',
  PORT: 8080,
  DB_URL: 'mongodb://localhost:27017/mydb',
};

const stagingConfig = {
  CONFIG_ID: 'staging',
  PORT: 8080,
  DB_URL: 'visa-bff-db-stag',
};

const prodConfig = {
  CONFIG_ID: 'production',
  PORT: 8080,
  DB_URL: 'visa-bff-db-prod',
};

function environmentConfig(env) {
  console.log('Configuration env :', env);
  switch (env) {
    case 'development':
      return devConfig;
    case 'staging':
      return stagingConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...environmentConfig(process.env.ENV),
};

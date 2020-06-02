const defaultConfig = {};

const devConfig = {
  CONFIG_ID: 'development',
  PORT: 8080,
  DB_HOST: process.env.ENV.DB_HOST || 'localhost',
  DB_USER: process.env.ENV.DB_USER || 'root',
  DB_PASSWORD: process.env.ENV.DB_PASSWORD || '',
  DATABASE: process.env.DATABASE || 'organization_db',
};

const stagingConfig = {
  CONFIG_ID: 'production',
  PORT: 8080,
  DB_HOST: process.env.ENV.DB_HOST,
  DB_USER: process.env.ENV.DB_USER,
  DB_PASSWORD: process.env.ENV.DB_PASSWORD,
  DATABASE: process.env.DATABASE,
};

const prodConfig = {
  CONFIG_ID: 'production',
  PORT: 8080,
  DB_HOST: process.env.ENV.DB_HOST,
  DB_USER: process.env.ENV.DB_USER,
  DB_PASSWORD: process.env.ENV.DB_PASSWORD,
  DATABASE: process.env.DATABASE,
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

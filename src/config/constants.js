const defaultConfig = {};

const devConfig = {
  CONFIG_ID: 'development',
  PORT: process.env.PORT || 9000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DATABASE: process.env.DATABASE || 'organization_db',
  DB_PORT: process.env.PORT || '3306',
};

const stagingConfig = {
  CONFIG_ID: 'staging',
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DATABASE,
  DB_PORT: process.env.DB_PORT,
};

const prodConfig = {
  CONFIG_ID: 'production',
  PORT: process.env.PORT || 9000,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DATABASE,
  DB_PORT: process.env.DB_PORT,
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

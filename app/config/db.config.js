module.exports = {
  HOST: 'localhost',
  USER: 'jure',
  PASSWORD: 'i',
  DB: 'tennis',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

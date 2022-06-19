require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    database: 'dev_db',
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    database: 'test_db',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    },
  },
}

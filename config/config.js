require('dotenv').config();

module.exports = 

{
  "development": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "goals_DB",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "goals_DB",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
  }

}


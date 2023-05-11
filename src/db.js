import {createPool} from "mysql2/promise";
import {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} from './config.js'

export const pool = createPool({
  host: DB_HOST,
  user:DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME
  /*host: 'sql254.main-hosting.eu',
  user:'moterouser',
  password: 'mD!+m5t3',
  database: '	puntomotero'*/
});


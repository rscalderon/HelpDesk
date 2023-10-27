import dotenv from 'dotenv';

dotenv.config();
import { Pool } from 'pg';

// eslint-disable-next-line no-undef
const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

// log query and then return result of invoking pool.query()
const query = (text, params, callback) => {
  console.log('executed query', text);
  return pool.query(text, params, callback);
};

// export query to controllers as access point to db
export default query;

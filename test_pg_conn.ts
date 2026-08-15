import { Client } from 'pg';

const client = new Client({
  host: 'db.gzknlrfrlcyechknpdpj.supabase.co',
  port: 5432,
  user: 'postgres',
  password: 'info.6264.innovac',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

async function main() {
  console.log('Connecting to PostgreSQL...');
  try {
    await client.connect();
    console.log('Connected successfully!');
    const res = await client.query('SELECT tablename FROM pg_tables WHERE schemaname = \'public\';');
    console.log('Tables in public schema:', res.rows.map(r => r.tablename));
  } catch (err) {
    console.error('Connection failed:', err);
  } finally {
    await client.end();
  }
}

main();

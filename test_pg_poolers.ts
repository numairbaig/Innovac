import { Client } from 'pg';

const regions = [
  'us-east-1',
  'us-east-2',
  'us-west-1',
  'us-west-2',
  'eu-central-1',
  'eu-west-1',
  'eu-west-2',
  'eu-west-3',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-northeast-1',
  'ap-northeast-2',
  'sa-east-1'
];

async function tryConnect(region: string) {
  const host = `aws-0-${region}.pooler.supabase.com`;
  console.log(`Trying ${region} (${host})...`);
  const client = new Client({
    host,
    port: 6543, // Transaction pooler
    user: 'postgres.gzknlrfrlcyechknpdpj',
    password: 'info.6264.innovac',
    database: 'postgres',
    ssl: {
      rejectUnauthorized: false
    },
    connectionTimeoutMillis: 5000
  });

  try {
    await client.connect();
    console.log(`SUCCESS connected to ${region}!`);
    const res = await client.query('SELECT tablename FROM pg_tables WHERE schemaname = \'public\';');
    console.log('Tables:', res.rows.map(r => r.tablename));
    return client;
  } catch (err: any) {
    console.log(`Failed for ${region}:`, err.message);
    await client.end().catch(() => {});
    return null;
  }
}

async function main() {
  for (const region of regions) {
    const client = await tryConnect(region);
    if (client) {
      // Execute the tables creation here if connected!
      console.log('Found active connection, closing now.');
      await client.end();
      break;
    }
  }
}

main();

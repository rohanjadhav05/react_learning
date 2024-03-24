import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://wxgcbfvi:xlMDHnXjWNYOzGCd_04S-1wg1T4SJQZh@satao.db.elephantsql.com/wxgcbfvi");
    await client.connect();
    return client;
}
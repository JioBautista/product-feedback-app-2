import { sql } from "@vercel/postgres";

export default async function fetchStatus(status) {
  const { rows } = await sql`SELECT * FROM products WHERE status = ${status}`;

  return rows;
}

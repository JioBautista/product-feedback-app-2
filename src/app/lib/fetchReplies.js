import { sql } from "@vercel/postgres";

export default async function fetchReplies(id) {
  const { rows } = await sql`SELECT * FROM replies WHERE comments_id = ${id}`;
  return rows;
}

import { sql } from "@vercel/postgres";

export default async function fetchComments(id) {
  const { rows } = await sql`SELECT * FROM comments WHERE product_id = ${id}`;
  return rows;
}

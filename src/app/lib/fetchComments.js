import { sql } from "@vercel/postgres";

export default async function fetchComments(product_id) {
  const { rows } =
    await sql`SELECT * FROM comments WHERE product_id = ${product_id}`;
  return rows;
}

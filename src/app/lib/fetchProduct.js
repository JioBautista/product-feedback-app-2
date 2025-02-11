import { sql } from "@vercel/postgres";

export default async function fetchProduct(id) {
  const { rows } = await sql`SELECT * FROM products WHERE id = ${id}`;
  return rows;
}

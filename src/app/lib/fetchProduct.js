import { sql } from "@vercel/postgres";

export default async function fetchProduct(product_id) {
  const { rows } = await sql`SELECT * FROM products WHERE id = ${product_id}`;
  return rows;
}

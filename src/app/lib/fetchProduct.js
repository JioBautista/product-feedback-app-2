import { sql } from "@vercel/postgres";

export default async function fetchProduct(productid) {
  const { rows } =
    await sql`SELECT * FROM products WHERE productid = ${productid}`;
  return rows;
}

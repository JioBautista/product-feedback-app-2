import { sql } from "@vercel/postgres";

export default async function fetchProducts(sort) {
  const { rows } = await sql`SELECT * FROM products`;
  if (sort === "Most Upvotes") {
    const { rows } = await sql`SELECT * FROM products ORDER BY upvotes DESC`;
    return rows;
  } else if (sort === "Least Upvotes") {
    const { rows } = await sql`SELECT * FROM products ORDER BY upvotes ASC`;
    return rows;
  }
  return rows;
}

import { sql } from "@vercel/postgres";
export default async function fetchProducts(filter, sort) {
  const { rows } = await sql`SELECT * FROM products`;
  if (filter) {
    const { rows } =
      await sql`SELECT * FROM products WHERE category = ${filter}`;
    return rows;
  } else if (sort === "Most Upvotes") {
    const { rows } = await sql`SELECT * FROM products ORDER BY upvotes DESC`;
    return rows;
  } else if (sort === "Least Upvotes") {
    const { rows } = await sql`SELECT * FROM products ORDER BY upvotes ASC`;
    return rows;
  } else if ((filter, sort === "Most Upvotes")) {
    const { rows } =
      await sql`SELECT * FROM products WHERE category = ${filter} ORDER BY upvotes ASC`;
    return rows;
  }
  return rows;
}

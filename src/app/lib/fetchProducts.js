import { sql } from "@vercel/postgres";

export default async function fetchProducts(sort) {
  const { rows } = await sql`SELECT * FROM products`;
  if (sort === "Most Upvotes") {
    const { rows } = await sql`SELECT * FROM products ORDER BY upvotes DESC`;
    return rows;
  } else if (sort === "Least Upvotes") {
    const { rows } = await sql`SELECT * FROM products ORDER BY upvotes ASC`;
    return rows;
  } else if (sort === "Most Comments") {
    const { rows } =
      await sql`SELECT products.*, COUNT(product_id) AS num_of_comments FROM products LEFT JOIN comments ON products.id = comments.product_id GROUP BY products.id ORDER BY num_of_comments DESC`;
    return rows;
  } else if (sort === "Least Comments") {
    const { rows } =
      await sql`SELECT products.*, COUNT(product_id) AS num_of_comments FROM products LEFT JOIN comments ON products.id = comments.product_id GROUP BY products.id ORDER BY num_of_comments`;
    return rows;
  }
  return rows;
}

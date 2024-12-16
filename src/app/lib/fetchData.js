import { sql } from "@vercel/postgres";
export default async function fetchData(filter) {
  if (filter) {
    const { rows } =
      await sql`SELECT * FROM products WHERE category = ${filter}`;
    return rows;
  } else {
    const { rows } = await sql`SELECT * FROM products`;
    return rows;
  }
}

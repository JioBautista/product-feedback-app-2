import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM products`;

  console.log(rows);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

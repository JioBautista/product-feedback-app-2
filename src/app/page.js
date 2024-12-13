import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM productrequests `;

  // const currentUser = rows.filter((user) => user.username === "jpacho1234");

  // console.log(currentUser);
  return (
    <div>
      <h1>Hello World</h1>
      <h2>This is the current user</h2>
    </div>
  );
}

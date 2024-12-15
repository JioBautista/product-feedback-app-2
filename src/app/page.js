import { sql } from "@vercel/postgres";
import Container from "./components/Container";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM products`;

  console.log(rows);
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}

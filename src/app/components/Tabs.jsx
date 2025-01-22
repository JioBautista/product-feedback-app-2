import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function Tabs() {
  const { rows } = await sql`SELECT * FROM products`;

  console.log(rows);
  return (
    <div className="flex items-center justify-between py-5">
      <Link href={"/roadmap/live"}>Live</Link>
      <Link href={"/roadmap/in-progress"}>In Progress</Link>
      <Link href={"/roadmap/planned"}>Planned</Link>
    </div>
  );
}
